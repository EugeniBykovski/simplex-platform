# Legal and system artboard matrix

Inventory for SF-152, from the structured artifact, design version `1793953114-553b`. Claude Design was not modified.

## What the design contains

**Six boards on the canvas's "Legal & system" page, two compositions, four routes.** `LegalPage` is one template with three `slug` values. `LegalMobile`, `legal-cookie-policy` and `legal-terms` only import it. There is no separate error or maintenance board, so none was invented. No tablet board exists.

| Artboard | Canvas title | Device | Frame | Route |
|---|---|---|---|---|
| `LegalPage.dc.html` | `/privacy-policy` | Desktop | 1440 × 3213 | `/privacy-policy` |
| `LegalMobile.dc.html` | `/privacy-policy · Mobile` | Mobile | 390 × 4274 | `/privacy-policy` |
| `legal-cookie-policy.dc.html` | `/cookie-policy` | Desktop | 1440 × 3244 | `/cookie-policy` |
| `legal-terms.dc.html` | `/terms` | Desktop | 1440 × 2902 | `/terms` |
| `NotFound.dc.html` | `/404` | Desktop | 1440 × 1977 | Any unmatched URL |
| `NotFoundMobile.dc.html` | `/404 · Mobile` | Mobile | 390 × 2466 | Any unmatched URL |

## Source composition

| Item | Source | Implementation |
|---|---|---|
| Background | `bg-mist` hero, white reading section | Same |
| Header, footer | Shared | Shared. Footer without "Cookie settings" |
| Hero padding | `210px 0 80px` | Same |
| Title, lead | `t-h1`, `t-lead` at 720 max | Same |
| Chips | Last updated, Version, Download PDF | Effective and last revised, **only when approved**. Status chip in review. No version or PDF (GAP-D39) |
| Notice | `alert-info`, 760 max, `role="note"` | Same, with truthful wording |
| Reading section | `padding-top: 72px` | Same |
| Grid | `260px minmax(0, 760px)`, gap 80. One column at 1000, gap 32 | Same, with `sx-1000` |
| Contents | Sticky at 130. Row of pills at 1000 | Same. Pills raised from 38 to 44 px tall for touch |
| Sections | `.prose`, numbered, `sec-N` anchors | Same, 110 px scroll offset for the sticky header |
| Preference panel | `glass bg-horizon`, radius 24, padding 28 | Same panel, with the real storage list (GAP-D38) |
| Contact | Placeholder email and company | Only in review mode, bracketed |

## Route, state, component and status

Components are in `src/components/sections/legal/legal-page.tsx`. Text is in `src/content/legal/`.

| Route | Public state today | Review mode | Approved state | Status |
|---|---|---|---|---|
| `/privacy-policy` | Hero, "Not yet published", what can be relied on, document links | Full draft, draft notice, contents | Full text, dates, no notice | Implemented. **Not published** |
| `/cookie-policy` | As above, plus the storage panel | Full draft, plus the panel | Full text, plus the panel | Implemented. **Not published** |
| `/terms` | As above | Full draft | Full text | Implemented. **Not published** |
| 404 | `NotFoundView`, `app/global-not-found.tsx` | Same | Same | Implemented, verified |

## 404

The existing view already follows the board: `bg-ink`, 1100 minimum height, `200px 0 120px` padding, the outlined 404 and the mark. The search box stays out, since it has no backend (GAP-F05). Its Contact button is live now that the route exists. **No code change was needed.**

## Footer navigation status

| Link | Target | Status |
|---|---|---|
| Privacy Policy | `/privacy-policy` | Live. Page states it is not yet published |
| Cookie Policy | `/cookie-policy` | Live. Page states the same, and lists real storage |
| Terms | `/terms` | Live. Page states the same |
| Cookie settings | | **Removed**: nothing to set (GAP-D38) |

The mobile menu has no legal links, as on the board. The centred wordmark wasn't touched.

## Tablet

No board. 601–1000 follows the source's rules: one column, contents as pills above the text. At 600 and below the storage rows stack.

## Geometry

Against the source's static render, in English, in review mode, which has the board's structure.

| Route | 1440 page (source / build) | 768 | 390 |
|---|---|---|---|
| `/privacy-policy` | 3212 / 3368 | 3610 / 3546 | 4273 / 4438 |
| `/cookie-policy` | 3244 / 3378 | 3617 / 3593 | 4152 / 4556 |
| `/terms` | **2901 / 2901** | 3316 / 3079 | 3815 / 3701 |
| 404, `main` only | 1100 / 1100 | 1100 / 1100 | 1100 / 1100 |

- **Whole-page differences at 768 and 390** include the footer, which drops its placeholder Connect column and email.
- **Privacy +156:** a corrected list and longer sections, as the design described things the site doesn't do.
- **Cookie +134:** the storage list is taller than the three switches.

The public state is shorter than any board, since it holds no document.

## Discrepancies

In the [gap register](design-gap-register.md): GAP-C08, GAP-C09, GAP-F03, GAP-F05, GAP-I02, GAP-D38 to GAP-D40.
