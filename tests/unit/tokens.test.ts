import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const tokens = readFileSync("src/styles/tokens.css", "utf8").toLowerCase();
const globals = readFileSync("src/styles/globals.css", "utf8");
const defined = new Set([...tokens.matchAll(/^\s*(--[\w-]+):/gm)].map((match) => match[1]));

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
