const TYPE_RULES = [
  { value: "bug", patterns: [/^type\/bug$/i, /^kind\/bug$/i, /^type\/regression$/i] },
  { value: "feature-request", patterns: [/^type\/feature-request$/i, /^kind\/feature$/i, /^kind\/api-change$/i] },
  { value: "documentation", patterns: [/^type\/docs?$/i, /^kind\/documentation$/i] },
  { value: "cleanup", patterns: [/^type\/cleanup$/i, /^kind\/cleanup$/i] },
  { value: "failing-test", patterns: [/^kind\/failing-test$/i] },
  { value: "question", patterns: [/^type\/question$/i, /^closed:support-issue$/i] }
];

const AREA_RULES = [
  { value: "security-access", patterns: [/^area\/(auth|security)/i, /^sig\/auth$/i, /^team:iam$/i] },
  { value: "reliability", patterns: [/^area\/(alerting|streaming|live)/i, /^type\/performance$/i, /^sig\/scalability$/i] },
  { value: "observability", patterns: [/^area\/(dashboard|dashboards|panel|explore|metrics)/i, /^area\/panel\//i, /^area\/metrics/i] },
  { value: "integrations", patterns: [/^datasource\//i, /^team:(nodes|ai|ins)$/i, /^area\/backend\/api$/i] },
  { value: "infrastructure", patterns: [/^sig\/(api-machinery|architecture|apps|autoscaling|cli|network|node|scheduling|storage)$/i, /^area\/(api|ha|kube|code-generation)/i] },
  { value: "documentation", patterns: [/^type\/docs?$/i, /^kind\/documentation$/i] }
];

const NEEDS_INFORMATION = /^(needs feedback|needs[- /:]?(information|triage|sig)|triage\/needs-information|closed:incomplete-template|incomplete[- /:]?template)$/i;

const TITLE_TYPE_RULES = [
  { value: "documentation", pattern: /^(docs?|documentation|readme)\s*:/i },
  { value: "failing-test", pattern: /^\[?failing test\]?/i },
  { value: "feature-request", pattern: /^(feature|proposal|enhancement)\s*:|\b(add support for|support for .+ requested)\b/i },
  { value: "cleanup", pattern: /^(refactor|cleanup|deprecat|migrat)|\bremove leftover\b/i },
  { value: "bug", pattern: /\b(regression|crashes?|hangs? forever|silently fails?|does not work|doesn't work|cannot|can't|broken|incorrect|wrong|error output never|stops consuming|not firing)\b/i }
];

const TITLE_AREA_RULES = [
  { value: "security-access", pattern: /\b(authentication|authorization|credential|oauth|login|permission|certificate|tls|pkcs|iam)\b/i },
  { value: "reliability", pattern: /\b(outage|crash|hang|memory leak|timeout|latency|scheduler|recovery|network interruption|stops consuming)\b/i },
  { value: "observability", pattern: /\b(dashboard|alerting|metrics|graphing|panel|prometheus)\b/i },
  { value: "integrations", pattern: /\b(webhook|salesforce|telegram|discord|snowflake|cloudwatch|opensearch|alertmanager|mcp client)\b/i },
  { value: "infrastructure", pattern: /\b(kubelet|pod|cluster|scheduler|storage|cgroup|container|volume|kubectl)\b/i }
];

const CHECKLISTS = {
  "security-access": [
    "Confirm that no credentials or private identifiers enter the review record.",
    "Record the affected authentication or permission boundary.",
    "Ask an authorized security or identity owner to assess the linked source."
  ],
  reliability: [
    "Record the affected version, environment, recurrence, and visible impact.",
    "Check the source for reproduction details and related reports.",
    "Ask the responsible reliability owner to set priority."
  ],
  observability: [
    "Identify the dashboard, alert, metric, or visualization surface involved.",
    "Confirm expected behavior and the smallest reproducible example.",
    "Ask the relevant observability owner to review the linked evidence."
  ],
  integrations: [
    "Identify the external system and the failing boundary.",
    "Record the trigger, input, expected output, and observed output.",
    "Ask the integration owner to reproduce the issue before assignment."
  ],
  infrastructure: [
    "Record the component, version, environment, and visible impact.",
    "Confirm whether the source includes reproduction or validation evidence.",
    "Ask the responsible infrastructure owner to review the issue."
  ],
  documentation: [
    "Identify the missing, incorrect, or outdated instruction.",
    "Check the linked version and a reproducible example.",
    "Ask the documentation owner to confirm the required change."
  ],
  general: [
    "Confirm the issue type and affected product area.",
    "Collect the missing reproduction, version, and impact details.",
    "Assign a review lane only after the evidence is clear."
  ]
};

const LANE_BY_AREA = {
  "security-access": "Security and access review",
  reliability: "Reliability review",
  observability: "Observability review",
  integrations: "Integration review",
  infrastructure: "Infrastructure review",
  documentation: "Documentation review",
  general: "General issue review"
};

const titleCase = (value) => String(value).replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
const normalizeLabels = (issue) => (Array.isArray(issue.labels) ? issue.labels : []).map((label) => String(label).trim()).filter(Boolean);

function nativeMatches(labels, rules) {
  return rules.flatMap((rule) => labels.some((label) => rule.patterns.some((pattern) => pattern.test(label))) ? [rule.value] : []);
}

function titleMatches(title, rules) {
  return rules.flatMap((rule) => rule.pattern.test(title) ? [rule.value] : []);
}

function unique(values) {
  return [...new Set(values)];
}

function resolveSignal(issue, labels, labelRules, fallbackRules, kind) {
  const native = unique(nativeMatches(labels, labelRules));
  if (native.length === 1) {
    const matchingLabels = labels.filter((label) => labelRules.some((rule) => rule.value === native[0] && rule.patterns.some((pattern) => pattern.test(label))));
    return { value: native[0], source: "repository label", evidence: matchingLabels, conflict: false };
  }
  if (native.length > 1) {
    return { value: "needs-review", source: "conflicting repository labels", evidence: labels.filter((label) => labelRules.some((rule) => rule.patterns.some((pattern) => pattern.test(label)))), conflict: true };
  }
  const fallback = unique(titleMatches(issue.title, fallbackRules));
  if (fallback.length === 1) {
    return { value: fallback[0], source: "specific title phrase", evidence: [issue.title], conflict: false };
  }
  return {
    value: kind === "area" ? "general" : "needs-review",
    source: fallback.length > 1 ? "conflicting title phrases" : "insufficient evidence",
    evidence: fallback.length > 1 ? [issue.title] : [],
    conflict: fallback.length > 1
  };
}

export function ageInDays(start, end) {
  const startValue = Date.parse(start);
  const endValue = Date.parse(end);
  if (Number.isNaN(startValue) || Number.isNaN(endValue)) return 0;
  return Math.max(0, Math.floor((endValue - startValue) / 86_400_000));
}

export function reviewIssue(issue, retrievedAt) {
  const labels = normalizeLabels(issue);
  const type = resolveSignal(issue, labels, TYPE_RULES, TITLE_TYPE_RULES, "type");
  let area = resolveSignal(issue, labels, AREA_RULES, TITLE_AREA_RULES, "area");
  if (area.value === "general" && type.value === "documentation") {
    area = { value: "documentation", source: "issue type", evidence: type.evidence, conflict: false };
  }
  const needsInformation = labels.some((label) => NEEDS_INFORMATION.test(label));
  const sourceClosed = issue.state === "closed";
  const weakEvidence = type.value === "needs-review" || area.value === "needs-review" || area.value === "general";
  const reviewState = sourceClosed ? "closed-source" : (needsInformation || type.conflict || area.conflict || weakEvidence ? "needs-review" : "suggested");
  const suggestedReviewLane = sourceClosed ? "Closed source record review" : (reviewState === "needs-review" ? "Needs Review" : LANE_BY_AREA[area.value]);
  const evidence = [
    ...type.evidence.map((value) => ({ field: "issueType", source: type.source, value })),
    ...area.evidence.map((value) => ({ field: "reviewArea", source: area.source, value }))
  ];
  if (needsInformation) evidence.push({ field: "reviewState", source: "repository label", value: labels.find((label) => NEEDS_INFORMATION.test(label)) });
  if (sourceClosed) evidence.push({ field: "reviewState", source: "source state", value: issue.stateReason ?? issue.state });

  const rationale = sourceClosed
    ? "The source issue is closed, so the dashboard preserves that state and does not infer why it closed."
    : reviewState === "needs-review"
      ? "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane."
      : `Repository labels or a specific title phrase support a ${titleCase(type.value)} issue in the ${titleCase(area.value)} review area.`;

  return {
    id: issue.id,
    repository: issue.repository,
    project: issue.project,
    issueNumber: issue.number,
    title: issue.title,
    sourceUrl: issue.sourceUrl,
    sourceState: issue.state,
    sourceStateReason: issue.stateReason ?? null,
    issueType: type.value,
    reviewArea: area.value,
    reviewState,
    suggestedReviewLane,
    rationale,
    evidence,
    nextStepChecklist: reviewState === "suggested" ? CHECKLISTS[area.value] : CHECKLISTS.general,
    ageDays: ageInDays(issue.createdAt, retrievedAt),
    daysSinceUpdate: ageInDays(issue.updatedAt, retrievedAt),
    comments: issue.comments,
    createdAt: issue.createdAt,
    updatedAt: issue.updatedAt,
    labels,
    provenance: "public-github-issue-metadata",
    independentReview: true
  };
}

function countBy(items, selector) {
  const counts = {};
  for (const item of items) {
    const key = selector(item);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return Object.fromEntries(Object.entries(counts).sort(([left], [right]) => left.localeCompare(right)));
}

export function runTriageDashboard(dataset) {
  const results = dataset.issues.map((issue) => reviewIssue(issue, dataset.retrievedAt));
  return {
    generatedAt: dataset.retrievedAt,
    dataset: "public-github-issue-metadata",
    snapshotSha256: dataset.snapshotSha256,
    totalRecords: results.length,
    repositories: [...new Set(dataset.issues.map((issue) => issue.repository))],
    openRecords: results.filter((item) => item.sourceState === "open").length,
    closedRecords: results.filter((item) => item.sourceState === "closed").length,
    needsReview: results.filter((item) => item.reviewState === "needs-review").length,
    suggested: results.filter((item) => item.reviewState === "suggested").length,
    sourceLinks: results.filter((item) => item.sourceUrl).length,
    results,
    counts: {
      repository: countBy(results, (item) => item.project),
      issueType: countBy(results, (item) => item.issueType),
      reviewArea: countBy(results, (item) => item.reviewArea),
      reviewState: countBy(results, (item) => item.reviewState)
    }
  };
}

export const routingVocabulary = {
  issueTypes: ["bug", "feature-request", "documentation", "cleanup", "failing-test", "question", "needs-review"],
  reviewAreas: ["security-access", "reliability", "observability", "integrations", "infrastructure", "documentation", "general", "needs-review"],
  reviewStates: ["suggested", "needs-review", "closed-source"]
};
