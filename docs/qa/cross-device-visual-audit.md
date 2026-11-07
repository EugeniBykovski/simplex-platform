# Cross-device visual audit

For SF-155, against design version `1793953114-553b`, the latest. Claude Design was not modified.

## Method

| Item | State |
|---|---|
| References | 38 renders made from the design's own `.dc.html` sources and `simplex.css`, never from this implementation |
| Reference limit | Static renders resolve each board's starting state. One known artefact: `<details open="">` renders every accordion open, though the source opens only the first. Animations are not run |
| Implementation | Production build, `next start`, reduced motion, sections scrolled through so lazy content renders |
| Engines | Chromium 156. Playwright WebKit 27.2 and Firefox 157. iOS Simulator Safari, iPhone 16 |
| Not available | **Physical iPhone, Android device, desktop Safari driven by automation, screen readers** |

**This is a structured comparison against source renders, not a published-canvas comparison, and no pixel-perfect claim is made.** Text rasterisation differs between engines and is not held to pixel tolerance.

## Coverage

| Check | Views | Result |
|---|---|---|
| Overflow, clipping, errors, failed resources: every page at 16 widths | 1,200, Chromium | Fixed defects below. Remaining flags are false positives |
| Same, after fixes, at 6 widths | 450, Chromium | Only false positives |
| WebKit and Firefox at 320, 390, 820, 1440, 1920 | 750 | Same Russian defects, now fixed. Firefox flags at 320 came from measuring off-screen sections before they render, and the cards render correctly. See [visual gap register](visual-gap-register.md) |
| Geometry against source renders: 38 routes at 1440, 1512, 1920, 820, 390 | 190 | Table below |
| Side-by-side review by eye | 1920: Home, Agent, Packages, Dedicated Teams, Routewise, FinTech. 820: Agent, About, Packages, Contact. 390: 8 Russian pages | No unrecorded difference |
| iOS Simulator Safari | Home, Web Development, Contact, Russian Home, Terms | Renders correctly. Header clears the Dynamic Island |
| Pixel diff of English pages against SF-154 after fixes | 52 views | Identical. Only Russian Home at 390 changed, from the hyphenation fix |

Earlier tickets compared each page at 1440, 768 and 390 in detail. Those records are in the per-page QA files and still apply.

## Geometry

The `main` element's height in px, build minus source render. Every page's `h1` matched the source in size, weight and line height at every width. Content width matched at 1440. Footers differ by 97–248 px at 820 and 390, because the placeholder Connect column and email are withheld (GAP-C08).

| Route | 1440 | 1512 | 1920 | 820 | 390 | Explanation |
|---|---|---|---|---|---|---|
| `/about` | -1585 | -1587 | -1587 | -2189 | -3161 | Withheld team and proof sections (company register) |
| `/agent` | 87 | 81 | 81 | -65 | 314 | Copy rewritten to remove unverified capability claims |
| `/careers` | -1480 | -1483 | -1483 | -2369 | -3350 | Benefits withheld, no live roles |
| `/contact` | 11 | 11 | 11 | -266 | -246 | Scheduler panel replaces fake calendar, email block withheld |
| `/contact/thank-you` | -69 | -70 | -70 | -188 | -309 | Neutral state, no confirmation claim |
| `/cookie-policy` | -894 | -894 | -894 | -917 | -965 | Not yet published state |
| `/` | -165 | -165 | -165 | -175 | -69 | Sample insight cards no longer link, small copy changes |
| `/how-we-work` | -26 | -26 | -26 | 0 | -17 | Copy changes |
| `/industries` | 0 | 0 | 0 | 0 | -19 | Matches |
| `/industries/ecommerce` | 0 | 0 | 0 | -54 | 6 | Matches at desktop. Small mobile differences from copy |
| `/industries/enterprise` | 0 | 0 | 0 | -32 | 47 | Matches at desktop. Small mobile differences from copy |
| `/industries/fintech` | 0 | 0 | 0 | -54 | 52 | Matches at desktop. Small mobile differences from copy |
| `/industries/healthcare` | 0 | 0 | 0 | -54 | 26 | Matches at desktop. Small mobile differences from copy |
| `/industries/logistics` | 0 | 0 | 0 | -54 | 26 | Matches at desktop. Small mobile differences from copy |
| `/industries/saas` | 0 | 0 | 0 | -33 | 48 | Matches at desktop. Small mobile differences from copy |
| `/insights` | -2208 | -2221 | -2221 | -3071 | -4934 | No articles: empty state |
| `404` | 0 | 0 | 0 | 0 | 0 | Matches |
| `/packages` | -1 | -1 | -1 | 93 | 44 | Matches within a few px |
| `/privacy-policy` | -1343 | -1343 | -1343 | -1399 | -1808 | Not yet published state |
| `/services` | 0 | 0 | 0 | 0 | 26 | Matches |
| `/services/ai-engineering` | -65 | -64 | -64 | -12 | 18 | Matches within 65 px |
| `/services/architecture-consulting` | -11 | -10 | -10 | 28 | 2 | Matches within 65 px |
| `/services/cloud-devops` | -10 | -10 | -10 | 54 | 47 | Matches within 65 px |
| `/services/custom-software-development` | -65 | -65 | -65 | -12 | -16 | Matches within 65 px |
| `/services/dedicated-teams` | -138 | -137 | -138 | -45 | -97 | Reference renders every use-case accordion open; the source opens only the first. Build is correct |
| `/services/desktop-development` | -110 | -111 | -111 | -66 | -98 | Reference renders every use-case accordion open; the source opens only the first. Build is correct |
| `/services/enterprise-software` | -38 | -38 | -38 | 31 | 2 | Matches within 65 px |
| `/services/legacy-modernization` | -10 | -10 | -10 | 29 | -46 | Matches within 65 px |
| `/services/mobile-development` | -10 | -11 | -11 | 56 | 2 | Matches within 65 px |
| `/services/product-design` | -10 | -10 | -10 | 56 | 2 | Matches within 65 px |
| `/services/quality-engineering` | -11 | -11 | -11 | 55 | 2 | Matches within 65 px |
| `/services/web-development` | -10 | -10 | -10 | 55 | 2 | Matches within 65 px |
| `/technologies` | 0 | 0 | 0 | 0 | 24 | Matches |
| `/terms` | -1075 | -1075 | -1075 | -1142 | -1488 | Not yet published state |
| `/work` | -712 | -801 | -801 | -915 | -1164 | Concept cards without write-ups, fewer filters |
| `/work/carepath` | -22 | -22 | -21 | -27 | 28 | GAP-V02: no mobile board |
| `/work/ledgerline` | 33 | 33 | 33 | -78 | -14 | Withheld outcome numbers |
| `/work/routewise` | 264 | 263 | 263 | 261 | 305 | GAP-D27: the source's nonexistent gap-10 uses gap-9 |

Deliberate differences are recorded, with their reasons, in the per-page matrices under [`docs/design/`](../design/design-gap-register.md) and the content registers.

## Status by route

Desktop, tablet and mobile are reviewed. Tablet is CSS-derived where the design has no board.

| Route | Boards | Desktop | Tablet | Mobile | Functional | Accessibility | Remaining |
|---|---|---|---|---|---|---|---|
| `/` | Home, Tablet, Mobile, Menu | Verified | Verified | Verified | Verified | Verified | Recorded copy changes |
| `/agent` | Agent, Mobile | Verified | CSS-derived | Verified | Verified | Verified | Copy rewritten |
| `/services`, 12 service pages | Services, ServicePage, 12 slug boards | Verified | CSS-derived | Verified, one mobile board | Verified | Verified | Relevant industries row (GAP-D41) |
| `/packages` | Packages, Mobile | Verified | CSS-derived | Verified | Verified | Verified | None material |
| `/industries`, 6 pages | Industries, IndustryPage, slug boards | Verified | CSS-derived | Verified | Verified | Verified | None material |
| `/work`, 3 cases | Work, Tablet, Mobile, CasePage, case boards | Verified | Verified | Verified, CSS-derived for B and C | Verified | Verified | GAP-D27, GAP-V02 |
| `/about`, `/how-we-work`, `/technologies` | Boards with Mobile | Verified | CSS-derived | Verified | Verified | Verified | Withheld proof |
| `/careers` | Careers, Mobile | Verified | CSS-derived | Verified | Verified | Verified | No roles. Job template unreachable |
| `/insights` | Insights, Mobile | Verified | CSS-derived | Verified | Verified | Verified | Empty. Article template unreachable |
| `/contact`, `/contact/thank-you` | Contact, Tablet, Mobile, ThankYou, Mobile | Verified | Verified | Verified | Verified, mock only | Verified | Real delivery blocked |
| Legal, 3 pages | LegalPage, slug boards | Verified, pending state | CSS-derived | Verified | Verified | Verified | Not published |
| 404 | NotFound, Mobile | Verified | CSS-derived | Verified | Verified | Verified | Search omitted (GAP-F05) |

**Unreachable templates:** job pages and articles generate no route, as nothing is approved. They were checked with temporary fixtures in SF-149 and SF-150, and not again here.

Evidence: [1920, sheet A](evidence/sf-155/source-vs-build-1920-a.jpg), [1920, sheet B](evidence/sf-155/source-vs-build-1920-b.jpg), [820](evidence/sf-155/source-vs-build-820.jpg), [iOS Simulator](evidence/sf-155/ios-simulator-safari.jpg).
