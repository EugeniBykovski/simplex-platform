# Services artboard matrix

Inventory for SF-145, from the structured artifact, design version `1793869596-167d`. Claude Design was not modified.

## What the design contains

**30 boards, two source compositions and 13 routes.** The other boards are crops or slug instances of `Services` and `ServicePage`.

The ticket's candidate names, such as "Custom Software Engineering", "Web Applications", "Integrations" and "Support and Evolution", are **not in the design**. The routes below come from its `slug` enum and were not invented.

| Composition | Boards | Device coverage |
|---|---|---|
| `Services` | 4 | Desktop and mobile. No tablet board |
| `ServicePage` | 26 | Desktop for all 12 slugs. **Mobile only for `ai-engineering`.** No tablet board |

## Every board

| Artboard | Device | Frame | Crop offset | Route |
|---|---|---|---|---|
| `Services.dc.html` | Desktop, part 1/2 | 1440 × 7230 | 0 | `/services` |
| `Services-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7230 | `/services` |
| `ServicesMobile.dc.html` | Mobile, part 1/2 | 390 × 7479 | 0 | `/services` |
| `ServicesMobile-p2.dc.html` | Mobile, part 2/2 | 390 × 4167 | −7479 | `/services` |
| `ServicePage.dc.html` | Desktop, part 1/2 | 1440 × 7592 | 0 | `/services/custom-software-development` |
| `ServicePage-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7592 | `/services/custom-software-development` |
| `svc-enterprise-software.dc.html` | Desktop, part 1/2 | 1440 × 7613 | 0 | `/services/enterprise-software` |
| `svc-enterprise-software-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7613 | `/services/enterprise-software` |
| `svc-web-development.dc.html` | Desktop, part 1/2 | 1440 × 7453 | 0 | `/services/web-development` |
| `svc-web-development-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7453 | `/services/web-development` |
| `svc-mobile-development.dc.html` | Desktop, part 1/2 | 1440 × 7401 | 0 | `/services/mobile-development` |
| `svc-mobile-development-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7401 | `/services/mobile-development` |
| `svc-desktop-development.dc.html` | Desktop, part 1/2 | 1440 × 7513 | 0 | `/services/desktop-development` |
| `svc-desktop-development-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7513 | `/services/desktop-development` |
| `svc-ai-engineering.dc.html` | Desktop, part 1/2 | 1440 × 7455 | 0 | `/services/ai-engineering` |
| `svc-ai-engineering-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7455 | `/services/ai-engineering` |
| `svc-cloud-devops.dc.html` | Desktop, part 1/2 | 1440 × 7488 | 0 | `/services/cloud-devops` |
| `svc-cloud-devops-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7488 | `/services/cloud-devops` |
| `svc-architecture-consulting.dc.html` | Desktop, part 1/2 | 1440 × 7300 | 0 | `/services/architecture-consulting` |
| `svc-architecture-consulting-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7300 | `/services/architecture-consulting` |
| `svc-product-design.dc.html` | Desktop, part 1/2 | 1440 × 7458 | 0 | `/services/product-design` |
| `svc-product-design-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7458 | `/services/product-design` |
| `svc-legacy-modernization.dc.html` | Desktop, part 1/2 | 1440 × 7486 | 0 | `/services/legacy-modernization` |
| `svc-legacy-modernization-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7486 | `/services/legacy-modernization` |
| `svc-quality-engineering.dc.html` | Desktop, part 1/2 | 1440 × 7327 | 0 | `/services/quality-engineering` |
| `svc-quality-engineering-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7327 | `/services/quality-engineering` |
| `svc-dedicated-teams.dc.html` | Desktop, part 1/2 | 1440 × 7360 | 0 | `/services/dedicated-teams` |
| `svc-dedicated-teams-p2.dc.html` | Desktop, part 2/2 | 1440 × 863 | −7360 | `/services/dedicated-teams` |
| `ServicePageMobile.dc.html` | Mobile, part 1/2 | 390 × 7578 | 0 | `/services/ai-engineering` |
| `ServicePageMobile-p2.dc.html` | Mobile, part 2/2 | 390 × 5508 | −7578 | `/services/ai-engineering` |

## Route, design, component, content

| Route | Design | Component | Content | Status |
|---|---|---|---|---|
| `/services` | `Services` | `sections/services/services-overview` | `content/services/{en,ru}/overview.ts` | Built |
| `/services/custom-software-development` | `ServicePage`, slug `custom-software-development` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/custom-software-development.ts`, `shared.ts` | Built |
| `/services/enterprise-software` | `ServicePage`, slug `enterprise-software` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/enterprise-software.ts`, `shared.ts` | Built |
| `/services/web-development` | `ServicePage`, slug `web-development` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/web-development.ts`, `shared.ts` | Built |
| `/services/mobile-development` | `ServicePage`, slug `mobile-development` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/mobile-development.ts`, `shared.ts` | Built |
| `/services/desktop-development` | `ServicePage`, slug `desktop-development` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/desktop-development.ts`, `shared.ts` | Built |
| `/services/ai-engineering` | `ServicePage`, slug `ai-engineering` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/ai-engineering.ts`, `shared.ts` | Built |
| `/services/cloud-devops` | `ServicePage`, slug `cloud-devops` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/cloud-devops.ts`, `shared.ts` | Built |
| `/services/architecture-consulting` | `ServicePage`, slug `architecture-consulting` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/architecture-consulting.ts`, `shared.ts` | Built |
| `/services/product-design` | `ServicePage`, slug `product-design` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/product-design.ts`, `shared.ts` | Built |
| `/services/legacy-modernization` | `ServicePage`, slug `legacy-modernization` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/legacy-modernization.ts`, `shared.ts` | Built |
| `/services/quality-engineering` | `ServicePage`, slug `quality-engineering` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/quality-engineering.ts`, `shared.ts` | Built |
| `/services/dedicated-teams` | `ServicePage`, slug `dedicated-teams` | `sections/services/service-sections`, `service-visuals` | `content/services/{en,ru}/dedicated-teams.ts`, `shared.ts` | Built |

No catch-all route exists. `dynamicParams = false` limits detail pages to these twelve, and any other slug returns a rendered 404.

## Sections

### `/services`

1. Hero, with the "Where are you starting from?" picker
2. Build (6 cards, `bg-mist`, `glass`)
3. Platforms & intelligence (4 cards, `bg-ink`, `glass-dark`)
4. Advise (2 cards, white, `solid`)
5. Extend (2 cards, `bg-mist`, `glass`)
6. Lifecycle matrix (11 rows)
7. Comparison with the usual options
8. Final CTA

### `/services/[slug]`

1. Hero
2. The problem
3. Solution & capabilities (6 cards)
4. Business value (4 cards)
5. How the engagement runs (4 steps)
6. Technologies and use cases (accordion)
7. Often combined with, and related case studies
8. First 30 days, and the discovery sprint panel
9. Final CTA

## What varies by slug

**The design has one detail template, not twelve compositions.** Every slug has the same nine sections, so a shared template is the faithful build, and the variation below is data in `content/services/catalog.ts`. Ground, panel and main button follow from the theme.

| Slug | Index | Theme | Visual | Hero illustration |
|---|---|---|---|---|
| `custom-software-development` | S01 | Light | `code` | Code editor and KPI tiles |
| `enterprise-software` | S02 | Dark | `arch` | Layered architecture |
| `web-development` | S03 | Light | `device` | Browser and phone |
| `mobile-development` | S04 | Dark | `device` | Browser and phone |
| `desktop-development` | S12 | Dark | `desktop` | Desktop window |
| `ai-engineering` | S05 | Light | `graph` | Evaluation run |
| `cloud-devops` | S06 | Dark | `pipeline` | Delivery pipeline |
| `architecture-consulting` | S07 | Light | `arch` | Layered architecture |
| `product-design` | S08 | Dark | `device` | Browser and phone |
| `legacy-modernization` | S09 | Light | `arch` | Layered architecture |
| `quality-engineering` | S10 | Dark | `pipeline` | Delivery pipeline |
| `dedicated-teams` | S11 | Light | `team` | Team roles |

## Geometry

Against a static render of each source, with only the first accordion open as on the live board. Heights in px. All 8 or 9 sections were compared, and section differences at 1440 are shown as the largest.

| Route | Source 1440 | Built 1440 | Largest section Δ | Source 390 | Built 390 |
|---|---|---|---|---|---|
| `/services` | 8093 | 8093 | 0 | 11612 | 11587 |
| `custom-software-development` | 8455 | 8455 | 0 | 13179 | 13186 |
| `enterprise-software` | 8476 | 8476 | 0 | 13111 | 13127 |
| `web-development` | 8315 | 8315 | 0 | 13079 | 13094 |
| `mobile-development` | 8264 | 8264 | 0 | 13033 | 13048 |
| `desktop-development` | 8376 | 8376 | 0 | 13093 | 13108 |
| `ai-engineering` | 8318 | 8318 | 0 | 13032 | 13047 |
| `cloud-devops` | 8350 | 8350 | 0 | 12950 | 12966 |
| `architecture-consulting` | 8163 | 8163 | 0 | 13083 | 13099 |
| `product-design` | 8296 | 8296 | 0 | 12923 | 12938 |
| `legacy-modernization` | 8291 | 8291 | 0 | 13036 | 13003 |
| `quality-engineering` | 8165 | 8165 | 0 | 12813 | 12829 |
| `dedicated-teams` | 8223 | 8223 | 0 | 13533 | 13549 |

At 390:

- **+40 on the hero:** the in-flow "Illustrative" tag (GAP-D18).
- **+27 on First 30 days:** the longer truthful lead.
- **+26 on the overview comparison:** table copy.
- **−48 on `legacy-modernization`:** the `[Legacy platforms — confirm]` chip is gone.

The page totals also differ because unfilled footer placeholders are omitted (GAP-C08).

## Interactions

| Source | Built |
|---|---|
| Service, related and picker cards | `RouteLink`, live where the route exists |
| Use-case accordion, first item open | Shared `Accordion`, native `details` |
| Matrix and comparison scroll on small screens | Keyboard-focusable scroll regions |
| Card and button hover | The design's CSS |
| Hero line masks | **Removed**, as on `/agent`, so the headline paints at once |
| `.reveal` on cards, process rail | The design's CSS, off under reduced motion |

No page in this section adds client JavaScript of its own.

## CTAs

| Label | Target | State |
|---|---|---|
| Service and related cards, picker, matrix rows, breadcrumbs | `/services/*`, `/` | Live |
| "Related work" | `#cases` | Live |
| "Discuss your project", "Ask about discovery", "Let's Talk" | `/contact` | Disabled until SF-151 |
| "How we work", "Our full delivery approach" | `/how-we-work` | Disabled until its ticket |
| "Technology directory" | `/technologies` | Disabled until its ticket |
| Full-cycle Build Packages, Mobile Pod | `/packages` | Disabled until SF-146 |
| Related case studies | `/work/*` | Disabled until SF-148 |

## Responsive behaviour

Mobile for the eleven unboarded slugs and all tablet behaviour are **derived**, from the same source and its container rules. They are not a claim about approved boards.

| Width | Change | Source |
|---|---|---|
| ≤ 1100 | `.split` and `.split-wide` stack, sticky columns release, header collapses | Source rules |
| ≤ 1000 | Discovery panel stacks | Source rule keyed to its inline style, restated as `sx-1000:` |
| ≤ 860 | Comparison columns narrow, with a 640 px minimum | Source rule keyed to its inline style, restated as `sx-860:` |
| ≤ 600 | Grids stack, process runs vertically, phone mock-up hides | Source rules |
| ≤ 600 | KPI tiles on the code mock-up tighten | Adaptation, for overflow at 320 |
| All | Long code strings and Russian words wrap | Adaptation |

## Assets

No new assets. `bg-meeting.jpg`, `bg-office.jpg`, `bg-tower.jpg`, `bg-trading.jpg` and `bg-server.jpg` already ship through the design's `.photo-*` and `.viz-*` classes. The illustrations are real elements and CSS.

## Source discrepancies

- The lifecycle matrix lists 11 services: **Desktop Applications is missing** (GAP-D19). Built as drawn.
- Desktop is numbered S12 but ordered fifth in the source. Kept.
- Two "Mobile" items exist on the overview, one for the service and one for the pod. Kept.
