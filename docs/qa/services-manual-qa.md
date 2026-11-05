# Services: manual QA

Manual record for SF-145, against design version `1793869596-167d`. No test tooling was added to the repository. Inspection ran from a helper outside it, against production builds on a free port, with each server stopped by its own PID.

**Browser actually inspected: Chromium only, in emulated viewports.** Safari, Firefox, physical iOS and Android, and screen readers were **not** checked.

## What this comparison is, and is not

**This is a source-render comparison, not a published-canvas comparison.** Each reference is the source with its template and slug data resolved, styled only by the original `simplex.css`, and with only the first accordion open, as on the live board. Equal heights show matching structure and flow. They do not prove pixel parity, and the published canvas has not been compared.

## Geometry

See the [artboard matrix](../design/services-artboard-matrix.md#geometry). **At 1440, every section of all 13 routes has the same height as the source.**

Reference boards exist for the overview and `ai-engineering` at 390. For the other 11 slugs, the mobile comparison is against the same source rendered at 390, not an approved board.

## Width matrix

| Check | Result |
|---|---|
| Views | 416: 13 routes × 2 languages × 16 widths, from 320 to 2560 |
| Page overflow | None |
| Navbar overflow | None |
| Console and page errors | None |
| HTTP | 200 on all |
| Overflow inside buttons, chips, headings, tiles | None after the fixes below |

Found and fixed during inspection:

- A long code string clipped in the code mock-up at ≤ 375.
- KPI tiles overflowed at 320.
- "Узнать об исследовании" overflowed at 320, and is now "Спросить о спринте".
- "Инфраструктура" overflowed its column at 1440, and "Кроссплатформенность" at 320. Russian now hyphenates.
- Hyphenation briefly split an English headline ("organi-sational"), so it is now Russian only.
- `Technology directory` relied on colour alone, flagged by Lighthouse. It now has a dashed underline when pending.

## Inspected by eye

| Width | Inspected |
|---|---|
| 1440 | All 12 heroes beside the source, and full pages of the overview and `cloud-devops` beside the source |
| 1366 | Full pages captured, Russian overview viewed |
| 1024, 768 | Full pages captured, sample viewed. **Not every route viewed** |
| 390 | Full pages of the overview and `ai-engineering` beside the source, in English and Russian |
| Others | Measured by the matrix only, not viewed |

## Functional

| Check | Result |
|---|---|
| Internal links on all Services pages, Home and Agent, both languages | All 30 distinct targets return 200 |
| `href="#"` | None |
| Unknown slugs, including the ticket's `custom-software-engineering` | Rendered 404 |
| `/en/services` | 307 to `/services` |
| Header Services link, mega-menu links, mobile menu links | Navigate, with the current section marked |
| Language switch | Stays on the page: `/services/cloud-devops` to `/ru/services/cloud-devops` |
| "Related work" | Lands 90 px below the top, clear of the header |
| Disabled CTA | A click does not navigate |
| Accordion | Enter toggles it, and it works with no JavaScript |
| Matrix at 390 | Scrolls inside a keyboard-focusable region (760 px in 348 px) |
| No JavaScript | All sections render |
| Reduced motion | No running animations. The `h1` has none in either mode |

## SEO

| Check | Result |
|---|---|
| Titles, descriptions | Unique across 26 pages |
| `h1` | One per page, with no skipped heading levels on any page |
| Duplicate IDs, bracketed placeholders in text | None |
| Canonical | Correct. Russian canonicalises to English |
| hreflang | None until Russian is approved |
| Robots | `noindex` in these builds, by environment. Production follows `SITE_INDEXABLE` |
| Structured data | None, since approved company details do not exist (GAP-C08) |

## Contrast

Measured default and hover on four representative pages. No flat-background element falls below 4.5:1. The script cannot read text over gradients, so glass buttons on `bg-cta` report a false 1.24 and were checked by eye.

## Lighthouse

One mobile run per page, simulated throttling, local production build. **Indicative only.**

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | Weight |
|---|---|---|---|---|---|---|---|
| `/services` | 93 | 100 | 100 | 66 | 3.3 s | 0 | 382 KiB |
| `/services/web-development` | 91 | 100 | 100 | 66 | 3.5 s | 0 | 457 KiB |
| `/services/cloud-devops` | 90 | 100 | 100 | 66 | 3.6 s | 0 | 467 KiB |

SEO is 66 because of the deliberate `noindex`. **LCP remains above the 2.5 s target**, at about the level of `/agent`, even with no reveal animation. Lighthouse points to render-blocking CSS, which is a site-wide cost. Recorded for SF-154, and not fixed here.

## Evidence

- [Heroes beside the source, part 1](evidence/sf-145/heroes-1.jpg) and [part 2](evidence/sf-145/heroes-2.jpg): source on the left, build on the right.
- [Full pages at 1440](evidence/sf-145/full-1440.jpg): source, build, source, build.
- [Full pages at 390](evidence/sf-145/full-390.jpg): source, English, Russian, twice.
- [Tablet and laptop samples](evidence/sf-145/full-tablet.jpg)

## Open

- Published-canvas comparison.
- Safari, Firefox, physical devices and a screen-reader pass.
- Native Russian review.
- Claims in the [register](../content/services-claims-register.md).
