import { createHash } from "node:crypto";
import { GITHUB_API_VERSION, REPOSITORIES, TARGET_PER_REPOSITORY } from "./config.js";

const ALLOWED_FIELDS = ["id", "repository", "project", "context", "number", "title", "state", "stateReason", "labels", "comments", "createdAt", "updatedAt", "closedAt", "sourceUrl"];

function normalizeLabels(labels) {
  if (!Array.isArray(labels)) return [];
  return labels
    .map((label) => typeof label === "string" ? label : label?.name)
    .filter((label) => typeof label === "string" && label.trim())
    .map((label) => label.trim())
    .sort((left, right) => left.localeCompare(right));
}

export function normalizeGitHubIssue(record, source) {
  if (!record || typeof record !== "object" || Array.isArray(record)) throw new Error(`${source.repository}: malformed issue record`);
  if (!Number.isInteger(record.number) || typeof record.title !== "string" || !["open", "closed"].includes(record.state)) {
    throw new Error(`${source.repository}: issue record is missing a valid number, title, or state`);
  }
  const expectedUrl = `https://github.com/${source.repository}/issues/${record.number}`;
  if (record.html_url !== expectedUrl) throw new Error(`${source.repository}#${record.number}: unexpected source URL`);
  const normalized = {
    id: `${source.repository}#${record.number}`,
    repository: source.repository,
    project: source.project,
    context: source.context,
    number: record.number,
    title: record.title.trim(),
    state: record.state,
    stateReason: record.state_reason ?? null,
    labels: normalizeLabels(record.labels),
    comments: Number.isInteger(record.comments) ? record.comments : 0,
    createdAt: record.created_at,
    updatedAt: record.updated_at,
    closedAt: record.closed_at ?? null,
    sourceUrl: expectedUrl
  };
  if (!normalized.title || Number.isNaN(Date.parse(normalized.createdAt)) || Number.isNaN(Date.parse(normalized.updatedAt))) {
    throw new Error(`${normalized.id}: malformed title or timestamp`);
  }
  return normalized;
}

export async function collectRepository(source, options = {}) {
  const fetchImpl = options.fetchImpl ?? fetch;
  const target = options.target ?? TARGET_PER_REPOSITORY;
  const perPage = options.perPage ?? 100;
  const maxPages = options.maxPages ?? 10;
  const endpoint = `https://api.github.com/repos/${source.repository}/issues?state=all&sort=updated&direction=desc&per_page=${perPage}`;
  const selected = [];
  const seen = new Set();
  let pagesFetched = 0;
  let recordsReturned = 0;
  let pullRequestsExcluded = 0;
  let duplicatesExcluded = 0;
  let rateLimit = { limit: null, remainingAfterRequest: null, resetAt: null };

  for (let page = 1; page <= maxPages && selected.length < target; page += 1) {
    let response;
    try {
      response = await fetchImpl(`${endpoint}&page=${page}`, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "github-issue-triage-dashboard",
          "X-GitHub-Api-Version": GITHUB_API_VERSION
        }
      });
    } catch (error) {
      throw new Error(`${source.repository}: network failure on page ${page}: ${error.message}`);
    }
    if (!response?.ok) {
      const remaining = response?.headers?.get?.("x-ratelimit-remaining");
      const suffix = remaining === "0" ? " (GitHub rate limit exhausted)" : "";
      throw new Error(`${source.repository}: GitHub returned ${response?.status ?? "unknown"} on page ${page}${suffix}`);
    }
    let pageRecords;
    try {
      pageRecords = await response.json();
    } catch (error) {
      throw new Error(`${source.repository}: malformed JSON on page ${page}: ${error.message}`);
    }
    if (!Array.isArray(pageRecords)) throw new Error(`${source.repository}: malformed payload on page ${page}; expected an array`);
    pagesFetched += 1;
    recordsReturned += pageRecords.length;
    rateLimit = {
      limit: Number(response.headers?.get?.("x-ratelimit-limit")) || null,
      remainingAfterRequest: Number(response.headers?.get?.("x-ratelimit-remaining")) || 0,
      resetAt: response.headers?.get?.("x-ratelimit-reset") ?? null
    };
    for (const record of pageRecords) {
      if (record?.pull_request) {
        pullRequestsExcluded += 1;
        continue;
      }
      const issue = normalizeGitHubIssue(record, source);
      if (seen.has(issue.id)) {
        duplicatesExcluded += 1;
        continue;
      }
      seen.add(issue.id);
      if (selected.length < target) selected.push(issue);
    }
    if (pageRecords.length < perPage) break;
  }

  if (selected.length < target) {
    throw new Error(`${source.repository}: only ${selected.length} unique issues remained; ${target} required`);
  }
  return {
    selected,
    source: {
      repository: source.repository,
      project: source.project,
      repositoryUrl: source.repositoryUrl,
      issuesUrl: `${source.repositoryUrl}/issues`,
      apiEndpoint: endpoint,
      apiVersion: GITHUB_API_VERSION,
      pagesFetched,
      recordsReturned,
      pullRequestsExcluded,
      duplicatesExcluded,
      issuesSelected: selected.length,
      rateLimit
    }
  };
}

export async function collectSnapshot(options = {}) {
  const retrievedAt = options.retrievedAt ?? new Date().toISOString();
  const repositories = options.repositories ?? REPOSITORIES;
  const collected = [];
  for (const source of repositories) collected.push(await collectRepository(source, options));
  const issues = collected.flatMap((item) => item.selected)
    .sort((left, right) => left.repository.localeCompare(right.repository) || right.updatedAt.localeCompare(left.updatedAt) || left.number - right.number);
  const snapshotSha256 = createHash("sha256").update(JSON.stringify(issues)).digest("hex");
  const dataset = {
    schemaVersion: 2,
    name: "Public GitHub issue triage snapshot",
    retrievedAt,
    recordCount: issues.length,
    snapshotSha256,
    privacyMinimization: "Usernames, avatars, assignees, issue bodies, and comment text are omitted.",
    issues
  };
  const manifest = {
    schemaVersion: 2,
    dataset: dataset.name,
    retrievedAt,
    sourceType: "Public GitHub issue metadata",
    collectionMethod: "GitHub REST API repository-issues endpoint with pagination",
    selectionMethod: `${options.target ?? TARGET_PER_REPOSITORY} most recently updated unique issue records per repository after pull requests are excluded`,
    recordCount: issues.length,
    snapshotSha256,
    fieldsRetained: [...ALLOWED_FIELDS],
    fieldsOmitted: ["user", "avatar", "assignee", "body", "comment text", "email", "credentials"],
    repositories: collected.map((item) => item.source),
    boundaries: [
      "The records are public GitHub issues, not private support tickets.",
      "The dashboard is independent and is not affiliated with the repositories or their maintainers.",
      "Suggested review lanes are deterministic portfolio outputs, not maintainer assignments or priorities."
    ]
  };
  return { dataset, manifest };
}

export function computeSnapshotHash(issues) {
  return createHash("sha256").update(JSON.stringify(issues)).digest("hex");
}

export const allowedIssueFields = [...ALLOWED_FIELDS];
