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

// A Tailwind utility that shares a design class's name silently overrides it. This has happened:
// Tailwind's gap-5 is 20px, and the design's is 24px.
const css = files
  .filter((path) => path.endsWith(".css"))
  .map((path) => readFileSync(path, "utf8"))
  .join("");
const layerStart = css.indexOf("@layer utilities");
if (layerStart === -1) {
  hits.push("No Tailwind utilities layer found in the built CSS");
} else {
  let depth = 0;
  let end = css.indexOf("{", layerStart);
  const open = end;
  do {
    if (css[end] === "{") depth += 1;
    if (css[end] === "}") depth -= 1;
    end += 1;
  } while (depth > 0);
  const classNames = (text) =>
    new Set([...text.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)].map((match) => match[1]));
  const utilities = classNames(css.slice(open, end).replace(/\{[^{}]*\}/g, "{}"));
  const design = classNames(
    readFileSync("src/styles/simplex.css", "utf8")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/url\([^)]*\)/g, ""),
  );
  const allowed = new Set(["sr-only"]); // Both define the same thing.
  for (const name of utilities) {
    if (design.has(name) && !allowed.has(name)) {
      hits.push(`Tailwind utility .${name} collides with a design class`);
    }
  }
}

if (hits.length > 0) {
  console.error(hits.join("\n"));
  process.exit(1);
}
console.log(
  `Client bundle OK: ${files.length} files, ${forbidden.length} forbidden values absent${canary ? ", canary checked" : ""}`,
);
