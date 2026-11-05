import { afterEach, describe, expect, it, vi } from "vitest";

type Env = Record<string, string | undefined>;

async function load(env: Env) {
  vi.resetModules();
  for (const name of ["NEXT_PUBLIC_SITE_URL", "SITE_INDEXABLE", "VERCEL_ENV"]) {
    vi.stubEnv(name, env[name] ?? "");
  }
  return {
    seo: await import("@/lib/seo/metadata"),
    robots: (await import("@/app/robots")).default,
    sitemap: (await import("@/app/sitemap")).default,
    status: await import("@/i18n/translation-status"),
  };
}

const production = { NEXT_PUBLIC_SITE_URL: "https://a.test", SITE_INDEXABLE: "true" };
const page = { family: "agent", path: "/agent", title: "T", description: "D" } as const;

afterEach(() => vi.unstubAllEnvs());

describe("localizedUrl", () => {
  it("keeps English unprefixed and prefixes Russian", async () => {
    const { seo } = await load(production);
    expect(seo.localizedUrl("en", "/")).toBe("https://a.test");
    expect(seo.localizedUrl("en", "/about")).toBe("https://a.test/about");
    expect(seo.localizedUrl("ru", "/")).toBe("https://a.test/ru");
    expect(seo.localizedUrl("ru", "/about")).toBe("https://a.test/ru/about");
  });
});

describe("buildPageMetadata", () => {
  it("indexes an English page on production, with a self canonical", async () => {
    const { seo } = await load(production);
    const metadata = seo.buildPageMetadata({ ...page, locale: "en" });
    expect(metadata.robots).toEqual({ index: true, follow: true });
    expect(metadata.alternates?.canonical).toBe("https://a.test/agent");
    expect(metadata.openGraph?.url).toBe("https://a.test/agent");
    expect(metadata.twitter).toMatchObject({ card: "summary", title: "T" });
  });

  it("never indexes a preview build", async () => {
    const { seo } = await load({ ...production, VERCEL_ENV: "preview" });
    expect(seo.buildPageMetadata({ ...page, locale: "en" }).robots).toEqual({
      index: false,
      follow: false,
    });
  });

  it("honours an explicit noindex on production", async () => {
    const { seo } = await load(production);
    const metadata = seo.buildPageMetadata({ ...page, locale: "en", noindex: true });
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });

  it("keeps unreviewed Russian out of search, with an English canonical and no hreflang", async () => {
    const { seo } = await load(production);
    const metadata = seo.buildPageMetadata({ ...page, locale: "ru" });
    expect(metadata.robots).toEqual({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe("https://a.test/agent");
    expect(metadata.alternates?.languages).toBeUndefined();
  });
});

describe("translation status", () => {
  it("only serves Russian for families that have a translation", async () => {
    const { status } = await load(production);
    expect(status.isLocaleAvailable("agent", "en")).toBe(true);
    expect(status.isLocaleAvailable("agent", "ru")).toBe(false);
    expect(status.isLocaleAvailable("home", "ru")).toBe(true);
  });

  it("approves no Russian family until a human has reviewed it", async () => {
    const { status } = await load(production);
    expect(Object.values(status.russianTranslationStatus)).not.toContain("approved");
  });
});

describe("robots and sitemap", () => {
  it("blocks all crawlers on non-production", async () => {
    const { robots, sitemap } = await load({ NEXT_PUBLIC_SITE_URL: "https://a.test" });
    expect(robots()).toEqual({ rules: { userAgent: "*", disallow: "/" } });
    expect(sitemap()).toEqual([]);
  });

  it("allows crawlers and points at the sitemap on production", async () => {
    const { robots } = await load(production);
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: "https://a.test/sitemap.xml",
    });
  });

  it("lists no routes while none are approved, so the placeholder is not advertised", async () => {
    const { sitemap } = await load(production);
    expect(sitemap()).toEqual([]);
  });
});
