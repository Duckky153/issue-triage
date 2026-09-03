import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const run = (command, args, extraEnv = {}) => {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    env: { ...process.env, ...extraEnv }
  });
  process.stdout.write(result.stdout);
  process.stderr.write(result.stderr);
  assert.equal(result.status, 0, `${command} ${args.join(" ")} failed`);
  return `${result.stdout}\n${result.stderr}`;
};

run(process.execPath, ["scripts/build.mjs"]);
const testOutput = run(process.execPath, ["--test", "tests/benchmark.test.mjs", "tests/collector.test.mjs", "tests/engine.test.mjs", "tests/transaction.test.mjs"]);
const artifactOutput = run(process.execPath, ["scripts/verify-artifacts.mjs"]);
const syntaxFiles = [
  "src/benchmark.js", "src/collector.js", "src/config.js", "src/engine.js", "src/release.js", "src/transaction.js", "src/validation.js",
  "scripts/browser-check.mjs", "scripts/build.mjs", "scripts/build-static.mjs", "scripts/clean-install-check.mjs", "scripts/fetch-public-issues.mjs", "scripts/refresh-and-verify.mjs", "scripts/serve.mjs", "scripts/verify-artifacts.mjs", "scripts/verify-static.mjs", "scripts/verify.mjs",
  "site/dashboard.js"
];
for (const path of syntaxFiles) run(process.execPath, ["--check", path]);
run(process.execPath, ["scripts/browser-check.mjs"], { BROWSER_PORT: String(4400 + (process.pid % 400)), WRITE_SCREENSHOTS: process.env.WRITE_SCREENSHOTS ?? "1" });
run(process.execPath, ["scripts/build-static.mjs"]);
run(process.execPath, ["scripts/verify-static.mjs"], { STATIC_TEST_PORT: String(5200 + (process.pid % 400)) });
const auditOutput = run("npm", ["audit", "--omit=dev", "--audit-level=high", "--fetch-timeout=60000", "--fetch-retries=0"]);

const proseFiles = ["README.md", "docs/DEPLOYMENT.md", "docs/JOB-DESCRIPTION-MAPPING.md", "docs/PROJECT-BRIEF.md", "docs/USER-GUIDE.md", "docs/ROUTING-POLICY.md", "docs/SOURCE-CONTRACT.md", "docs/MAINTENANCE-AND-ROLLBACK.md", "docs/TEST-PLAN.md", "docs/WALKTHROUGH.md", "evidence/CLAIM-LEDGER.md", "evidence/VERIFICATION.md", "site/index.html"];
const prose = (await Promise.all(proseFiles.map((path) => readFile(join(root, path), "utf8")))).join("\n");
const displayProse = prose.replace(/\/Users\/dakshitraj\/Vaults\/fetch\/100 Research\/Sessions\/2026-08-08 LinkedIn Premium AI Enablement Job Strategy\.md/g, "spawning-research-note");
assert.ok(!/AI Enablement|Service Desk|Operations Desk|operating recommendation|recommended route|playbook/i.test(displayProse), "retired framing remains in current prose");
assert.ok(!/\b(?:19|24|26|90)\b/.test(prose), "historical generated counts remain hard-coded in prose");
assert.ok(!/\b(?:delve|leverage|utilize|streamline|robust|cutting-edge|transformative)\b/i.test(prose), "AI-slop vocabulary remains in current prose");

const verificationPath = join(root, "evidence/current-verification.json");
const verification = JSON.parse(await readFile(verificationPath, "utf8"));
const browser = JSON.parse(await readFile(join(root, "evidence/browser-qa.json"), "utf8"));
verification.checkedAt = new Date().toISOString();
verification.status = "verified";
verification.gates = {
  unitTests: Number(testOutput.match(/# tests (\d+)/)?.[1] ?? 0),
  artifactChecks: Number(artifactOutput.match(/checks=(\d+)/)?.[1] ?? 0),
  browserChecks: browser.checks.length,
  syntaxFiles: syntaxFiles.length,
  dependencyAudit: /found 0 vulnerabilities/i.test(auditOutput) ? "0 vulnerabilities" : "completed"
};
await writeFile(verificationPath, `${JSON.stringify(verification, null, 2)}\n`);
console.log(`VERIFY_OK unit_tests=${verification.gates.unitTests} artifact_checks=${verification.gates.artifactChecks} browser_checks=${verification.gates.browserChecks} syntax_files=${syntaxFiles.length}`);
