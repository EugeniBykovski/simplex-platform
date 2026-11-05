#!/usr/bin/env node
// Cross-checks the SF-140 documentation: JSON validity, coverage, ownership and links.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

const errors = [];
const fail = (message) => errors.push(message);

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const docs = walk("docs");
const markdown = [...docs.filter((path) => path.endsWith(".md")), "README.md"];

for (const path of docs.filter((file) => file.endsWith(".json"))) {
  try {
    JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    fail(`${path}: invalid JSON (${error.message})`);
  }
}
if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const inventory = JSON.parse(readFileSync("docs/design/artboard-inventory.json", "utf8"));
const registry = JSON.parse(readFileSync("docs/architecture/route-registry.json", "utf8"));
const { boards, compositions, source } = inventory;
const boardIds = new Set(boards.map((board) => board.artboardId));
const routeNames = registry.routes.map((route) => route.route);

// Every design board is accounted for, once, with an owner.
if (boards.length !== source.boardCount) fail("Inventory board count does not match its source");
if (boardIds.size !== boards.length) fail("Duplicate artboard IDs");
for (const board of boards) {
  if (!board.ownerTicket) fail(`${board.artboardId}: no owner`);
  if (!compositions[board.sourceComposition]) {
    fail(`${board.artboardId}: unknown composition ${board.sourceComposition}`);
  }
  if (board.kind === "page" && !routeNames.includes(board.route)) {
    fail(`${board.artboardId}: route ${board.route} not in registry`);
  }
}
if (Object.keys(compositions).length !== source.uniqueCompositionCount) {
  fail("Composition count mismatch");
}
if (inventory.tileContinuityIssues.length > 0) fail("Tile crop offsets are not contiguous");

// Every route has a board, a single owner and no duplicates.
if (new Set(routeNames).size !== routeNames.length) fail("Duplicate routes in registry");
if (registry.concreteRouteCount !== routeNames.length) fail("Registry route count mismatch");
for (const route of registry.routes) {
  if (route.artboards.length === 0) fail(`${route.route}: no artboard`);
  if (!route.ownerTicket) fail(`${route.route}: no owner`);
  for (const id of route.artboards) {
    if (!boardIds.has(id)) fail(`${route.route}: unknown artboard ${id}`);
  }
}

// Patterns in code, registry and generated routes agree.
const routesSource = readFileSync("src/config/routes.ts", "utf8");
const familiesSource = routesSource.slice(0, routesSource.indexOf("} as const"));
const codePatterns = [...familiesSource.matchAll(/"(\/[^"]*)"/g)].map((match) => match[1]);
const sorted = (list) => [...list].sort().join();
if (sorted(codePatterns) !== sorted(registry.patterns)) {
  fail("src/config/routes.ts patterns differ from route-registry.json");
}
const toPattern = (route) =>
  registry.patterns.includes(route)
    ? route
    : route.replace(/^\/(services|industries|work)\/.+$/, "/$1/[slug]");
for (const route of routeNames) {
  if (!registry.patterns.includes(toPattern(route))) fail(`${route}: matches no pattern`);
}

// SEO and UI route maps agree.
const seoMatrix = readFileSync("docs/seo/page-seo-matrix.md", "utf8");
const routeMatrix = readFileSync("docs/architecture/route-matrix.md", "utf8");
for (const route of routeNames) {
  if (!seoMatrix.includes(`\`${route}\``)) fail(`SEO matrix is missing ${route}`);
  if (!routeMatrix.includes(`\`${route}\``)) fail(`Route matrix is missing ${route}`);
}

// Gap IDs referenced anywhere exist in the register, and are unique there.
const register = readFileSync("docs/design/design-gap-register.md", "utf8");
const defined = [...register.matchAll(/^\| (GAP-[A-Z]\d+) \|/gm)].map((match) => match[1]);
if (new Set(defined).size !== defined.length) fail("Duplicate gap IDs in register");
for (const path of markdown) {
  const text = readFileSync(path, "utf8");
  for (const [id] of text.matchAll(/GAP-[A-Z]\d+/g)) {
    if (!defined.includes(id)) fail(`${path}: unknown gap ${id}`);
  }

  // Relative links resolve.
  for (const [, target] of text.matchAll(/\]\((?!https?:|#|mailto:)([^)#\s]+)(?:#[^)]*)?\)/g)) {
    if (!existsSync(resolve(dirname(path), target))) fail(`${path}: dead link ${target}`);
  }

  // Repo paths in backticks exist, unless the same line marks them as planned.
  for (const line of text.split("\n")) {
    if (/\bplanned\b/i.test(line)) continue;
    for (const [, candidate] of line.matchAll(
      /`((?:src|docs|scripts|public|tests)\/[^`\s*{}<>]+)`/g,
    )) {
      if (!existsSync(candidate.replace(/\/$/, ""))) fail(`${path}: missing path ${candidate}`);
    }
  }
}

// Required deliverables exist.
const required = [
  "docs/architecture/system-design.md",
  "docs/architecture/route-matrix.md",
  "docs/architecture/route-registry.json",
  "docs/architecture/component-boundaries.md",
  "docs/architecture/contact-and-email.md",
  "docs/architecture/implementation-roadmap.md",
  "docs/architecture/i18n.md",
  "docs/architecture/environment-configuration.md",
  "docs/architecture/deployment.md",
  "docs/architecture/security-boundaries.md",
  "docs/design/artboard-inventory.md",
  "docs/design/artboard-inventory.json",
  "docs/design/design-system-specification.md",
  "docs/design/component-inventory.md",
  "docs/design/component-implementation.md",
  "docs/design/responsive-specification.md",
  "docs/design/motion-interaction-specification.md",
  "docs/design/asset-manifest.md",
  "docs/design/design-gap-register.md",
  "docs/content/content-and-claims-register.md",
  "docs/seo/seo-architecture.md",
  "docs/seo/page-seo-matrix.md",
  "docs/qa/visual-regression-strategy.md",
  "docs/qa/test-matrix.md",
];
for (const path of required) {
  if (!existsSync(path)) fail(`Missing deliverable ${path}`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} problem(s)`);
  process.exit(1);
}
console.log(
  `Docs OK: ${relative(".", "docs")}/ has ${markdown.length} Markdown files; ` +
    `${boards.length} boards, ${routeNames.length} routes, ${defined.length} gaps cross-checked`,
);
