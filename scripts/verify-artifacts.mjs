import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const root = resolve(process.env.APP_ROOT || projectRoot);
const readJson = async (path) => JSON.parse(await readFile(join(root, path), "utf8"));
const summary = await readJson("deliverables/triage-summary.json");
const handoff = await readJson("deliverables/review-handoff.json");
const benchmark = await readJson("deliverables/benchmark-report.json");
const quality = await readJson("deliverables/data-quality-report.json");
const manifest = await readJson("evidence/source-manifest.json");
const html = await readFile(join(root, "site/index.html"), "utf8");
const app = await readFile(join(root, "site/dashboard.js"), "utf8");
const publicDataSource = await readFile(join(root, "site/generated-data.js"), "utf8");
const publicData = JSON.parse(publicDataSource.replace(/^window\.GITHUB_TRIAGE_DATA = /, "").replace(/;\s*$/, ""));
const csv = await readFile(join(root, "deliverables/review-handoff.csv"), "utf8");
const serialized = JSON.stringify(summary);

const checks = [
  [summary.totalRecords === 90, "90 real issue records"],
  [summary.repositories.length === 3 && Object.values(summary.counts.repository).every((count) => count === 30), "30 issues per repository"],
  [summary.sourceLinks === summary.totalRecords && summary.results.every((record) => record.sourceUrl === `https://github.com/${record.repository}/issues/${record.issueNumber}`), "exact source URLs"],
  [summary.results.every((record) => record.issueType && record.reviewArea && record.reviewState && record.suggestedReviewLane), "separate review fields"],
  [summary.results.every((record) => record.nextStepChecklist.length === 3 && Array.isArray(record.evidence)), "handoff evidence and checklist"],
  [!/(recommendedRoute|recommendation|playbook|category)/i.test(serialized), "retired overloaded fields absent"],
  [handoff.records.length === summary.totalRecords && handoff.records.every((record) => record.sourceUrl && record.suggestedReviewLane && record.nextStepChecklist.length === 3), "JSON review handoff"],
  [csv.trim().split("\n").length === summary.totalRecords + 1 && csv.startsWith('"repository","issue_number"'), "CSV review handoff"],
  [quality.valid && quality.snapshotHashMatches && quality.uniqueIds && quality.uniqueUrls && quality.omittedSensitiveFields, "data-quality gate"],
  [benchmark.records >= 30 && Object.values(benchmark.repositoryCounts).every((count) => count >= 10), "balanced fixed benchmark"],
  [benchmark.gatePassed && benchmark.incompatibleAutoRouteCount === 0 && /not model accuracy/i.test(benchmark.terms), "benchmark terminology and safety gate"],
  [manifest.repositories.length === 3 && manifest.recordCount === 90, "source manifest"],
  [html.includes("GitHub Issue Triage Dashboard") && !/AI Enablement|Service Desk|Operations Desk|operating recommendation|playbook|metric-benchmark|snapshot-note|brand-mark|class="method"/i.test(html) && Object.keys(publicData).sort().join(",") === "results,summary" && Object.keys(publicData.summary).sort().join(",") === "closedSource,needsReview,suggested,totalRecords" && publicData.summary.totalRecords === publicData.summary.closedSource + publicData.summary.needsReview + publicData.summary.suggested, "current product name and operator-only framing"],
  [!app.includes("innerHTML") && app.includes("textContent") && app.includes("createElement"), "safe DOM rendering"],
  [summary.results.every((record) => record.independentReview && record.provenance === "public-github-issue-metadata"), "public-data boundary"]
];
for (const [passed, name] of checks) assert.ok(passed, `artifact verification failed: ${name}`);
console.log(`ARTIFACTS_OK checks=${checks.length} records=${summary.totalRecords} benchmark_conflicts=${benchmark.incompatibleAutoRouteCount}`);
