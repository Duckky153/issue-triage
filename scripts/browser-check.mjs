import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const appRoot = resolve(process.env.APP_ROOT || projectRoot);
const evidenceDir = resolve(process.env.EVIDENCE_DIR || join(appRoot, "evidence"));
const writeScreenshots = process.env.WRITE_SCREENSHOTS !== "0";
const port = Number(process.env.BROWSER_PORT || 4291);
const base = `http://127.0.0.1:${port}/`;
const server = spawn(process.execPath, [join(projectRoot, "scripts/serve.mjs")], {
  cwd: projectRoot,
  env: { ...process.env, APP_ROOT: appRoot, PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"]
});
const checks = [];
const check = (name, pass, detail = "") => {
  if (!pass) throw new Error(`BROWSER CHECK FAILED: ${name}${detail ? `: ${detail}` : ""}`);
  checks.push({ name, detail });
};

async function waitForServer() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try { if ((await fetch(base)).ok) return; } catch {}
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
  }
  throw new Error("Local server did not start");
}

let browser;
try {
  await waitForServer();
  browser = await chromium.launch({ headless: true });
  const errors = { console: [], page: [], remote: [] };
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  page.on("console", (message) => { if (message.type() === "error") errors.console.push(message.text()); });
  page.on("pageerror", (error) => errors.page.push(error.message));
  page.on("request", (request) => {
    const hostname = new URL(request.url()).hostname;
    if (!["127.0.0.1", "localhost"].includes(hostname)) errors.remote.push(request.url());
  });

  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForFunction(() => document.documentElement.dataset.ready === "true");
  const total = Number(await page.locator("#metric-total").innerText());
  const suggested = Number(await page.locator("#metric-suggested").innerText());
  const needsReview = Number(await page.locator("#metric-review").innerText());
  const closedSource = Number(await page.locator("#metric-closed").innerText());
  const visibleText = await page.locator("body").innerText();
  check(
    "renders the issue queue without build metadata",
    total > 0
      && total === suggested + needsReview + closedSource
      && await page.locator("#issue-list .issue-row").count() === total
      && !/SHA-256|deterministic rule|model accuracy|Snapshot\s+\d/i.test(visibleText)
      && await page.locator("#metric-benchmark, #snapshot-note, .brand-mark, .method").count() === 0
  );
  check("shows exact GitHub source", /^https:\/\/github\.com\/.+\/issues\/\d+$/.test(await page.locator("#source-link").getAttribute("href")));
  check("shows distinct issue type and review area", Boolean((await page.locator("#issue-type").innerText()).trim()) && Boolean((await page.locator("#review-area").innerText()).trim()));
  check("shows evidence", await page.locator("#evidence-list li").count() >= 1);
  check("shows three review checklist steps", await page.locator("#checklist li").count() === 3);
  check("exposes CSV handoff", await page.locator("a[href='./deliverables/review-handoff.csv']").count() === 1 && (await page.request.get(`${base}deliverables/review-handoff.csv`)).ok());
  check("exposes JSON handoff", await page.locator("a[href='./deliverables/review-handoff.json']").count() === 1 && (await page.request.get(`${base}deliverables/review-handoff.json`)).ok());
  await page.locator("#repository-filter").selectOption("n8n");
  const repositoryCount = await page.locator("#issue-list .issue-row").count();
  await page.locator("#search-filter").fill("no-issue-can-match-this-search");
  const searchEmpty = await page.locator("#issue-list .issue-row").count() === 0
    && await page.locator("#empty-state").isVisible()
    && !(await page.locator(".source-row").isVisible());
  await page.locator("#search-filter").fill("");
  check("repository and search filters work", repositoryCount === 30 && searchEmpty && await page.locator("#issue-list .issue-row").count() === 30);
  await page.locator("#review-filter").selectOption("needs-review");
  check("review-state filter works", await page.locator("#issue-list .issue-row").count() > 0);
  check("desktop has no horizontal overflow", await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1));
  if (writeScreenshots) await page.screenshot({ path: join(evidenceDir, "dashboard-desktop.png"), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForFunction(() => document.documentElement.dataset.ready === "true");
  check("mobile has no horizontal overflow", await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1));
  check("mobile keeps source link visible", await page.locator("#source-link").isVisible());
  if (writeScreenshots) await page.screenshot({ path: join(evidenceDir, "dashboard-mobile.png"), fullPage: true });

  const generated = await readFile(join(appRoot, "site/generated-data.js"), "utf8");
  const payload = JSON.parse(generated.replace(/^window\.GITHUB_TRIAGE_DATA = /, "").replace(/;\s*$/, ""));
  const hostileTitle = "<img src=x onerror=window.hostileExecuted=true>";
  payload.results[0].title = hostileTitle;
  const hostile = `window.GITHUB_TRIAGE_DATA = ${JSON.stringify(payload)};\n`;
  const hostilePage = await context.newPage();
  await hostilePage.route("**/generated-data.js", (route) => route.fulfill({ status: 200, contentType: "text/javascript", body: hostile }));
  await hostilePage.goto(base, { waitUntil: "networkidle" });
  await hostilePage.waitForFunction(() => document.documentElement.dataset.ready === "true");
  check("hostile title renders as text", (await hostilePage.locator("#issue-list .row-title").first().innerText()).includes("<img src=x"));
  check("hostile title creates no element", await hostilePage.locator("#issue-list img").count() === 0);
  check("hostile title executes no handler", await hostilePage.evaluate(() => window.hostileExecuted !== true));
  await hostilePage.close();

  check("zero console errors", errors.console.length === 0, errors.console.join(" | "));
  check("zero page errors", errors.page.length === 0, errors.page.join(" | "));
  check("zero runtime remote requests", errors.remote.length === 0, errors.remote.join(" | "));
  await mkdir(evidenceDir, { recursive: true });
  const report = {
    checkedAt: new Date().toISOString(),
    appRoot,
    viewports: [{ width: 1440, height: 1000 }, { width: 390, height: 844 }],
    checks,
    errors
  };
  await writeFile(join(evidenceDir, "browser-qa.json"), `${JSON.stringify(report, null, 2)}\n`);
  console.log(`BROWSER_OK checks=${checks.length} console_errors=0 page_errors=0 remote_requests=0`);
} finally {
  if (browser) await browser.close();
  server.kill("SIGTERM");
}
