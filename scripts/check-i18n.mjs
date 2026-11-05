#!/usr/bin/env node
// Fails on key drift between locales, mismatched ICU arguments, or incomplete Russian plurals.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = "src/i18n/messages";
const [baseLocale, ...otherLocales] = ["en", "ru"];
const errors = [];

const flatten = (node, prefix = "") =>
  Object.entries(node).flatMap(([key, value]) =>
    typeof value === "string" ? [[`${prefix}${key}`, value]] : flatten(value, `${prefix}${key}.`),
  );

const load = (locale, file) =>
  new Map(flatten(JSON.parse(readFileSync(join(root, locale, file), "utf8"))));

const icuArguments = (message) =>
  [...message.matchAll(/\{\s*([A-Za-z_]\w*)\s*(?:,|\})/g)].map((match) => match[1]).sort();

// Returns the selector keywords of each {arg, plural, ...} block, respecting nested braces.
const pluralCategories = (message) => {
  const found = [];
  for (const match of message.matchAll(/\{\s*\w+\s*,\s*plural\s*,/g)) {
    let depth = 0;
    let keyword = "";
    const keywords = [];
    for (const char of message.slice(match.index + match[0].length)) {
      if (char === "{") {
        if (depth === 0) keywords.push(keyword.trim());
        depth += 1;
      } else if (char === "}") {
        if (depth === 0) break;
        depth -= 1;
        keyword = "";
      } else if (depth === 0) {
        keyword += char;
      }
    }
    found.push(keywords);
  }
  return found;
};

const requiredCategories = (locale) =>
  new Intl.PluralRules(locale).resolvedOptions().pluralCategories;

let keyCount = 0;
for (const file of readdirSync(join(root, baseLocale))) {
  const base = load(baseLocale, file);
  keyCount += base.size;

  for (const locale of otherLocales) {
    const target = load(locale, file);
    for (const key of base.keys()) {
      if (!target.has(key)) errors.push(`${locale}/${file}: missing "${key}"`);
    }
    for (const [key, message] of target) {
      if (!base.has(key)) {
        errors.push(`${locale}/${file}: extra "${key}"`);
        continue;
      }
      if (!message.trim()) errors.push(`${locale}/${file}: empty "${key}"`);
      if (/\[[^\]]+\]/.test(message)) errors.push(`${locale}/${file}: placeholder in "${key}"`);
      const expected = icuArguments(base.get(key)).join();
      if (icuArguments(message).join() !== expected) {
        errors.push(`${locale}/${file}: ICU arguments differ in "${key}"`);
      }
    }
  }

  for (const locale of [baseLocale, ...otherLocales]) {
    for (const [key, message] of load(locale, file)) {
      for (const categories of pluralCategories(message)) {
        for (const category of requiredCategories(locale)) {
          if (!categories.includes(category)) {
            errors.push(`${locale}/${file}: "${key}" lacks plural category "${category}"`);
          }
        }
      }
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `i18n OK: ${keyCount} keys in parity across ${[baseLocale, ...otherLocales].join(", ")}`,
);
