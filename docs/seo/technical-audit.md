# Technical SEO audit

For SF-153. **All evidence is from local production builds, read from raw server HTML.** Nothing has been deployed. There is no Search Console, analytics or field data, so **nothing here says anything about real indexing, ranking, traffic or real-user performance.**

## Method

Temporary tools, kept outside the repository and not committed:

| Tool | Used for |
|---|---|
| Node crawl script | Status, titles, descriptions, robots, canonicals, hreflang, Open Graph, JSON-LD, headings, images, links, duplicates, orphans |
| Node HTTP script | Status and redirects for 26 URL variants, robots, sitemap against pages, social images |
| Lighthouse 12 through `npx` | SEO and performance, mobile and desktop |

Builds: default, and `SITE_INDEXABLE=true` with `NEXT_PUBLIC_SITE_URL=https://example.com`, a stand-in. Fixtures used for unreachable paths were removed, and restoration confirmed.

## Findings and fixes

| # | Finding, before SF-153 | Severity | Fix |
|---|---|---|---|
| 1 | No structured data on any public page | High | [Typed builders](structured-data.md) |
| 2 | No social images. 74 of 74 pages lacked `og:image` | High | 66 generated cards. 0 pages lack one |
| 3 | Robots and sitemap disagreed: 14 pages `index`, sitemap empty | High | [One gate](sitemap-robots-indexing.md) |
| 4 | Draft Russian `noindex` with canonical to English | Medium | [Self-canonical](international-seo.md) |
| 5 | Noindex pages were also `nofollow` in production | Medium | `noindex, follow` in production builds |
| 6 | `/en/*` used a 307 | Medium | 308, one hop |
| 7 | 26 descriptions outside 70–160 characters, some weak | Medium | Rewritten where long or empty of content. 6 short ones left |
| 8 | "SimpleX Agent" title duplicated across languages | Low | Distinct descriptive titles |
| 9 | No link from services to industries | Medium | [Added](internal-linking.md) |
| 10 | "senior" in an indexable description, unverified (GAP-C10) | Medium | Removed from that description |
| 11 | Article metadata duplicated logic | Low | Moved into `buildPageMetadata` |

## Current results

| Check | Result |
|---|---|
| Pages crawled | 74, all 200 |
| Missing title, description, canonical, `og:image`, robots | 0 |
| Duplicate titles or descriptions | 0, across both languages |
| Pages not self-canonical, shared canonicals | 0 |
| Canonicals on the wrong origin, indexable build | 0 |
| Canonical on default build | `http://localhost:3000`. Safe, since those builds are `noindex` and disallowed. **Not a production value** |
| One `h1`, no skipped heading level | 74 of 74 |
| Broken links, `href="#"`, disabled links, bracket placeholders | 0 |
| `<img>` elements | 0: imagery is CSS or inline SVG, so there is no alt text gap. Decorative art is hidden from assistive technology |
| Fictional structured-data claims | 0 |
| Sitemap against indexable pages | 14 and 14, exact |

**Left as is:** 6 descriptions under 70 characters, on noindex Thank You and legal pending pages. Longer text would describe draft documents.

## HTTP behaviour

| URL | Result |
|---|---|
| `/nope`, `/ru/nope`, `/404`, `/Services` | 404, `noindex` |
| Unknown slug under services, industries, work, careers, insights | 404 |
| `/careers/senior-engineer`, a sample role | 404 |
| The draft article's URL | 404 |
| `/og/nope`, `/og/services/nope` | 404 |
| `/en`, `/en/services`, `/en/services/web-development` | 308, one hop |
| `/services/`, `/ru/`, `//services` | 308, one hop |
| `/en/` | **308 twice**: slash, then locale. Minor |
| `/services?x=1`, `/insights?category=cloud` | 200, canonical without query |

**410:** not used. Nothing has ever been published and removed. Homepage redirects for unknown paths: none.

## Core Web Vitals

Lab only. One run per page and form factor, local indexable build, Lighthouse's default throttling. **INP can't be measured in a lab.** TBT is the stand-in.

| Page | Form | Perf | A11y | Best practices | SEO | LCP | FCP | CLS | TBT | Weight |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | Mobile | 88 | 100 | 100 | 100 | 3.8 s | 1.2 s | 0 | 10 ms | 617 KiB |
| `/` | Desktop | 97 | 100 | 100 | 100 | 1.3 s | 0.3 s | 0 | 0 ms | 838 KiB |
| `/services` | Mobile | 92 | 100 | 100 | 100 | 3.3 s | 1.2 s | 0 | 10 ms | 382 KiB |
| `/services` | Desktop | 100 | 100 | 100 | 100 | 0.7 s | 0.3 s | 0 | 0 ms | 588 KiB |
| `/services/web-development` | Mobile | 91 | 100 | 100 | 100 | 3.5 s | 1.2 s | 0 | 10 ms | 459 KiB |
| `/services/web-development` | Desktop | 100 | 100 | 100 | 100 | 0.8 s | 0.3 s | 0 | 0 ms | 679 KiB |
| `/industries/fintech` | Mobile | 91 | 100 | 100 | 66 | 3.4 s | 1.2 s | 0 | 10 ms | 387 KiB |
| `/industries/fintech` | Desktop | 100 | 100 | 100 | 66 | 0.7 s | 0.3 s | 0 | 0 ms | 607 KiB |
| `/contact` | Mobile | 92 | 100 | 100 | 66 | 3.4 s | 1.2 s | 0 | 0 ms | 365 KiB |
| `/contact` | Desktop | 100 | 100 | 100 | 66 | 0.7 s | 0.3 s | 0 | 0 ms | 588 KiB |

SEO 66 is only the deliberate `noindex`. No article is published, so none was measured.

**SF-154 later found that these Lighthouse LCP values are unreliable against localhost.** See [core-web-vitals.md](../performance/core-web-vitals.md).

**Findings, for SF-154:**

- **Mobile LCP stays above the 2.5 s target, up to 3.8 s on Home.** The LCP element is text. Lighthouse estimates 360 ms of render-blocking savings, and 30 KiB of unused JavaScript.
- CLS is 0 and TBT is near zero, so layout and main-thread work are not the issue.
- Rendering: pages are static except Contact and Thank You, which need the request. No page became a Client Component here.
- `/og/*` images are generated at build, and aren't sent with pages.
- SF-153 didn't tune performance, as SF-154 owns it.

## Not verified

Real domain, https, www and redirect behaviour at the host; the Rich Results Test and Schema Markup Validator; real social previews on LinkedIn, X and others; Search Console; real-user vitals; keyword data; Safari, Firefox and screen readers.
