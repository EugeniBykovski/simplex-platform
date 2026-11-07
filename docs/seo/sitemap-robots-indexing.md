# Sitemap, robots and indexing

For SF-153. Results measured on production builds.

## One gate for indexing

`indexableRoutes` in `src/config/routes.ts` lists approved static pages. `isIndexEligible` in `src/lib/seo/metadata.ts` is the only test, and robots tags, sitemap, hreflang and structured data all follow it. **They used to disagree: 14 pages said `index` while the sitemap was empty.** Articles and legal documents qualify through their own approval records.

| Layer | Rule |
|---|---|
| Environment | `SITE_INDEXABLE=true`, and a public https `NEXT_PUBLIC_SITE_URL`. Vercel previews can never qualify |
| Content | Listed, or approved by its own record |
| Language | English, or a Russian family marked `approved` |
| Fallback | The layout defaults to `noindex`, so a page that forgets stays out |

## Current result, with an indexable build

| Item | Result |
|---|---|
| `index, follow` | 14: Home, Services, 12 service pages |
| `noindex, follow` | The other 60 |
| Sitemap | Those 14, all 200, self-canonical, `index`. Exact match both ways |
| `lastmod` | None. No real page dates exist, so none are invented |

**A sitemap entry is not evidence of indexing.** No search engine has seen this site.

## Excluded

Thank You, 404, all legal drafts, Work and its demonstrations, Agent, Packages, Industries, About, How We Work, Technologies, Careers, Insights while empty, Contact, unpublished articles, all Russian, and `/og/*`.

## Robots

| Build | `robots.txt` | Meta and header |
|---|---|---|
| Production | `Allow: /`, sitemap URL. Assets are not blocked | Per page. No `X-Robots-Tag` |
| Everything else | `Disallow: /`, empty sitemap | `noindex, nofollow` in meta and in `X-Robots-Tag` on every response |

The disallow is not the protection: a blocked crawler can't read `noindex`, and a linked URL could still be listed. So header and meta stay as the real control, and **previews with sensitive content also need deployment protection.** In production, noindex pages use `noindex, follow`, so crawlers can pass through them.

## Fixture verification

In a temporary indexable build, then restored:

| Input | Result |
|---|---|
| Published article | `index`, in sitemap with real `lastmod`, `BlogPosting`, `og:type` article. Russian 404 |
| `/insights` with an article | `index`, in sitemap |
| Approved English privacy | `index`, in sitemap with `lastmod`. Russian still `noindex` |
| Russian `services` approved | [See international SEO](international-seo.md) |

## Domain

**No production domain is approved** (GAP-C08). `.env.example` leaves it unset, and an indexable build without a public https URL fails. Choose www or non-www and redirect the other at the host. https redirect and HSTS are also at the host. Nothing can be verified until then.
