import { expect, test } from "@playwright/test";

const hostileBases = [
  "//evil.example/",
  "/en//evil.example",
  "/ru//evil.example",
  "/%2F%2Fevil.example",
  "/en/%2F%2Fevil.example",
  "/\\evil.example",
];

for (const path of hostileBases) {
  test(`${path} does not redirect off-site`, async ({ request, baseURL }) => {
    const response = await request.fetch(new URL(baseURL ?? "").origin + path, { maxRedirects: 0 });
    const location = response.headers().location;
    if (location) {
      expect(new URL(location, baseURL).host).toBe(new URL(baseURL ?? "").host);
    }
    expect(response.status()).toBeLessThan(500);
  });
}

test("the page ignores query parameters instead of reflecting them", async ({ request }) => {
  const marker = "<script>alert(1)</script>";
  const body = await (await request.get(`/?q=${encodeURIComponent(marker)}`)).text();
  expect(body).not.toContain(marker);
  const notFound = await (await request.get(`/nope?q=${encodeURIComponent(marker)}`)).text();
  expect(notFound).not.toContain(marker);
});

test("non-indexable builds disallow crawling and send X-Robots-Tag", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toMatch(/Disallow: \//);
  expect(robots.headers()["x-robots-tag"]).toContain("noindex");
  expect((await request.get("/")).headers()["x-robots-tag"]).toContain("noindex");
});
