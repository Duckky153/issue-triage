import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { buildRelease, writeReleaseFiles } from "../src/release.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const readJson = async (relativePath) => JSON.parse(await readFile(new URL(`../${relativePath}`, import.meta.url), "utf8"));
const dataset = await readJson("data/public-issues.json");
const manifest = await readJson("evidence/source-manifest.json");
const benchmark = await readJson("data/benchmark.json");
const files = buildRelease(dataset, manifest, benchmark);
await writeReleaseFiles(root, files);
console.log(`BUILD_OK records=${dataset.recordCount} snapshot=${dataset.snapshotSha256}`);
