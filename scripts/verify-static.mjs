import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = fileURLToPath(new URL("../", import.meta.url));
const staticRoot = join(root, "dist");
const port = Number(process.env.STATIC_TEST_PORT || 5291);
const basePath = "/issue-triage";
const base = `http://127.0.0.1:${port}${basePath}/`;
const server = spawn(process.execPath, [join(root, "scripts/serve.mjs")], {
  cwd: root,
  env: { ...process.env, STATIC_ROOT: staticRoot, BASE_PATH: basePath, PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"]
});

async function waitForServer() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try { if ((await fetch(base)).ok) return; } catch {}
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
  }
  throw new Error("Static preview did not start");
}

let browser;
try {
  await waitForServer();
  const requiredPaths = ["", "dashboard.css", "dashboard.js", "generated-data.js", "favicon.svg", "deliverables/review-handoff.csv", "deliverables/review-handoff.json"];
  for (const path of requiredPaths) assert.ok((await fetch(new URL(path, base))).ok, `${path || "index.html"} was not served`);

  const html = await readFile(join(staticRoot, "index.html"), "utf8");
  assert.match(html, /href="\.\/deliverables\/review-handoff\.csv"/);
  assert.match(html, /href="\.\/deliverables\/review-handoff\.json"/);

  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForFunction(() => document.documentElement.dataset.ready === "true");
  const counts = await page.locator(".metrics strong").allInnerTexts();
  assert.equal(await page.locator("#issue-list .issue-row").count(), Number(counts[0]));
  assert.equal(Number(counts[0]), counts.slice(1).reduce((sum, count) => sum + Number(count), 0));
  assert.equal(errors.length, 0, errors.join(" | "));

  await page.setViewportSize({ width: 390, height: 844 });
  assert.ok(await page.locator("#source-link").isVisible());
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1));
  console.log(`STATIC_VERIFY_OK files=${requiredPaths.length} browser_views=2 console_errors=0`);
} finally {
  if (browser) await browser.close();
  server.kill("SIGTERM");
}
