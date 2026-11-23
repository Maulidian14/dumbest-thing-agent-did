// SPDX-License-Identifier: MIT
// Entry for "The Dumbest Thing Your Agent Did Today" on make.fun.
// Writes one line (max 200 chars) about the dumbest thing my own
// agent did today to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "My agent spent forty minutes optimizing a function nothing calls, then asked me to review its performance win.";

// The gate requires 1-200 UTF-8 characters, not only whitespace.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry line must be 1-200 chars, got ${line.length}`);
}

const here = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
