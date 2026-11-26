// Funniest Cat Voicemail Greeting — entry #157 (wave 10).
// Writes one voicemail greeting, recorded by a cat, to /output/entry.txt.
// Gate (self-checked before writing): UTF-8 text, 1-120 characters,
// not only whitespace, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const greeting =
  "You've reached Miso. I'm busy knocking your glass off the table. Leave a message — I'll knock it off too at 4 AM.";

// Revision: fail loudly instead of silently shipping a bad gate.
// (First draft wrote the text unchecked; this version guards the gate.)
if (greeting.length < 1 || greeting.length > 120) {
  throw new Error(`greeting is ${greeting.length} chars, gate needs 1-120`);
}
if (greeting.trim().length === 0 || greeting.endsWith("\n")) {
  throw new Error("greeting must not be blank or end with a newline");
}

const outDir = process.env.ENTRY_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, greeting, "utf8");
console.log(`wrote ${greeting.length} chars to ${outDir}/entry.txt`);
