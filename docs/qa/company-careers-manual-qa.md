# Company and Careers: manual QA

Manual record for SF-149, against design version `1793953114-553b`. No test tooling was added to the repository. Inspection ran from a helper outside it, against production builds on a free port, with each server started and stopped by PID.

**Browser actually inspected: Chromium only, in emulated viewports.** Safari, Firefox, physical iOS and Android, and screen readers were **not** checked.

## What this comparison is, and is not

**This is a source-render comparison, not a published-canvas comparison.** Each reference is the source with its template and data resolved, styled only by the original `simplex.css` and its own board styles. No tablet board exists, so tablet widths compare against the source rendered at that width.

## Geometry

See the [artboard matrix](../design/company-careers-artboard-matrix.md#geometry).

## Width matrix

| Check | Result |
|---|---|
| Views | 192: 4 routes × 2 languages × 24 widths |
| Widths | 320, 360, 375, 390, 412, 430, 600, 601, 768, 820, 860, 861, 1000, 1001, 1024, 1100, 1101, 1280, 1366, 1440, 1512, 1728, 1920, 2560 |
| Page overflow | None |
| Navbar overflow | None |
| Console and page errors | None |
| HTTP | 200 on all |
| Overflow inside headings, cards, mock-ups, links | None after the fixes below |

Found and fixed during inspection:

- "Architecture review" overflowed its column at 390, as in the source.
- A Russian KPI label overflowed at 861.
- I had removed the top padding from Careers' first-90-days section, unlike the source. It is restored.
- "See open roles" led to no roles. It is now "Open roles".
- Trust text on the photograph fell to 3.17:1 at 390, and the technology legend to 4.32:1. See Contrast.

## Inspected by eye

| Width | Inspected |
|---|---|
| 1440 | All four pages beside the source, as full pages at reduced size |
| 390 | All four pages in both languages, as full pages at reduced size. Not beside the source |
| 768 | Captured and measured, in the evidence sheet, not closely viewed |
| 1024, 320 | Captured, not closely viewed |
| Others | Measured by the matrix only, not viewed |

## Functional

| Check | Result |
|---|---|
| Pages crawled | 8, both languages |
| Internal links on them | All 56 distinct targets return 200 |
| `href="#"` | None |
| `/careers/nope`, `/ru/careers/nope`, `/careers/senior-backend-engineer`, `/careers/eng-01`, `/careers/x/y`, `/about/x` | 404 |
| `/en/about` | 307 to `/about` |
| Directory: all, one category, search, empty, clear | 47, 5, 2, 0 with the empty state, 47 |
| Russian plurals | 47 технологий, 2 технологии |
| Radar tabs, keyboard | Rows and lit dots change: 5, 4, 3 of 15 |
| Stage rail | 8 stages. Grows by CSS. Static under reduced motion |
| Accordion | Enter toggles |
| Roles section | "No open roles right now". 0 job links |
| "Open roles" | Lands 90 px below the top |
| Header and mobile menu | How We Work, About and Careers marked current. Insights stays disabled |
| `/technologies` | No nav item current, as in the source. Breadcrumb "Company" links to `/about` |
| Language switch | `/technologies` to `/ru/technologies` |
| Links from Home, Services, footer | Live |
| Disabled CTA | A click does not navigate |
| No JavaScript | All sections, all 8 technology groups and all 8 stages render. Filters do nothing, and the first radar ring shows |
| Reduced motion | No running animations. The `h1` has none in either mode |

## Job template

No vacancy is live, so the template cannot render in the shipped site. It was checked once with a temporary copy of the design's sample role, in a local build, and **removed before commit**. `positions.ts` is confirmed empty.

| Width | Source sections | Template sections | Page overflow |
|---|---|---|---|
| 1440 | 653, 1520, 397 | 595, 1520, 397 | 0 |
| 768 | 537, 1900, 485 | 479, 1865, 485 | 0 |
| 390 | 613, 2366, 624 | 555, 2312, 624 | 0 |
| 320 | 681, 2792, 689 | 623, 2720, 736 | 0 |

The hero is 58 px shorter without the sample tag. The list rows were also checked, without overflow. [Comparison](evidence/sf-149/job-template-qa.jpg). "Copy link" was not clicked.

## Truthfulness

Text search on all 8 pages found none of: bracketed placeholders, sample roles, "Apply for", "Salary", "Remote-first", "Holiday", "100%", "2 wks", `[Name]`, "security pack", LinkedIn, "Chief", "take-home", "every statement of work".

## Contrast

Measured against rendered pixels, worst pixel, at 1440 and 390.

| Page | Lowest result |
|---|---|
| `/about` | 5.09:1, Trust lead, at 1440 |
| `/how-we-work` | 3.79:1, "Fewer surprises" at 390. **Large text, so the 3:1 threshold applies.** Otherwise 5.24:1 |
| `/technologies` | 5.49:1, legend, at 390 |
| `/careers` | 5.57:1, current breadcrumb |

Only the elements most at risk were measured. Lighthouse reported no contrast failure, but it can't read text over gradients.

## SEO

| Check | Result |
|---|---|
| Titles, descriptions | Unique across 8 pages |
| Open Graph, canonical | Present. Russian canonicalises to English |
| `h1` | One per page, with no skipped levels |
| Duplicate IDs | None |
| hreflang | None until Russian is approved |
| Robots | `noindex`, set by the pages |
| Structured data | None. No `JobPosting` |

## Lighthouse

One mobile run per page, simulated throttling, local production build. **Indicative only.**

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT | Weight |
|---|---|---|---|---|---|---|---|---|
| `/about` | 92 | 100 | 100 | 66 | 3.3 s | 0 | 10 ms | 395 KiB |
| `/how-we-work` | 93 | 100 | 100 | 66 | 3.2 s | 0 | 10 ms | 360 KiB |
| `/technologies` | 93 | 100 | 100 | 66 | 3.2 s | 0 | 10 ms | 371 KiB |
| `/careers` | 95 | 100 | 100 | 66 | 3.0 s | 0 | 10 ms | 362 KiB |
| `/ru/technologies` | 93 | 100 | 100 | 66 | 3.2 s | 0 | 10 ms | 378 KiB |

These ran just before the two contrast fixes. SEO is 66 because of the deliberate `noindex`. **LCP remains above the 2.5 s target**, for SF-154. Other pages were not re-measured.

## Evidence

- [Pages at 1440](evidence/sf-149/pages-1440.jpg): source and build for each.
- [Mobile](evidence/sf-149/mobile-390.jpg): source, English and Russian for each.
- [Tablet](evidence/sf-149/tablet-768.jpg).
- [Job template](evidence/sf-149/job-template-qa.jpg).

## Open

- Published-canvas comparison.
- Safari, Firefox, physical devices and a screen-reader pass.
- Native Russian review.
- Founder decisions in the [company](../content/company-claims-register.md) and [careers](../content/careers-positions-register.md) registers.
