# Insights: manual QA

Manual record for SF-150, against design version `1793953114-553b`. No test tooling was added to the repository. Inspection ran from a helper outside it, against production builds on a free port, with each server started and stopped by PID.

**Browser actually inspected: Chromium only, in emulated viewports.** Safari, Firefox, physical iOS and Android, and screen readers were **not** checked.

**This is a source-render comparison, not a published-canvas comparison.** No tablet board exists.

## Shipped state

No article is published, so `/insights` is what visitors get.

| Check | Result |
|---|---|
| Views | 48: 2 pages (EN, RU) × 24 widths |
| Page and navbar overflow, console errors | None |
| `/insights` | Hero, "No articles published yet", CTA. No filters, search or cards |
| `/insights/the-quiet-cost-of-a-distributed-monolith` | **404**, in both languages |
| `/insights/nope`, `/insights/x/y` | 404 |
| `/en/insights` | 307 to `/insights` |
| Draft text in `/insights` HTML | Absent |
| Draft text in the client bundle | Absent |
| Sitemap | No Insights entry |
| Robots | `noindex`, while empty |
| Canonical | `/insights`. Russian canonicalises to English |
| hreflang, structured data | None |
| `h1` | One, with no skipped levels |
| Bracketed placeholders, `href="#"` | None |
| Header, footer, mobile menu | Live. Insights marked current |
| Language switch | `/insights` to `/ru/insights` |
| Home | Three sample cards, tagged, **not links**. "All insights" reaches `/insights` |

Viewed by eye: English at 1440, and both languages at 390 in the [evidence](evidence/sf-150/shipped-empty.jpg).

## Template check

Article, featured, filter and related code cannot render in the shipped site. It was checked in local builds with temporary fixtures: the sample published under a fake "QA Fixture" author, nine stubs from the design's titles, and a `review` draft. **All were removed before commit, and `articles.ts` is confirmed restored.**

| Check | Result |
|---|---|
| Views | 34: 2 pages × 17 widths, English. No overflow or errors |
| Featured and cards | 1 and 9 |
| Category | `?category=product-design`: 2 articles, selected state set |
| Back, Forward | Both restore URL and results |
| Search with category | `?category=product-design&q=cost`: 0 articles, with count |
| No match, reset | Empty state, then 9 articles and a clean URL |
| Deep link | `?category=cloud`: 1 article, canonical stays `/insights` |
| Unknown category | Shows all |
| **`review` draft** | **404. Absent from HTML, related links and sitemap** |
| Article with no RU translation | `/ru/insights/<slug>`: 404, and the Russian index is empty |
| Metadata | Title, description, canonical. `og:type` article. Published and modified times, author |
| `BlogPosting` | Headline, description, language, URL, dates, `Person`, publisher name and URL. Nothing else |
| Indexing, on a fixture production build | `index, follow` for published |
| Sitemap, same build | 11 entries with `lastmod`. No draft, no Russian |
| Related | Named slugs, in order, without the draft or the current article |
| Contents link | Lands 100 px from the top |
| Copy link | Copies the URL, confirms, clears after 1.8 s |
| Share links | LinkedIn, X, `mailto:`. External ones open safely |
| Code block at 390 | Scrolls in its box (599 in 350), keyboard-focusable |
| No JavaScript | All 10 cards and the full article render |
| Reduced motion | Progress bar hidden |

Viewed by eye, beside the source: [index](evidence/sf-150/template-index-qa.jpg) and [article](evidence/sf-150/template-article-qa.jpg), at 1440 and 390. **The Russian article layout was not checked, since no translation exists.**

Found and fixed during inspection:

- At mobile widths the source's search box keeps a 360 px flex basis, which becomes a 360 px gap and pushes its icon out of place (GAP-D33).
- I had tightened the callout's margins, 44 px shorter than the source. Restored.
- The first fixture build failed the environment check, so its first results were from the previous build and were discarded. The check requires a public https URL for `SITE_INDEXABLE=true`.

## Accessibility

| Check | Result |
|---|---|
| Lighthouse accessibility | 100, on both index pages. **Article template not run through Lighthouse** |
| Semantics | `article`, `header`, `nav`, `figure` and `figcaption`, `time`, one `h1` |
| Filters | Real links with `aria-current`, not decorative chips. Count in a live region |
| Screen reader | Not tested |

Contrast was not measured separately on this section.

## Lighthouse

One mobile run per page, simulated throttling, local production build. **Indicative only**, and on the empty state.

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT | Weight |
|---|---|---|---|---|---|---|---|---|
| `/insights` | 94 | 100 | 100 | 66 | 3.1 s | 0 | 0 ms | 350 KiB |
| `/ru/insights` | 94 | 100 | 100 | 66 | 3.1 s | 0 | 0 ms | 355 KiB |

SEO is 66 because of the deliberate `noindex`. **LCP remains above the 2.5 s target**, for SF-154. Other pages were not re-measured.

## Open

- Published-canvas comparison.
- Safari, Firefox, physical devices and a screen-reader pass.
- Native Russian review.
- Founder decisions in the [editorial register](../content/insights-editorial-register.md).
