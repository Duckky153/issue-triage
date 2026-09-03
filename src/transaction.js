import { access, copyFile, mkdir, mkdtemp, rename, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

export async function promoteWithRollback({ sourceRoot, targetRoot, relativePaths, failAfter = null, verifyAfterPromotion = null }) {
  const backupRoot = await mkdtemp(join(tmpdir(), "github-triage-backup-"));
  const originallyPresent = new Set();
  let writes = 0;
  try {
    for (const relativePath of relativePaths) {
      const target = join(targetRoot, relativePath);
      if (await exists(target)) {
        originallyPresent.add(relativePath);
        const backup = join(backupRoot, relativePath);
        await mkdir(dirname(backup), { recursive: true });
        await copyFile(target, backup);
      }
    }
    try {
      for (const relativePath of relativePaths) {
        if (failAfter !== null && writes === failAfter) throw new Error("injected promotion failure");
        const source = join(sourceRoot, relativePath);
        const target = join(targetRoot, relativePath);
        const temporary = `${target}.candidate-${process.pid}`;
        await mkdir(dirname(target), { recursive: true });
        await copyFile(source, temporary);
        await rm(target, { force: true });
        await rename(temporary, target);
        writes += 1;
      }
      if (verifyAfterPromotion) await verifyAfterPromotion();
    } catch (error) {
      for (const relativePath of relativePaths) {
        const target = join(targetRoot, relativePath);
        if (originallyPresent.has(relativePath)) {
          await mkdir(dirname(target), { recursive: true });
          await copyFile(join(backupRoot, relativePath), target);
        } else {
          await rm(target, { force: true });
        }
      }
      throw error;
    }
  } finally {
    await rm(backupRoot, { recursive: true, force: true });
  }
}
