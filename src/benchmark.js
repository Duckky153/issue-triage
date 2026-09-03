import { reviewIssue } from "./engine.js";

function countRepositories(records) {
  const counts = {};
  for (const record of records) counts[record.issue.repository] = (counts[record.issue.repository] ?? 0) + 1;
  return counts;
}

export function evaluateBenchmark(benchmark) {
  const results = benchmark.records.map((record) => {
    const actual = reviewIssue(record.issue, benchmark.reviewedAt);
    const exactAgreement = actual.issueType === record.expected.issueType
      && actual.reviewArea === record.expected.reviewArea
      && actual.reviewState === record.expected.reviewState;
    const incompatibleAutoRoute = record.unambiguousNativeLabels === true
      && actual.reviewState === "suggested"
      && (actual.issueType !== record.expected.issueType || actual.reviewArea !== record.expected.reviewArea);
    return {
      id: record.issue.id,
      sourceUrl: record.issue.sourceUrl,
      expected: record.expected,
      actual: {
        issueType: actual.issueType,
        reviewArea: actual.reviewArea,
        reviewState: actual.reviewState,
        suggestedReviewLane: actual.suggestedReviewLane
      },
      unambiguousNativeLabels: record.unambiguousNativeLabels,
      rationale: record.rationale,
      exactAgreement,
      incompatibleAutoRoute
    };
  });
  const repositoryCounts = countRepositories(benchmark.records);
  const exactAgreements = results.filter((result) => result.exactAgreement).length;
  const suggestedCoverage = results.filter((result) => result.actual.reviewState === "suggested").length;
  const incompatibleAutoRoutes = results.filter((result) => result.incompatibleAutoRoute);
  return {
    benchmarkVersion: benchmark.schemaVersion,
    reviewedAt: benchmark.reviewedAt,
    records: results.length,
    repositoryCounts,
    exactRuleAgreement: {
      count: exactAgreements,
      percent: Number(((exactAgreements / results.length) * 100).toFixed(1))
    },
    suggestedCoverage: {
      count: suggestedCoverage,
      percent: Number(((suggestedCoverage / results.length) * 100).toFixed(1))
    },
    incompatibleAutoRouteCount: incompatibleAutoRoutes.length,
    gatePassed: results.length >= 30
      && Object.values(repositoryCounts).every((count) => count >= 10)
      && incompatibleAutoRoutes.length === 0,
    terms: "These are deterministic rule agreement and coverage measurements, not model accuracy.",
    results
  };
}
