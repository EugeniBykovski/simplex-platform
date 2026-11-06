# Industries artboard matrix

Inventory for SF-147, from the structured artifact, design version `1793953114-553b`. Claude Design was not modified. Earlier tickets read `1793869596-167d`. All source files used here are byte-identical in both versions, including `simplex.css`, `Nav` and `Footer`.

## What the design contains

**Eleven boards, two source compositions and seven routes.**

**The six detail pages are one composition.** `ind-*.dc.html` and the two mobile boards each import `IndustryPage` with a `slug` prop. The layout, section order and section structure are the same for every slug, and the differences are the data below. The ticket expects distinct compositions per industry, and warns against one generic component, but also says the artboards decide. No art-directed layouts exist in the design, so none were invented. If you want them, they need designing first.

| Composition | Boards | Device coverage |
|---|---|---|
| `Industries` | 3 | Desktop and mobile. No tablet board |
| `IndustryPage` | 8 | Desktop for all six slugs. **Mobile only for `healthcare`.** No tablet board |

## Every board

| Artboard | Device | Frame | Crop offset | Slug | Route |
|---|---|---|---|---|---|
| `Industries.dc.html` | Desktop | 1440 × 5052 | 0 | | `/industries` |
| `IndustriesMobile.dc.html` | Mobile, part 1/2 | 390 × 6857 | 0 | | `/industries` |
| `IndustriesMobile-p2.dc.html` | Mobile, part 2/2 | 390 × 1356 | 6857 | | `/industries` |
| `IndustryPage.dc.html` | Desktop | 1440 × 7926 | 0 | `fintech` (default) | `/industries/fintech` |
| `ind-healthcare.dc.html` | Desktop | 1440 × 7895 | 0 | `healthcare` | `/industries/healthcare` |
| `ind-ecommerce.dc.html` | Desktop | 1440 × 7700 | 0 | `ecommerce` | `/industries/ecommerce` |
| `ind-saas.dc.html` | Desktop | 1440 × 7674 | 0 | `saas` | `/industries/saas` |
| `ind-enterprise.dc.html` | Desktop | 1440 × 7817 | 0 | `enterprise` | `/industries/enterprise` |
| `ind-logistics.dc.html` | Desktop | 1440 × 7840 | 0 | `logistics` | `/industries/logistics` |
| `IndustryPageMobile.dc.html` | Mobile, part 1/2 | 390 × 6261 | 0 | `healthcare` | `/industries/healthcare` |
| `IndustryPageMobile-p2.dc.html` | Mobile, part 2/2 | 390 × 5181 | 6261 | `healthcare` | `/industries/healthcare` |

**Missing:** tablet for all routes, and mobile for five slugs. Those follow the source's container rules, compared against the same source rendered at the same width.

## Route, section, source, component and status

All are **implemented**. The source is the named section's markup and the `D[slug]` data in `IndustryPage.dc.html`.

### `/industries`, from `Industries`, `IndustriesMobile`, `IndustriesMobile-p2`

| # | Section | Ground | Source content | Component |
|---|---|---|---|---|
| 1 | Hero and six rows | `bg-ink` | H1, lead, `inds` | `IndustriesHero`, `IndustryRow` |
| 2 | Across every sector | `bg-mist` | Four cards | `IndustriesConstants` |
| 3 | Compliance | `photo-trading` | Eight tiles | `IndustriesCompliance`, `ComplianceGrid` |
| 4 | CTA | `bg-cta` | "Don't see your industry?" | `IndustriesCta` |

### `/industries/[slug]`, from `IndustryPage`, `ind-*`, `IndustryPageMobile*`

| # | Section | Anchor | Ground | Source content | Component |
|---|---|---|---|---|---|
| 1 | Hero | | `viz-[slug]` | `headline`, `lead`, `facts` | `IndustryHero` |
| 2 | Market challenges | | white | `chIntro`, `challenges` ×4 | `IndustryChallenges` |
| 3 | Opportunities | | `bg-ink` | `ops` ×3 | `IndustryOpportunities` |
| 4 | Solution scenarios | | `bg-mist` | `scen` ×3, in tabs | `IndustryScenarios`, shared `Tabs` |
| 5 | Engineering considerations | | white | `cons` ×6 | `IndustryConsiderations` |
| 6 | Capabilities and project | `#projects` | `bg-mist` | `caps` ×4, `projects` ×1 | `IndustryCapabilities` |
| 7 | Compliance | | `photo-trading` | `gx()` tiles ×4 | `IndustryCompliance`, `ComplianceGrid` |
| 8 | CTA | | `bg-cta` | `cta` | `IndustryCta` |

## What differs per industry

| Slug | Icon | Gradient | Headline | Services | Project |
|---|---|---|---|---|---|
| `fintech` | `fintech` | `viz-fintech` | Software where every number has to be right. | Custom, Cloud, AI, Quality | Ledgerline |
| `healthcare` | `health` | `viz-healthcare` | Technology that earns clinicians' trust. | Design, Mobile, Web, AI | Carepath |
| `ecommerce` | `commerce` | `viz-ecommerce` | Commerce that stays fast when it matters most. | Web, Cloud, Design, Quality | Routewise |
| `saas` | `saas` | `viz-saas` | Products built to grow without growing pains. | Architecture, Cloud, Custom, AI | Ledgerline |
| `enterprise` | `building` | `viz-enterprise` | Change at scale, without breaking what works. | Enterprise, Legacy, Architecture, Cloud | Routewise |
| `logistics` | `logistics` | `viz-logistics` | Real-time operations, made visible. | Mobile, Custom, Cloud, AI | Routewise |

Also unique per slug: all facts, challenges, opportunities, scenarios, considerations, compliance tiles and the CTA headline.

Structure lives in `src/content/industries/catalog.ts`, and words in `en/<slug>.ts` and `ru/<slug>.ts`.

## Illustrations and assets

| Asset | Source | Used for |
|---|---|---|
| `.viz-*` gradients, `.slice` | `simplex.css` | Hero and overview rows, project cards |
| `bg-trading.jpg`, through `.photo-trading` | Design asset, already in `public/images/design/` | Compliance grounds |
| Icons | Existing design set | Rows, heroes, capability cards |

**The design has no technical diagrams or device mock-ups in this section.** Its visuals are these gradients, so nothing was drawn or sourced, and no asset is missing.

## Responsive rules

| Rule | Source | Build |
|---|---|---|
| Row: 5 columns, then 4 at ≤ 1100, 2 at ≤ 760, gradient hidden | Board `<style>` | `sx-1100`, new `sx-760` |
| Grids, split, panels | `simplex.css` | Same classes |
| Row hover: tint, 16 px indent, gradient scale | Board `<style>` | `hover:`, `group-hover:` |
| Scenario tabs | Scroll sideways when too wide | Same, with arrow keys, Home and End |

## Geometry

Against the source's static render, at the same widths, with `reducedMotion`. English.

| Route | 1440: all sections | 1440 page | 390 sections | 390 page (build / source) |
|---|---|---|---|---|
| `/industries` | 0 | 5051 / 5051 | 0, 0, −18, 0 | 8142 / 8212 |
| `fintech` | 0 | 7925 / 7925 | 0, 0, −27, +26, +26, 0, +27, 0 | 11554 / 11553 |
| `healthcare` | 0 | 7840 / 7840 | 0, 0, −27, 0, +26, 0, +27, 0 | 11351 / 11377 |
| `ecommerce` | 0 | 7678 / 7678 | 0, 0, 0, 0, −22, 0, +27, 0 | 11257 / 11303 |
| `saas` | 0 | 7674 / 7674 | 0, 0, −27, 0, +47, 0, +27, 0 | 11198 / 11202 |
| `enterprise` | 0 | 7817 / 7817 | 0, 0, −27, 0, +48, 0, +27, 0 | 11151 / 11155 |
| `logistics` | 0 | 7761 / 7761 | 0, 0, −27, 0, +26, 0, +27, 0 | 11163 / 11188 |

**At 1440, every section of all seven routes has the same height as the source.** At 390 the differences come from copy: the opportunities lead is a line shorter (−27), the considerations lead and some reworded items are longer (+26 to +48), and the compliance note and lead run a line longer (+27).

The source's own render is up to 79 px shorter than some stored frame sizes (logistics 7761 against a 7840 frame, healthcare 7840 against 7895). That gap is in the design, and its cause was not established. These figures compare against the source's render, not the stored frames, and the published canvas was not compared.

## Discrepancies

In the [gap register](design-gap-register.md): GAP-C03 (certifications), GAP-D23 (unrelated projects), GAP-D24 (hero legibility), GAP-D25 (one composition).
