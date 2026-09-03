import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { evaluateBenchmark } from "../src/benchmark.js";

const benchmark = JSON.parse(await readFile(new URL("../data/benchmark.json", import.meta.url), "utf8"));

test("benchmark contains 30 real source-linked records balanced across repositories", () => {
  assert.equal(benchmark.records.length, 30);
  const counts = {};
  for (const record of benchmark.records) {
    counts[record.issue.repository] = (counts[record.issue.repository] ?? 0) + 1;
    assert.equal(record.issue.sourceUrl, `https://github.com/${record.issue.repository}/issues/${record.issue.number}`);
    assert.ok(record.rationale.length > 20);
  }
  assert.deepEqual(Object.values(counts).sort((left, right) => left - right), [10, 10, 10]);
});

test("benchmark gate allows no incompatible auto-routes on unambiguous native labels", () => {
  const report = evaluateBenchmark(benchmark);
  assert.equal(report.incompatibleAutoRouteCount, 0);
  assert.equal(report.gatePassed, true);
  assert.match(report.terms, /rule agreement.*not model accuracy/i);
});

test("benchmark gate fails an incompatible automatic suggestion", () => {
  const changed = structuredClone(benchmark);
  const target = changed.records.find((record) => record.unambiguousNativeLabels && record.expected.reviewState === "suggested");
  target.expected.reviewArea = "documentation";
  const report = evaluateBenchmark(changed);
  assert.equal(report.incompatibleAutoRouteCount, 1);
  assert.equal(report.gatePassed, false);
});
