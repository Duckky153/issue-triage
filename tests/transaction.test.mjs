import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { promoteWithRollback } from "../src/transaction.js";

async function fixture() {
  const root = await mkdtemp(join(tmpdir(), "triage-transaction-test-"));
  const source = join(root, "candidate");
  const target = join(root, "release");
  await mkdir(join(source, "nested"), { recursive: true });
  await mkdir(join(target, "nested"), { recursive: true });
  await writeFile(join(source, "one.txt"), "new one");
  await writeFile(join(source, "nested/two.txt"), "new two");
  await writeFile(join(target, "one.txt"), "old one");
  await writeFile(join(target, "nested/two.txt"), "old two");
  return { root, source, target, paths: ["one.txt", "nested/two.txt"] };
}

test("promotion replaces the complete release after verification", async () => {
  const value = await fixture();
  try {
    await promoteWithRollback({ sourceRoot: value.source, targetRoot: value.target, relativePaths: value.paths, verifyAfterPromotion: async () => {} });
    assert.equal(await readFile(join(value.target, "one.txt"), "utf8"), "new one");
    assert.equal(await readFile(join(value.target, "nested/two.txt"), "utf8"), "new two");
  } finally { await rm(value.root, { recursive: true, force: true }); }
});

test("promotion failure restores every previous file", async () => {
  const value = await fixture();
  try {
    await assert.rejects(
      promoteWithRollback({ sourceRoot: value.source, targetRoot: value.target, relativePaths: value.paths, failAfter: 1 }),
      /injected promotion failure/
    );
    assert.equal(await readFile(join(value.target, "one.txt"), "utf8"), "old one");
    assert.equal(await readFile(join(value.target, "nested/two.txt"), "utf8"), "old two");
  } finally { await rm(value.root, { recursive: true, force: true }); }
});

test("post-promotion verification failure also restores the previous release", async () => {
  const value = await fixture();
  try {
    await assert.rejects(
      promoteWithRollback({ sourceRoot: value.source, targetRoot: value.target, relativePaths: value.paths, verifyAfterPromotion: async () => { throw new Error("verification failed"); } }),
      /verification failed/
    );
    assert.equal(await readFile(join(value.target, "one.txt"), "utf8"), "old one");
    assert.equal(await readFile(join(value.target, "nested/two.txt"), "utf8"), "old two");
  } finally { await rm(value.root, { recursive: true, force: true }); }
});
