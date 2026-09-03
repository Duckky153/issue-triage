import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { copyFile, mkdir, mkdtemp, readFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { collectSnapshot } from "../src/collector.js";
import { buildRelease, releasePaths, writeReleaseFiles } from "../src/release.js";
import { promoteWithRollback } from "../src/transaction.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const staging = await mkdtemp(join(tmpdir(), "github-triage-candidate-"));
const run = (command, args, options = {}) => new Promise((resolve, reject) => {
  const child = spawn(command, args, {
    cwd: options.cwd ?? root,
    env: { ...process.env, ...(options.env ?? {}) },
    stdio: "inherit"
  });
  child.on("error", reject);
  child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(`${command} ${args.join(" ")} exited ${code}`)));
});

try {
  const benchmark = JSON.parse(await readFile(join(root, "data/benchmark.json"), "utf8"));
  const { dataset, manifest } = await collectSnapshot();
  const files = buildRelease(dataset, manifest, benchmark);
  await writeReleaseFiles(staging, files);

  for (const relativePath of ["site/index.html", "site/dashboard.js", "site/dashboard.css", "site/favicon.svg"]) {
    const target = join(staging, relativePath);
    await mkdir(dirname(target), { recursive: true });
    await copyFile(join(root, relativePath), target);
  }

  await run(process.execPath, ["--test", "tests/benchmark.test.mjs", "tests/collector.test.mjs", "tests/engine.test.mjs", "tests/transaction.test.mjs"]);
  await run(process.execPath, ["scripts/verify-artifacts.mjs"], { env: { APP_ROOT: staging } });
  await run(process.execPath, ["scripts/browser-check.mjs"], {
    env: {
      APP_ROOT: staging,
      EVIDENCE_DIR: join(staging, "evidence"),
      BROWSER_PORT: String(4800 + (process.pid % 150)),
      WRITE_SCREENSHOTS: "1"
    }
  });

  for (const path of releasePaths) {
    assert.ok(await readFile(join(staging, path)), `candidate output missing: ${path}`);
  }
  await promoteWithRollback({
    sourceRoot: staging,
    targetRoot: root,
    relativePaths: releasePaths,
    verifyAfterPromotion: () => run(process.execPath, ["scripts/verify.mjs"], { env: { WRITE_SCREENSHOTS: "0" } })
  });

  const excluded = manifest.repositories.reduce((sum, source) => sum + source.pullRequestsExcluded, 0);
  const duplicates = manifest.repositories.reduce((sum, source) => sum + source.duplicatesExcluded, 0);
  console.log(`REFRESH_OK records=${dataset.recordCount} repositories=${manifest.repositories.length} prs_excluded=${excluded} duplicates_excluded=${duplicates} snapshot=${dataset.snapshotSha256}`);
} finally {
  if (process.env.KEEP_FAILED_CANDIDATE === "1") console.error(`CANDIDATE_RETAINED ${staging}`);
  else await rm(staging, { recursive: true, force: true });
}
