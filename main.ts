// The Moon Finally Answers Back — make.fun entry
// Node 22, stdlib only, deterministic, no network.
// Writes one line (the Moon's comeback) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: the Moon, wry and old after four thousand years of being
// wished on, howled at, and promised to at 2 a.m. — the twist lands in
// the last words: nobody ever wished for themselves to change.
const ENTRY =
  "Four thousand years of wishes, howls, and 2 a.m. promises to change — I've granted 11,402 of them, and every single one asked me to fix somebody else.";

// Gate self-check (mirrors the house gate): 1–240 characters, not only
// whitespace. Fail loudly instead of writing an entry that cannot be judged.
const length = [...ENTRY].length;
if (length < 1 || length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${length} is outside the 1–240 gate`);
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly the one line, byte for byte.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
