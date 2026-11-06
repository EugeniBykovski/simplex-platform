# Industries: manual QA

Manual record for SF-147, against design version `1793953114-553b`. No test tooling was added to the repository. Inspection ran from a helper outside it, against production builds on a free port, with each server started and stopped by PID.

**Browser actually inspected: Chromium only, in emulated viewports.** Safari, Firefox, physical iOS and Android, and screen readers were **not** checked.

## What this comparison is, and is not

**This is a source-render comparison, not a published-canvas comparison.** Each reference is the source with its template and slug data resolved, styled only by the original `simplex.css` and its own board styles. The published canvas was not compared.

Mobile boards exist for the overview and Healthcare only. For the other five slugs, the mobile comparison is against the same source rendered at 390, not an approved board.

## Geometry

See the [artboard matrix](../design/industries-artboard-matrix.md#geometry). **At 1440, every section of all seven routes has the same height as the source.** At 390 the differences come from reworded copy.

## Width matrix

| Check | Result |
|---|---|
| Views | 350: 7 routes × 2 languages × 25 widths |
| Widths | 320, 360, 375, 390, 412, 430, 600, 601, 760, 761, 768, 820, 860, 861, 1000, 1024, 1100, 1101, 1280, 1366, 1440, 1512, 1728, 1920, 2560 |
| Page overflow | None |
| Navbar overflow | None |
| Console and page errors | None |
| HTTP | 200 on all |
| Overflow inside buttons, chips, headings, cards | None after the fixes below |
| Every scenario tab panel, on all 6 slugs, in both languages, at 320, 390, 768 and 1440 | No overflow, one panel shown at a time |

Found and fixed during inspection:

- Healthcare's hero text was unreadable on its gradient, and Enterprise's breadcrumbs were too faint, as in the source. See Contrast.
- "Omnichannel", "Real-time expectations" and "Interoperability" overflowed narrow cards at 601 and 861. Headings there can now hyphenate or break.
- Reworded lines added height at 1440 on Healthcare and E-commerce. Shorter wording removed it.

## Inspected by eye

| Width | Inspected |
|---|---|
| 1440 | Overview and Healthcare beside the source, section by section. The other five slugs as full pages, at reduced size |
| 390 | Overview in Russian. Healthcare in English beside the source's top, and in Russian. The other five slugs in both languages, as full pages at reduced size |
| 768 | Overview closely. Others captured |
| 1024, 320 | Captured, in the evidence sheets, not closely viewed |
| Others | Measured by the matrix only, not viewed |

Scenario tabs other than the first were measured, not viewed.

## Functional

| Check | Result |
|---|---|
| Pages crawled | 14, both languages |
| Internal links found on them | All 46 distinct targets return 200 |
| `href="#"` | None |
| `/industries/nope`, `/ru/industries/nope`, `/industries/government`, `/industries/fintech/x` | 404 |
| `/en/industries` | 307 to `/industries` |
| Header, mega menu and mobile menu | Navigate, with Industries marked current on all seven routes |
| Links from Home and the footer | Live |
| Overview rows | Reach their pages |
| "Relevant work" | Lands 90 px below the top, clear of the header |
| Capability cards | Reach the service pages |
| Language switch | `/industries/saas` to `/ru/industries/saas` |
| Disabled CTA and case card | A click does not navigate |
| Scenario tabs by keyboard | Arrow keys and End work, and they wrap |
| Row hover | Indent and tint apply. Focus ring present |
| No JavaScript | All 8 sections render, with the first scenario showing. The others need JavaScript |
| Reduced motion | No running animations. The `h1` has none in either mode |

## Contrast

Measured against **rendered pixels behind the text**, taking the worst pixel, on all six heroes at 1440 and 390. Lowest values on Healthcare, the lightest gradient:

| Element | Source's colours, 1440 / 390 | Published, 1440 / 390 |
|---|---|---|
| Breadcrumb link | 2.18 / 1.97 | 6.80 / 6.19 |
| Current breadcrumb | 1.21 / 1.26 | 5.05 / 5.30 |
| Eyebrow | 2.21 / 2.16 | 5.63 / 5.39 |
| Lead | 4.22 / 3.25 | 6.29 / 5.24 |
| Fact label | 3.31 / 2.91 | 5.94 / 5.52 |
| Headline | 4.59 / 3.99 | 7.20 / 6.57 |

Enterprise's breadcrumbs were 2.16 to 3.86 and are now above 5.3 at both widths. Only heroes were measured this way. Other sections sit on flat or dark grounds, and Lighthouse reported no contrast failure, but it can't read text over gradients.

## SEO

| Check | Result |
|---|---|
| Titles, descriptions | Unique across 14 pages |
| Open Graph, canonical | Present. Russian canonicalises to English |
| `h1` | One per page, with no skipped heading levels |
| Duplicate IDs, bracketed placeholders | None |
| hreflang | None until Russian is approved |
| Robots | `noindex`, set by the pages until the claims register is cleared |
| Structured data | None |

## Lighthouse

One mobile run per page, simulated throttling, local production build. **Indicative only.**

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT | Weight |
|---|---|---|---|---|---|---|---|---|
| `/industries` | 92 | 100 | 100 | 66 | 3.4 s | 0 | 10 ms | 394 KiB |
| `/industries/fintech` | 92 | 100 | 100 | 66 | 3.4 s | 0 | 10 ms | 387 KiB |
| `/industries/healthcare` | 90 | 100 | 100 | 66 | 3.6 s | 0 | 10 ms | 425 KiB |
| `/ru/industries/logistics` | 90 | 100 | 100 | 66 | 3.6 s | 0 | 10 ms | 442 KiB |

SEO is 66 because of the deliberate `noindex`. **LCP remains above the 2.5 s target**, at the level of the other sections, and remains for SF-154. Only the shared `Tabs` selection is client code here. Other pages were not re-measured.

## Evidence

- [Overview at 1440](evidence/sf-147/overview-1440.jpg): source, English, Russian.
- [All six detail pages at 1440](evidence/sf-147/details-1440.jpg).
- [Mobile](evidence/sf-147/mobile-390.jpg): source and build for the overview and Healthcare, then Russian at 390 and 320.
- [Tablet](evidence/sf-147/tablet.jpg).

## Open

- Published-canvas comparison.
- Safari, Firefox, physical devices and a screen-reader pass.
- Native Russian review.
- Founder decisions in the [claims register](../content/industries-claims-register.md).
