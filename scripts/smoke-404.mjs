#!/usr/bin/env node
// Checks raw server HTML, so it proves the 404 works without JavaScript.
// Usage: pnpm build && pnpm start, then BASE_URL=http://localhost:3000 pnpm smoke:404
const base = process.env.BASE_URL ?? "http://localhost:3000";

const cases = [
  { path: "/nope", lang: "en", h1: "This page took a", home: 'href="/"' },
  { path: "/services/unknown", lang: "en", h1: "This page took a", home: 'href="/"' },
  { path: "/de/x", lang: "en", h1: "This page took a", home: 'href="/"' },
  { path: "/ru/nope", lang: "ru", h1: "Эта страница пошла", home: 'href="/ru"' },
  { path: "/ru/services/unknown", lang: "ru", h1: "Эта страница пошла", home: 'href="/ru"' },
];

const failures = [];
for (const { path, lang, h1, home } of cases) {
  const response = await fetch(base + path, { redirect: "manual" });
  const html = await response.text();
  const checks = {
    "status 404": response.status === 404,
    "no empty shell": !html.includes("__next_error__"),
    [`lang=${lang}`]: new RegExp(`<html[^>]*lang="${lang}"`).test(html),
    "server-rendered h1": new RegExp(`<h1[^>]*>${h1}`).test(html),
    "one h1": (html.match(/<h1[\s>]/g) ?? []).length === 1,
    "link home": html.includes(home),
    noindex: /<meta name="robots" content="noindex/.test(html),
    "no canonical": !html.includes('rel="canonical"'),
    "title set": /<title>[^<]*SimpleX<\/title>/.test(html),
  };
  for (const [name, passed] of Object.entries(checks)) {
    if (!passed) failures.push(`${path}: ${name}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`404 OK: ${cases.length} URLs return server-rendered, localised, noindex 404 pages`);
