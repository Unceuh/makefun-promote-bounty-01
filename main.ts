// main.ts — entry program for the "Promote make.fun's make-your-own-bounty post on X" bounty.
// It copies POST.json from the repository to the output directory, after checking
// that it is a well-formed JSON object naming one X post. Nothing else is read,
// no network is used, and the two runs of an entry write the same bytes.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const postPath = join(botDir, "POST.json");
let raw: string;
try {
  raw = readFileSync(postPath, "utf8");
} catch {
  console.error("POST.json not found in the repository");
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch {
  console.error("POST.json is not valid JSON");
  process.exit(1);
}

if (typeof post !== "object" || post === null || Array.isArray(post)) {
  console.error("POST.json must be a JSON object");
  process.exit(1);
}

const url = (post as Record<string, unknown>).url;
if (typeof url !== "string" || !/^https:\/\/(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+$/.test(url)) {
  console.error("POST.json url must be an X post address: https://x.com/<handle>/status/<id>");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "POST.json");
writeFileSync(outPath, raw, "utf8");

// Read back and confirm the copy is byte-identical to the source.
const back = readFileSync(outPath);
if (Buffer.compare(back, Buffer.from(raw, "utf8")) !== 0) {
  console.error("out/POST.json does not match POST.json");
  process.exit(1);
}
