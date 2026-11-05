import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { implementedRoutes, indexableRoutes, routeFamilies } from "@/config/routes";
import { buildSecurityHeaders } from "@/config/security-headers";
import { defaultLocale, locales, routing } from "@/i18n/routing";

const registry = JSON.parse(readFileSync("docs/architecture/route-registry.json", "utf8")) as {
  patterns: string[];
};
const patterns = Object.values(routeFamilies).flat() as string[];

describe("route configuration", () => {
  it("matches the design route registry", () => {
    expect([...patterns].sort()).toEqual([...registry.patterns].sort());
  });

  it("has no duplicate patterns", () => {
    expect(new Set(patterns).size).toBe(patterns.length);
  });

  it("marks only known routes as implemented", () => {
    for (const route of implementedRoutes) expect(patterns).toContain(route);
    for (const { path } of indexableRoutes) expect(implementedRoutes).toContain(path);
  });
});

describe("locale configuration", () => {
  it("is deterministic: English default, no detection, no cookie", () => {
    expect(locales).toEqual(["en", "ru"]);
    expect(defaultLocale).toBe("en");
    expect(routing.localePrefix).toBe("as-needed");
    expect(routing.localeDetection).toBe(false);
    expect(routing.localeCookie).toBe(false);
  });
});

describe("security headers", () => {
  const value = (headers: { key: string; value: string }[], key: string) =>
    headers.find((header) => header.key === key)?.value;

  it("tells crawlers to stay away from non-indexable builds", () => {
    expect(value(buildSecurityHeaders({ indexable: false }), "X-Robots-Tag")).toContain("noindex");
    expect(value(buildSecurityHeaders({ indexable: true }), "X-Robots-Tag")).toBeUndefined();
  });

  it("allows no external origins in the content security policy", () => {
    const policy = value(buildSecurityHeaders({ indexable: true }), "Content-Security-Policy");
    expect(policy).not.toMatch(/https?:|\*/);
    expect(policy).toContain("frame-ancestors 'none'");
  });
});
