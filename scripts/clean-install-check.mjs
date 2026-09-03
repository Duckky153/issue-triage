import assert from "node:assert/strict";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const temporary = await mkdtemp(join(tmpdir(), "github-triage-clean-install-"));
try {
  await cp(join(root, "package.json"), join(temporary, "package.json"));
  await cp(join(root, "package-lock.json"), join(temporary, "package-lock.json"));
  const install = spawnSync("npm", ["ci"], {
    cwd: temporary,
    encoding: "utf8",
    env: { ...process.env, PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD: "1" }
  });
  process.stdout.write(install.stdout);
  process.stderr.write(install.stderr);
  assert.equal(install.status, 0, "npm ci failed in clean temporary directory");
  const pkg = JSON.parse(await readFile(join(temporary, "node_modules/playwright/package.json"), "utf8"));
  assert.ok(pkg.version, "Playwright package was not installed");
  await writeFile(join(temporary, "install-proof.txt"), `playwright=${pkg.version}\n`);
  console.log(`CLEAN_INSTALL_OK playwright=${pkg.version}`);
} finally {
  await rm(temporary, { recursive: true, force: true });
}
