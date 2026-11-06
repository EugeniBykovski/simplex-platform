# Work artboard matrix

Inventory for SF-148, from the structured artifact, design version `1793953114-553b`. Claude Design was not modified.

## What the design contains

**Nine boards, two source compositions and four routes.** `CasePage` holds three distinct layouts, chosen by slug, so unlike Industries each case has its own composition. The source has no lightbox or image gallery, so none was added. Its "Product interface" block and device mock-ups are static.

| Composition | Boards | Device coverage |
|---|---|---|
| `Work` | 4 | Desktop, tablet and mobile: the only tablet board in this section |
| `CasePage` | 5 | Desktop for all three. **Mobile only for Ledgerline.** No tablet board |

## Every board

| Artboard | Device | Frame | Crop offset | Slug | Route |
|---|---|---|---|---|---|
| `Work.dc.html` | Desktop | 1440 × 4795 | 0 | | `/work` |
| `WorkTablet.dc.html` | Tablet | 768 × 6192 | 0 | | `/work` |
| `WorkMobile.dc.html` | Mobile, part 1/2 | 390 × 7322 | 0 | | `/work` |
| `WorkMobile-p2.dc.html` | Mobile, part 2/2 | 390 × 1356 | 7322 | | `/work` |
| `CasePage.dc.html` | Desktop, Layout A | 1440 × 7764 | 0 | `ledgerline` | `/work/ledgerline` |
| `case-carepath.dc.html` | Desktop, Layout B | 1440 × 6635 | 0 | `carepath` | `/work/carepath` |
| `case-routewise.dc.html` | Desktop, Layout C | 1440 × 6838 | 0 | `routewise` | `/work/routewise` |
| `CasePageMobile.dc.html` | Mobile, part 1/2 | 390 × 7991 | 0 | `ledgerline` | `/work/ledgerline` |
| `CasePageMobile-p2.dc.html` | Mobile, part 2/2 | 390 × 3297 | 7991 | `ledgerline` | `/work/ledgerline` |

Northbeam, Atlas Commerce and Meridian Works are cards with no case page in the design, so `/work/northbeam` and the others return 404.

## Route, section, asset, component and status

### `/work`

| # | Section | Asset | Component | Status |
|---|---|---|---|---|
| 1 | Hero and notice | `bg-horizon` | `WorkHero`, `Alert` | Implemented |
| 2 | Featured project | `viz-fintech`, drawn mock-up | `WorkFeatured` | Implemented |
| 3 | All projects: filters and six cards | `viz-*` | `WorkProjects`, client `WorkGrid` | Implemented |
| | Empty state | | `WorkGrid` | Implemented |
| 4 | Reference calls | `photo-meeting` | | **Withheld** (GAP-C02) |
| 5 | CTA | `bg-cta` | `WorkCta` | Implemented |

### `/work/ledgerline`: Layout A, editorial long-form

| # | Section | Asset | Component | Status |
|---|---|---|---|---|
| 1 | Hero, facts, two mock-ups | `viz-fintech`, drawn | `CaseLayoutA`, `CaseMockCard` | Implemented |
| 2 | Overview, context, challenges, approach, solution | | `CaseLayoutA` | Implemented |
| 3 | Architecture | Drawn | `ArchLayers` | Implemented |
| 4 | Outcomes | | `CaseLayoutA` | **Numbers removed** |
| 5–7 | Shift, next project, CTA | | `CaseShift`, `CaseNext`, `CaseCta` | Implemented, reworded |

### `/work/carepath`: Layout B, sticky sidebar

| # | Section | Asset | Component | Status |
|---|---|---|---|---|
| 1 | Hero, intake form and queue mock-ups | `bg-horizon`, drawn | `CaseLayoutB` | Implemented |
| 2 | Sidebar (facts, contents, CTA) and body, with interface and outcomes | `viz-healthcare`, drawn | `CaseLayoutB` | Implemented, **numbers removed** |
| 3–5 | Shift, next project, CTA | | `CaseShift`, `CaseNext`, `CaseCta` | Implemented, reworded |

### `/work/routewise`: Layout C, visual-first bands

| # | Section | Asset | Component | Status |
|---|---|---|---|---|
| 1 | Hero: dispatch console and map | `viz-logistics`, inline SVG | `CaseLayoutC`, `DispatchMap` | Implemented |
| 2 | Facts and three bands, with solver panel and driver app | `viz-light`, `viz-logistics` | `CaseLayoutC` | Implemented, **benchmark emptied** |
| 3 | Architecture | Drawn | `ArchLayers` | Implemented |
| 4 | Outcomes | `bg-spectrum` | `CaseLayoutC` | **Numbers removed** |
| 5–7 | Shift, next project, CTA | | `CaseShift`, `CaseNext`, `CaseCta` | Implemented, reworded |

Related projects are the design's next-project links: Ledgerline → Carepath → Routewise → Ledgerline. All are implemented routes.

Attribution and every changed claim: [portfolio-attribution-register.md](../content/portfolio-attribution-register.md).

## Interactions

| Element | Source | Build |
|---|---|---|
| Industry and service filters | State, `aria-pressed`, live count | `WorkGrid`. Cards arrive server-rendered. Russian gets three plural forms |
| Drag to compare | Range input | `BeforeAfter`, with a visible focus ring the source lacks |
| Contents links in Layout B | Anchors | Same, clear of the header |
| Row hover | `card-hover` | Same, but only on cards with a link (GAP-D28) |

## Geometry

Against the source's static render, at the same widths, with `reducedMotion`. English. The overview's source figure excludes nothing, but its section comparison leaves out the withheld block.

| Route | 1440 sections | 1440 page (build / source) | 768 sections | 390 sections | 390 page (build / source) |
|---|---|---|---|---|---|
| `/work` | 0, 0, 0, 0 | 4083 / 4795 | 0, 0, −25, −27 | −22, +34, −75, −27 | 7462 / 8677 |
| `ledgerline` | 0, +33, 0, 0, 0, 0, 0 | 7797 / 7764 | 0, +27, 0, 0, 0, 0, 0 | −38, 0, 0, 0, +25, 0, 0 | 11194 / 11259 |
| `carepath` | 0, −21, 0, 0, 0 | 6612 / 6634 | 0, +13, 0, 0, 0 | 0, +4, +25, 0, 0 | 10599 / 10622 |
| `routewise` | 0, +263, 0, 0, 0, 0, 0 | 7101 / 6838 | 0, +263, 0, +42, 0, 0, 0 | 0, +240, 0, +39, +25, 0, 0 | 10493 / 10240 |

- **`/work` page height:** the reference block is withheld (712 px at 1440).
- **Routewise +263:** the source's `gap-10` class does not exist, so its bands touch. They now have the 96 px of `gap-9` (GAP-D27).
- **Other differences:** reworded copy.

## Discrepancies

In the [gap register](design-gap-register.md): GAP-C02, GAP-D26 to GAP-D29.
