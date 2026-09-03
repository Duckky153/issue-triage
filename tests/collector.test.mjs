import test from "node:test";
import assert from "node:assert/strict";
import { collectRepository, normalizeGitHubIssue } from "../src/collector.js";
import { githubRecord, response, source } from "./helpers.mjs";

test("collector paginates until enough unique issues remain", async () => {
  const pages = [
    [githubRecord(10), githubRecord(11, { pull_request: { url: "pr" } })],
    [githubRecord(12), githubRecord(13)]
  ];
  let calls = 0;
  const result = await collectRepository(source, { target: 3, perPage: 2, fetchImpl: async () => response(pages[calls++]) });
  assert.equal(calls, 2);
  assert.deepEqual(result.selected.map((item) => item.number), [10, 12, 13]);
  assert.equal(result.source.pullRequestsExcluded, 1);
});

test("collector filters pull requests", async () => {
  const records = [githubRecord(1, { pull_request: {} }), githubRecord(2)];
  const result = await collectRepository(source, { target: 1, perPage: 2, fetchImpl: async () => response(records) });
  assert.equal(result.selected[0].number, 2);
  assert.equal(result.source.pullRequestsExcluded, 1);
});

test("collector removes duplicate issues across pages", async () => {
  const pages = [[githubRecord(1), githubRecord(1)], [githubRecord(2), githubRecord(3)]];
  let calls = 0;
  const result = await collectRepository(source, { target: 3, perPage: 2, fetchImpl: async () => response(pages[calls++]) });
  assert.deepEqual(result.selected.map((item) => item.number), [1, 2, 3]);
  assert.equal(result.source.duplicatesExcluded, 1);
});

test("collector rejects malformed API payloads", async () => {
  await assert.rejects(
    collectRepository(source, { target: 1, fetchImpl: async () => response({ message: "not an array" }) }),
    /malformed payload/i
  );
});

test("collector reports malformed JSON", async () => {
  await assert.rejects(
    collectRepository(source, { target: 1, fetchImpl: async () => response([], { jsonError: true }) }),
    /malformed JSON/i
  );
});

test("collector reports HTTP and rate-limit failures", async () => {
  await assert.rejects(
    collectRepository(source, { target: 1, fetchImpl: async () => response([], { ok: false, status: 403, remaining: "0" }) }),
    /403.*rate limit exhausted/i
  );
});

test("collector rejects fewer records than required", async () => {
  await assert.rejects(
    collectRepository(source, { target: 2, perPage: 100, fetchImpl: async () => response([githubRecord(1)]) }),
    /only 1 unique issues remained; 2 required/i
  );
});

test("normalized records omit sensitive and unused GitHub fields", () => {
  const normalized = normalizeGitHubIssue(githubRecord(7), source);
  assert.equal(normalized.sourceUrl, "https://github.com/example/project/issues/7");
  assert.ok(!("user" in normalized));
  assert.ok(!("body" in normalized));
  assert.ok(!("assignee" in normalized));
});
