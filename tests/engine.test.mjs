import test from "node:test";
import assert from "node:assert/strict";
import { reviewIssue, runTriageDashboard } from "../src/engine.js";
import { issue } from "./helpers.mjs";

const retrievedAt = "2026-09-02T00:00:00Z";

test("repository type labels take priority over a misleading title", () => {
  const result = reviewIssue(issue({ title: "Feature: add a better screen", labels: ["type/bug", "area/dashboard"] }), retrievedAt);
  assert.equal(result.issueType, "bug");
  assert.equal(result.reviewArea, "observability");
  assert.equal(result.reviewState, "suggested");
});

test("conflicting native type labels are sent to Needs Review", () => {
  const result = reviewIssue(issue({ labels: ["kind/bug", "kind/feature", "sig/node"] }), retrievedAt);
  assert.equal(result.issueType, "needs-review");
  assert.equal(result.reviewState, "needs-review");
  assert.equal(result.suggestedReviewLane, "Needs Review");
});

test("needs-information labels require human review", () => {
  const result = reviewIssue(issue({ labels: ["kind/bug", "sig/node", "triage/needs-information"] }), retrievedAt);
  assert.equal(result.issueType, "bug");
  assert.equal(result.reviewArea, "infrastructure");
  assert.equal(result.reviewState, "needs-review");
});

test("closed state is preserved without inferring a resolution", () => {
  const result = reviewIssue(issue({ state: "closed", stateReason: "not_planned", labels: ["type/bug", "area/dashboard"] }), retrievedAt);
  assert.equal(result.reviewState, "closed-source");
  assert.equal(result.suggestedReviewLane, "Closed source record review");
  assert.match(result.rationale, /does not infer why/i);
});

test("generic node and API words do not trigger a type or lane", () => {
  const result = reviewIssue(issue({ title: "Update API node display", labels: [] }), retrievedAt);
  assert.equal(result.issueType, "needs-review");
  assert.equal(result.reviewArea, "general");
  assert.equal(result.reviewState, "needs-review");
});

test("specific title fallback can suggest a lane when labels supply the area", () => {
  const result = reviewIssue(issue({ title: "Webhook trigger stops consuming after network interruption", labels: ["team:nodes"] }), retrievedAt);
  assert.equal(result.issueType, "bug");
  assert.equal(result.reviewArea, "integrations");
  assert.equal(result.reviewState, "suggested");
});

test("issue type and review area remain separate fields", () => {
  const result = reviewIssue(issue({ labels: ["type/feature-request", "area/security"] }), retrievedAt);
  assert.equal(result.issueType, "feature-request");
  assert.equal(result.reviewArea, "security-access");
  assert.ok(!("category" in result));
  assert.ok(!("recommendedRoute" in result));
});

test("review result omits people, body, and credentials even if input contains them", () => {
  const result = reviewIssue(issue({ user: { login: "private" }, body: "secret", credential: "secret" }), retrievedAt);
  assert.ok(!("user" in result));
  assert.ok(!("body" in result));
  assert.ok(!("credential" in result));
});

test("summary totals are computed from the supplied records", () => {
  const dataset = {
    retrievedAt,
    snapshotSha256: "a".repeat(64),
    issues: [
      issue({ number: 1, labels: ["type/bug", "area/dashboard"] }),
      issue({ number: 2, labels: [] }),
      issue({ number: 3, state: "closed", labels: ["kind/feature", "sig/node"] })
    ]
  };
  const report = runTriageDashboard(dataset);
  assert.equal(report.totalRecords, 3);
  assert.equal(report.openRecords, 2);
  assert.equal(report.closedRecords, 1);
  assert.equal(Object.values(report.counts.reviewState).reduce((sum, count) => sum + count, 0), 3);
});
