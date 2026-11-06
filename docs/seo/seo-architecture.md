# SEO architecture

Page-level data: [page-seo-matrix.md](page-seo-matrix.md). Routes: [route-matrix.md](../architecture/route-matrix.md). Owner: SF-153, with each page ticket supplying its own metadata.

## Goal

International B2B search visibility for software engineering services. The design defines **no metadata, structured data or social images**, so this document supplies them as proposals, for owner approval.

## Status

SF-153 implements and verifies this specification. Today:

| Item | State |
|---|---|
| Metadata API per page, through `buildPageMetadata` | Helper implemented, used by `/`, `/agent`, the Services pages, `/packages` and the Industries pages |
| Canonical URLs | Implemented in the helper |
| Open Graph | Text fields implemented. No images (GAP-A02) |
| Twitter metadata | Text fields implemented. No images |
| hreflang | Implemented in the helper, emits nothing until a Russian family is approved |
| Environment indexing gate | Implemented: `SITE_INDEXABLE` |
| Russian `noindex` | Implemented through translation status |
| 404 status and `noindex` | Implemented, checked by hand |
| Robots | Implemented: disallow all unless indexable |
| Sitemap | Structure implemented, deliberately empty until routes are approved in `indexableRoutes` |
| Structured data | **Specified, not implemented** |
| Breadcrumbs | **Specified, not implemented** |
| Redirects | `/en/*` only. Rest specified |
| Internal linking, alt text, CWV | Specified, verified per page |

## The launch blocker

Most of the site's trust content is placeholder or illustrative. Publishing demonstration case studies and sample jobs under real URLs would risk misleading search users and would create thin pages. So indexing is decided per route, and many routes start `noindex`:

| Tier | Routes | Rule |
|---|---|---|
| Index at launch, once claims are cleared | Home, Services + 12, Packages, Industries + 6, How We Work, About, Technologies, Insights, Contact | Blockers in the matrix must close first |
| `noindex` until real | `/work` and `/work/*` (demonstrations, never as client success stories), `/agent` (until capabilities are verified), `/careers` and `/careers/[slug]` (samples), `/insights/[slug]` (samples) | Flip per item when the content is real |
| Not published until approved | Legal pages | Owner and legal approval |
| `noindex` until reviewed | All `/ru` URLs | Translation reviewed and approved |
| Always `noindex` | `/contact/thank-you`, 404 | Permanent |

`buildPageMetadata` in `src/lib/seo/metadata.ts` already supports the `noindex` override.

## Metadata API

Every page exports `generateMetadata` through `buildPageMetadata`. Exists today, and handles canonical, hreflang, robots and Open Graph.

| Field | Pattern |
|---|---|
| `<title>` | `{Page title} — SimpleX`. Home uses the design's brand title. 60 characters is a guideline: the design's service titles run longer |
| Description | Unique per page, 70 to 160 characters. Copy in the matrix is a starting point |
| Canonical | Absolute on `NEXT_PUBLIC_SITE_URL`, no query string |
| Open Graph | Title, description, URL, `siteName`, locale, image (GAP-A02) |
| Twitter | `summary` today. Planned to become `summary_large_image` in SF-153, when images exist |
| `metadataBase` | From `siteConfig.url` |

Remaining work: root defaults, image handling, and localised metadata per page.

## Canonical strategy

- One canonical per page. No trailing slash, which is the Next.js default, enforced by a redirect.
- Query strings never appear in canonicals. If filters ever reach the URL, they stay self-canonical to the base page.
- `/en/*` 307s to the unprefixed URL today (next-intl's behaviour). **Check in SF-153** whether it can become a 308, which suits a permanent rule better.
- Draft Russian pages canonicalise to English.

## Indexing of non-production

`SITE_INDEXABLE` must be exactly `true`. Previews are otherwise `noindex, nofollow`, already implemented and verified. `robots.txt` adds a second layer: disallow all except on production. Note that a disallow stops crawlers from seeing `noindex`, so previews should also sit behind platform protection where available.

## robots.txt

`src/app/robots.ts`. Production: allow all, reference the sitemap. Non-production: disallow all. Non-indexable builds also send `X-Robots-Tag`.

## sitemap.xml

`src/app/sitemap.ts`, generated from `indexableRoutes` in `src/config/routes.ts`. It stays empty until a page is approved for search, and the placeholder home is not listed. Page tickets add entries. Add Russian URLs with `alternates` when a family is `approved`. Use `lastModified` from real content dates, or omit it. No `priority` or `changefreq`, because Google ignores them.

## Structured data

Render JSON-LD server-side through small typed builders (planned at `src/lib/seo/jsonld/`). **Only state facts that exist.** Never invent ratings, review counts, addresses, founding dates or certifications. The design provides none of these.

| Schema | Where | Condition |
|---|---|---|
| `Organization` | Home | Blocked until legal name, logo URL and real profiles exist (GAP-C08) |
| `WebSite` | Home | Name and URL only. No `SearchAction` unless real site search exists |
| `BreadcrumbList` | Every route with `.crumbs` | Mirrors visible breadcrumbs exactly |
| `Service` | Service, Industry, Agent and Packages pages | `provider` references the Organization. No prices, as none are approved |
| `BlogPosting` | `/insights/[slug]` | Only with real author and date. Blocked by GAP-C07 |
| `JobPosting` | `/careers/[slug]` | **Only for live vacancies**, with real location and salary data. Sample roles get none |
| `FAQPage` | Agent, How We Work | The questions are visible and genuine. Google has limited FAQ rich results to authoritative government and health sites since 2023, so expect no rich result. Include it only if the owner values it for other consumers |
| `AggregateRating`, `Review` | Nowhere | There are no approved reviews |

Validate by hand with the Schema Markup Validator.

## Heading hierarchy

One H1 per page. The design generally complies. Points to check at implementation:

- `/` has its H1 inside the pinned hero, and statement cards use H2.
- The `Article` `<header>` holds the H1, with H2 in the body and H3 for its numbered list.
- `/about`'s mission uses `<p class="t-h1">` for a large statement, which correctly avoids a second H1.
- Case layouts use H1 for the project name only ("Ledgerline"). **Proposed:** keep the visible text but make the title descriptive.
- Some cards use H3 directly after an H1-level hero without an H2. Check per page.

H1s with line masks must read as a phrase in the DOM. `<span>` lines concatenate with no space ("Simple to use.Simple to change."), so **each mask line needs a trailing space or a separator**, or screen readers and search engines read run-together words.

## Internal linking

The design is strong here. The header mega menu links 13 services and the agent, the footer repeats key routes, service pages link to related services and case studies, and industry pages link to capabilities and projects. Gaps:

- `/technologies` is reachable only from the footer.
- The mobile menu has fewer service links than desktop (GAP-R02). Crawlers mostly see the desktop DOM, so keep all links in the HTML.
- Mega-menu links must be real anchors in server HTML, which the CSS-only pattern gives.
- Load more on `/insights` must not hide articles from crawlers: output plain links for all.
- Filters are client-side over a full server-rendered list.

## URLs and slugs

Lowercase, hyphenated, English, stable. Slugs in the design: 12 services, 6 industries, 3 case studies. **Articles and jobs have none** (GAP-R01). Rule for those: derived from the title, no dates, no stop-word stuffing, for example `the-quiet-cost-of-a-distributed-monolith`. Do not change a published slug without a redirect.

## Redirects and errors

| Case | Handling |
|---|---|
| Moved content | Permanent redirect in `next.config.ts`, one hop |
| Removed content, with no successor | Consider 410 through the proxy. Otherwise 404 |
| Unknown path | Real 404 through `src/app/global-not-found.tsx`, `noindex`, no canonical. Verified without JavaScript |
| Unknown slug under a known route | `dynamicParams = false`, so unknown slugs reach the same page. Verified |
| Demonstration case retired | 404. It was never indexed, so no redirect is needed |

There is no legacy site to migrate on this domain as far as this repository shows. `EugeniBykovski/simplex-web` is an older, separate SimpleX project: **ask the owner whether it is live** (GAP-S02), because if it is, it needs a redirect plan.

## Multilingual

Rules are in [i18n.md](../architecture/i18n.md). `hreflang` appears only where a reviewed translation exists, as the ticket requires. It is implemented in `buildPageMetadata` and currently emits nothing, which is correct.

## Images

Decorative CSS backgrounds carry no SEO value and need no alt text. Real `<img>` content uses `next/image`, with descriptive alt text. `.mock`, `.arch` and device frames are drawn in HTML: decorative ones are `aria-hidden`, and informative ones need a text alternative, as in `Article`'s `figcaption`. Mocks contain sample text that would be indexed: mark them `aria-hidden`, and consider `data-nosnippet`.

## Core Web Vitals

Budgets are in [system-design.md](../architecture/system-design.md). Key points: static HTML and self-hosted fonts already help LCP. The hero is text, so LCP should be fast. CLS risks are font swap (mitigated by `next/font` size adjustment), the cookie banner and late-loading client components. INP risks are the estimators and filter lists, both small.

## Measurement

The design and the ticket name no analytics tool, and the privacy text has a placeholder for one. **Owner decision (GAP-F03).** Set up Google Search Console, plus Yandex Webmaster if Russia is a target, at launch in SF-156.
