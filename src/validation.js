import { allowedIssueFields, computeSnapshotHash } from "./collector.js";
import { REPOSITORIES, TARGET_PER_REPOSITORY } from "./config.js";

export function validateDataset(dataset, manifest) {
  const errors = [];
  const issues = Array.isArray(dataset?.issues) ? dataset.issues : [];
  const expectedRepositories = REPOSITORIES.map((source) => source.repository).sort();
  const repositoryCounts = Object.fromEntries(expectedRepositories.map((repository) => [repository, issues.filter((issue) => issue.repository === repository).length]));
  const computedHash = computeSnapshotHash(issues);
  const ids = issues.map((issue) => issue.id);
  const urls = issues.map((issue) => issue.sourceUrl);
  const required = ["id", "repository", "project", "context", "number", "title", "state", "labels", "comments", "createdAt", "updatedAt", "sourceUrl"];
  const sensitive = ["user", "avatar", "assignee", "body", "commentsData", "email", "login"];

  if (dataset?.schemaVersion !== 2) errors.push("dataset schemaVersion must be 2");
  if (manifest?.schemaVersion !== 2) errors.push("manifest schemaVersion must be 2");
  if (issues.length !== REPOSITORIES.length * TARGET_PER_REPOSITORY) errors.push(`expected ${REPOSITORIES.length * TARGET_PER_REPOSITORY} records`);
  if (Object.values(repositoryCounts).some((count) => count !== TARGET_PER_REPOSITORY)) errors.push("repository counts are not balanced at 30 each");
  if (new Set(ids).size !== ids.length || new Set(urls).size !== urls.length) errors.push("duplicate record ids or URLs found");
  if (computedHash !== dataset?.snapshotSha256 || computedHash !== manifest?.snapshotSha256) errors.push("snapshot hash mismatch");
  if (dataset?.recordCount !== issues.length || manifest?.recordCount !== issues.length) errors.push("record count mismatch");
  if (issues.some((issue) => required.some((field) => issue[field] === undefined || issue[field] === null || issue[field] === ""))) errors.push("required issue field missing");
  if (issues.some((issue) => issue.sourceUrl !== `https://github.com/${issue.repository}/issues/${issue.number}`)) errors.push("unexpected source URL");
  if (issues.some((issue) => !["open", "closed"].includes(issue.state))) errors.push("unexpected issue state");
  if (issues.some((issue) => Number.isNaN(Date.parse(issue.createdAt)) || Number.isNaN(Date.parse(issue.updatedAt)))) errors.push("invalid timestamp");
  if (issues.some((issue) => sensitive.some((field) => field in issue))) errors.push("sensitive field retained");
  if (issues.some((issue) => Object.keys(issue).some((field) => !allowedIssueFields.includes(field)))) errors.push("unapproved field retained");
  if (!Array.isArray(manifest?.repositories) || manifest.repositories.length !== REPOSITORIES.length) errors.push("source manifest is incomplete");

  return {
    checkedAt: new Date().toISOString(),
    valid: errors.length === 0,
    errors,
    recordCount: issues.length,
    repositoryCounts,
    computedHash,
    snapshotHashMatches: computedHash === dataset?.snapshotSha256 && computedHash === manifest?.snapshotSha256,
    uniqueIds: new Set(ids).size === ids.length,
    uniqueUrls: new Set(urls).size === urls.length,
    omittedSensitiveFields: !issues.some((issue) => sensitive.some((field) => field in issue))
  };
}
