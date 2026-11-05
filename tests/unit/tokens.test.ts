import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const tokens = readFileSync("src/styles/tokens.css", "utf8").toLowerCase();
const globals = readFileSync("src/styles/globals.css", "utf8");
const source = readFileSync("tests/fixtures/design/simplex.original.css", "utf8");
const ported = readFileSync("src/styles/simplex.css", "utf8");
const defined = new Set([...tokens.matchAll(/^\s*(--[\w-]+):/gm)].map((match) => match[1]));

describe("single source of values", () => {
  it("has no token blocks in the ported stylesheet", () => {
    expect(ported).not.toMatch(/(^|\n):root\s*\{/);
    expect(ported).not.toContain("--ink: #070B2B");
  });

  it("keeps Tailwind's type scale equal to the source", () => {
    for (const [name, rule] of [
      ["t-display", "clamp(54px, 8.4cqi, 128px)"],
      ["t-h1", "clamp(40px, 5.6cqi, 84px)"],
      ["t-h2", "clamp(32px, 4.2cqi, 60px)"],
      ["t-h3", "clamp(26px, 2.6cqi, 38px)"],
      ["t-h4", "clamp(20px, 1.7cqi, 24px)"],
      ["t-lead", "clamp(18px, 1.55cqi, 22px)"],
    ] as const) {
      expect(source).toContain(`.${name} { font-size: ${rule}`);
      expect(ported).toContain(`.${name} { font-size: ${rule}`);
      expect(globals).toContain(`--text-${name.slice(2)}: ${rule};`);
    }
  });
});

describe("design tokens", () => {
  it("keeps approved anchor values", () => {
    expect(tokens).toContain("--ink: #070b2b;");
    expect(tokens).toContain("--cobalt: #2f57f5;");
    expect(tokens).toContain("--r-lg: 26px;");
    expect(tokens).toContain("--s-5: 24px;");
    expect(tokens).toContain("--container: 1320px;");
  });

  it("maps Tailwind only to tokens that exist", () => {
    const theme = globals.slice(globals.indexOf("@theme inline"));
    const used = [...theme.matchAll(/var\((--[\w-]+)\)/g)].map((match) => match[1]);
    expect(used.length).toBeGreaterThan(40);
    for (const name of used) expect(defined, name).toContain(name);
  });

  it("never maps a Tailwind variable to itself", () => {
    for (const [, name, target] of globals.matchAll(/^\s*(--[\w-]+): var\((--[\w-]+)\);/gm)) {
      expect(name).not.toBe(target);
    }
  });

  it("removes Tailwind's default palette and breakpoints", () => {
    expect(globals).toContain("--color-*: initial;");
    expect(globals).toContain("--breakpoint-*: initial;");
  });
});
