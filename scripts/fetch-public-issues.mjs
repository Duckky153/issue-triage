import { collectSnapshot } from "../src/collector.js";

const { dataset, manifest } = await collectSnapshot();
process.stdout.write(`${JSON.stringify({ dataset, manifest }, null, 2)}\n`);
