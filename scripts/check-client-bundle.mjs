#!/usr/bin/env node
// Fails if server-only names or a canary secret reach browser files. Run after `next build`.
// For the canary check, build with RESEND_API_KEY=$SECRET_CANARY and set SECRET_CANARY here too.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = ".next/static";
const canary = process.env.SECRET_CANARY;
const forbidden = ["RESEND_API_KEY", "CONTACT_FROM_EMAIL", "CONTACT_INBOX_EMAIL", "getEmailConfig"];
if (canary) forbidden.push(canary);

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const files = walk(root).filter((path) => /\.(js|css|json|map)$/.test(path));
const hits = files.flatMap((path) => {
  const text = readFileSync(path, "utf8");
  return forbidden
    .filter((value) => text.includes(value))
    .map((value) => `${path}: found a forbidden value (${value === canary ? "canary" : value})`);
});

if (hits.length > 0) {
  console.error(hits.join("\n"));
  process.exit(1);
}
console.log(
  `Client bundle OK: ${files.length} files, ${forbidden.length} forbidden values absent${canary ? ", canary checked" : ""}`,
);
