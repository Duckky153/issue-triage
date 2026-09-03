import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { evaluateBenchmark } from "./benchmark.js";
import { runTriageDashboard } from "./engine.js";
import { validateDataset } from "./validation.js";

function csvCell(value) {
  const text = Array.isArray(value) ? value.join(" | ") : String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function handoffCsv(records) {
  const headings = ["repository", "issue_number", "title", "source_url", "source_state", "issue_type", "review_area", "review_state", "suggested_review_lane", "evidence", "next_step_checklist"];
  const rows = records.map((record) => [
    record.repository,
    record.issueNumber,
    record.title,
    record.sourceUrl,
    record.sourceState,
    record.issueType,
    record.reviewArea,
    record.reviewState,
    record.suggestedReviewLane,
    record.evidence.map((item) => `${item.field}: ${item.value}`),
    record.nextStepChecklist
  ]);
  return `${[headings, ...rows].map((row) => row.map(csvCell).join(",")).join("\n")}\n`;
}

export function buildRelease(dataset, manifest, benchmark) {
  const dataQuality = validateDataset(dataset, manifest);
  if (!dataQuality.valid) throw new Error(`candidate data failed validation: ${dataQuality.errors.join("; ")}`);
  const benchmarkReport = evaluateBenchmark(benchmark);
  if (!benchmarkReport.gatePassed) throw new Error(`benchmark gate failed: ${benchmarkReport.incompatibleAutoRouteCount} incompatible auto-routes`);
  const dashboard = runTriageDashboard(dataset);
  const handoff = dashboard.results.map((record) => ({
    repository: record.repository,
    issueNumber: record.issueNumber,
    title: record.title,
    sourceUrl: record.sourceUrl,
    sourceState: record.sourceState,
    issueType: record.issueType,
    reviewArea: record.reviewArea,
    reviewState: record.reviewState,
    suggestedReviewLane: record.suggestedReviewLane,
    evidence: record.evidence,
    nextStepChecklist: record.nextStepChecklist
  }));
  const publicResults = dashboard.results.map((record) => ({
    id: record.id,
    repository: record.repository,
    project: record.project,
    issueNumber: record.issueNumber,
    title: record.title,
    sourceUrl: record.sourceUrl,
    sourceState: record.sourceState,
    sourceStateReason: record.sourceStateReason,
    issueType: record.issueType,
    reviewArea: record.reviewArea,
    reviewState: record.reviewState,
    suggestedReviewLane: record.suggestedReviewLane,
    rationale: record.rationale,
    evidence: record.evidence,
    nextStepChecklist: record.nextStepChecklist,
    labels: record.labels
  }));
  const sitePayload = {
    summary: {
      totalRecords: dashboard.totalRecords,
      needsReview: dashboard.needsReview,
      suggested: dashboard.suggested,
      closedSource: dashboard.closedRecords
    },
    results: publicResults
  };
  const verification = {
    checkedAt: new Date().toISOString(),
    snapshotRetrievedAt: dataset.retrievedAt,
    status: "candidate-built",
    dataset: dataQuality,
    benchmark: {
      records: benchmarkReport.records,
      repositoryCounts: benchmarkReport.repositoryCounts,
      exactRuleAgreement: benchmarkReport.exactRuleAgreement,
      suggestedCoverage: benchmarkReport.suggestedCoverage,
      incompatibleAutoRouteCount: benchmarkReport.incompatibleAutoRouteCount,
      gatePassed: benchmarkReport.gatePassed
    },
    release: {
      records: dashboard.totalRecords,
      exactSourceLinks: dashboard.sourceLinks,
      needsReview: dashboard.needsReview,
      suggested: dashboard.suggested
    },
    boundaries: [
      "No affiliation, employment, maintainer access, endorsement, or private support data.",
      "No production deployment, employee adoption, measured time savings, or organizational outcome.",
      "Suggested review lanes are evidence-backed prompts for human review, not assignments or priorities."
    ]
  };
  return {
    "data/public-issues.json": `${JSON.stringify(dataset, null, 2)}\n`,
    "evidence/source-manifest.json": `${JSON.stringify(manifest, null, 2)}\n`,
    "deliverables/triage-summary.json": `${JSON.stringify(dashboard, null, 2)}\n`,
    "deliverables/review-handoff.json": `${JSON.stringify({ generatedAt: dataset.retrievedAt, records: handoff }, null, 2)}\n`,
    "deliverables/review-handoff.csv": handoffCsv(handoff),
    "deliverables/source-register.json": `${JSON.stringify(manifest, null, 2)}\n`,
    "deliverables/data-quality-report.json": `${JSON.stringify(dataQuality, null, 2)}\n`,
    "deliverables/benchmark-report.json": `${JSON.stringify(benchmarkReport, null, 2)}\n`,
    "site/generated-data.js": `window.GITHUB_TRIAGE_DATA = ${JSON.stringify(sitePayload, null, 2)};\n`,
    "evidence/current-verification.json": `${JSON.stringify(verification, null, 2)}\n`
  };
}

export async function writeReleaseFiles(root, files) {
  for (const [relativePath, content] of Object.entries(files)) {
    const target = join(root, relativePath);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, content);
  }
}

export const releasePaths = [
  "data/public-issues.json",
  "evidence/source-manifest.json",
  "deliverables/triage-summary.json",
  "deliverables/review-handoff.json",
  "deliverables/review-handoff.csv",
  "deliverables/source-register.json",
  "deliverables/data-quality-report.json",
  "deliverables/benchmark-report.json",
  "site/generated-data.js",
  "evidence/current-verification.json",
  "evidence/browser-qa.json",
  "evidence/dashboard-desktop.png",
  "evidence/dashboard-mobile.png"
];
