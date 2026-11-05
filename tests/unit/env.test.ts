import { describe, expect, it } from "vitest";
import { parseEmailEnv, parseSiteEnv } from "@/config/env";

describe("parseSiteEnv", () => {
  it("allows a build with nothing set, as noindex with a local fallback", () => {
    expect(parseSiteEnv({})).toEqual({ siteUrl: "http://localhost:3000", indexable: false });
  });

  it("normalises the URL to its origin", () => {
    expect(parseSiteEnv({ NEXT_PUBLIC_SITE_URL: "https://a.test/" }).siteUrl).toBe(
      "https://a.test",
    );
  });

  it.each([
    ["nonsense", "not a valid URL"],
    ["ftp://a.test", "http or https"],
    ["https://a.test/path", "no path"],
    ["https://a.test?x=1", "no path"],
  ])("rejects the site URL %s", (value, message) => {
    expect(() => parseSiteEnv({ NEXT_PUBLIC_SITE_URL: value })).toThrow(message);
  });

  it("rejects an unknown indexing flag instead of treating it as false", () => {
    expect(() => parseSiteEnv({ SITE_INDEXABLE: "yes" })).toThrow("SITE_INDEXABLE");
  });

  it.each([[undefined], ["http://a.test"], ["https://localhost"], ["https://127.0.0.1"]])(
    "refuses to index with the site URL %s",
    (value) => {
      expect(() => parseSiteEnv({ SITE_INDEXABLE: "true", NEXT_PUBLIC_SITE_URL: value })).toThrow(
        "public https",
      );
    },
  );

  it("indexes production with a public https URL", () => {
    const raw = { SITE_INDEXABLE: "true", NEXT_PUBLIC_SITE_URL: "https://a.test" };
    expect(parseSiteEnv(raw).indexable).toBe(true);
    expect(parseSiteEnv({ ...raw, VERCEL_ENV: "production" }).indexable).toBe(true);
  });

  it.each(["preview", "development"])("never indexes a Vercel %s deployment", (VERCEL_ENV) => {
    const raw = { SITE_INDEXABLE: "true", NEXT_PUBLIC_SITE_URL: "https://a.test", VERCEL_ENV };
    expect(parseSiteEnv(raw).indexable).toBe(false);
  });
});

describe("parseEmailEnv", () => {
  const valid = {
    RESEND_API_KEY: "secret-value",
    CONTACT_FROM_EMAIL: "from@a.test",
    CONTACT_INBOX_EMAIL: "inbox@a.test",
  };

  it("returns valid values", () => {
    expect(parseEmailEnv(valid)).toEqual({
      apiKey: "secret-value",
      fromEmail: "from@a.test",
      inboxEmail: "inbox@a.test",
    });
  });

  it("reports every missing value", () => {
    expect(() => parseEmailEnv({})).toThrow(/RESEND_API_KEY[\s\S]*FROM[\s\S]*INBOX/);
  });

  it("never prints the secret when another value is invalid", () => {
    let message = "";
    try {
      parseEmailEnv({ ...valid, CONTACT_INBOX_EMAIL: "bad" });
    } catch (error) {
      message = String(error);
    }
    expect(message).toContain("CONTACT_INBOX_EMAIL");
    expect(message).not.toContain("secret-value");
  });
});
