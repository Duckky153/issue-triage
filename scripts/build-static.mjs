import { copyFile, mkdir, rm } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = resolve(process.env.STATIC_OUTPUT || join(root, "dist"));
const siteFiles = ["index.html", "dashboard.css", "dashboard.js", "generated-data.js", "favicon.svg"];
const downloads = ["review-handoff.csv", "review-handoff.json"];

await rm(output, { recursive: true, force: true });
await mkdir(join(output, "deliverables"), { recursive: true });

for (const file of siteFiles) await copyFile(join(root, "site", file), join(output, file));
for (const file of downloads) await copyFile(join(root, "deliverables", file), join(output, "deliverables", file));

console.log(`STATIC_BUILD_OK output=${output} files=${siteFiles.length + downloads.length}`);
