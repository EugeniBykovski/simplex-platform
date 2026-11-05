# SimpleX Agent artboard matrix

Inventory for SF-144, from the structured artifact, design version `1793869596-167d`. Claude Design was not modified.

## Artboards

The page has one source composition and four boards. The other three boards are crops of `Agent`, so all content comes from one file. **No tablet board exists.**

| Artboard | Device | Frame | Crop offset | Holds |
|---|---|---|---|---|
| `Agent.dc.html` | Desktop, part 1/2 | 1440 × 7766 | 0 | Hero through ROI estimator, plus the source itself |
| `Agent-p2.dc.html` | Desktop, part 2/2 | 1440 × 1302 | −7766 | Final CTA and Footer |
| `AgentMobile.dc.html` | Mobile, part 1/2 | 390 × 6615 | 0 | Hero into the start of Embed |
| `AgentMobile-p2.dc.html` | Mobile, part 2/2 | 390 × 7657 | −6615 | Rest of Embed through Footer |

The composition's declared heights are 9068 (desktop) and 14272 (mobile). A static render of the source measures 9067 and 14218.

## Sections, in source order

Heights come from a static render of the source, styled only by the original `simplex.css`, at each board's width. "Built" is the difference on `/agent` in English. All differences come from deliberate copy or layout changes, listed below.

| # | Section | Ground | y, h at 1440 | Built Δh | y, h at 390 | Built Δh | Component |
|---|---|---|---|---|---|---|---|
| 1 | Hero | `bg-ink` + 3 orbs | 14, 1102 | 0 | 10, 1667 | −109 | `agent-hero` |
| 2 | Stack picker | `bg-mist` + 2 orbs | 1116, 959 | +37 | 1677, 1706 | +82 | `agent-stack` |
| 3 | How it works | `bg-ink` | 2075, 910 | 0 | 3383, 1773 | +27 | `agent-how` |
| 4 | Capabilities | `bg-mist` + 2 orbs | 2985, 989 | 0 | 5156, 1432 | +27 | `agent-capabilities` |
| 5 | Embed | White | 3974, 865 | 0 | 6588, 1388 | +119 | `agent-embed` |
| 6 | Deployment models | `bg-ink` | 4839, 1114 | +26 | 7976, 2077 | +75 | `agent-deployment` |
| 7 | FAQ | White | 5953, 723 | 0 | 10053, 762 | 0 | `agent-faq` |
| 8 | ROI estimator | `paper` | 6676, 1090 | 0 | 10814, 1439 | +38 | `agent-roi`, `agent-roi-panel` |
| 9 | Final CTA | `bg-cta dark` | 7766, 439 | +25 | 12253, 609 | +54 | `agent-cta` |
| — | Footer | Shared | 8205, 862 | See below | 12862, 1356 | See below | `SiteFooter` |

Why heights differ:

- **Hero at 390:** the two floating widgets are hidden, which removes the board's 560 px minimum (GAP-D15).
- **Stack picker:** an added note saying these are examples, not live integrations.
- **Other sections:** the truthful copy is a little longer. See [agent-claims-register.md](../content/agent-claims-register.md).
- **Footer:** unfilled placeholders are omitted (GAP-C08), and the language switch moved to the header at the owner's request.

## Specification

| Item | Source | Built |
|---|---|---|
| Hero padding | `210px 0 140px` | `p-[210px_0_140px]` |
| Hero grid | `.ag-hero`: 5fr / 7fr, gap 56, one column ≤ 1100 | Tailwind on the element |
| Hero headline | `.t-h1` at `clamp(40px, 4.6cqi, 68px)`, line masks | Same size. **No reveal animation** (see Motion) |
| Agent window | `.widget-dark.agent-shell`, max 540, right-aligned | Same, in a named `figure` |
| Floating widgets | 160 × 170 at left, top 10 and bottom 20 | Same, hidden ≤ 860 (GAP-D15) |
| Blueprint grid | `.bp`: 4 columns, 2 ≤ 1100, 1 ≤ 600, gap 12 | Tailwind on the element |
| Blueprint panel | `.glass`, padding `clamp(20px, 3cqi, 36px)`, radius 32 | Same |
| Step cards | `.widget-dark`, padding 26, min height 300 | Same |
| Capability wall | `.grid-4.widget-grid`, gap 16, min height 220 | Same |
| Embed visual | `.viz-light`, min height 560, padding 32 | Same, side panel stacks ≤ 600 |
| Model cards | `.glass-dark.model-card`, second card `.is-featured` | Same |
| Governance strip | `.glass-dark`, padding 28, radius 26, auto-fit from 240 | Same |
| CTA padding | `140px 0` | `p-[140px_0]` |

Type, tokens and shared rules come from `simplex.css` and `tokens.css`, unchanged. The page adds no global CSS. **Asset:** `bg-office.jpg`, already in `public/images/design/`, through `.viz-light`. Everything else is real text, CSS gradients or the existing icon set.

## Interactions

| Source | Built |
|---|---|
| Stack tabs, 5 stacks | Shared `Tabs`, with arrow keys, Home and End. Panels render on the server, so only selection logic is client code |
| FAQ, first item open | Shared `Accordion`, native `details`, works with no JavaScript |
| ROI estimator, 3 sliders | `agent-roi-panel`, the same formula. The bar is an SVG `rect`, because a runtime width cannot use an inline style |
| Card and button hover | The design's CSS |

## Motion

| Effect | Behaviour |
|---|---|
| Hero line masks | **Removed.** The headline paints at once, so LCP does not wait for a 1.1 s reveal. Its final position is unchanged |
| Widget drift, pulse, spinner | CSS, off under `prefers-reduced-motion`. Checked: 0 running animations |

## CTAs

| Label | Source target | Built |
|---|---|---|
| Breadcrumb "Home" | Home | Live |
| "How it works" | `#how` | Live, lands 90 px below the top, clear of the header |
| "Ask about the agent" (hero, CTA) | Contact | Disabled until SF-151 |
| "Discuss an embedded agent" | Contact | Disabled until SF-151 |
| "Ask about a pilot" | Contact | Disabled until SF-151 |
| "AI engineering" | `svc-ai-engineering` | Disabled until SF-145 |

These turn on without code changes once the routes join `implementedRoutes`. Nothing is a dead link or `href="#"`, and no form or booking flow is simulated.

## Responsive behaviour

The mobile layout follows the 390 boards. **Tablet has no board**, so it is derived from the source's own container rules and is not a claim about an approved tablet design.

| Width | Change | Source |
|---|---|---|
| ≤ 1100 | Hero stacks, blueprint 2 columns, capability wall 2 columns, header collapses to burger | Source rules |
| ≤ 860 | Floating widgets hidden, hero minimum height removed | Adaptation, GAP-D15 |
| ≤ 600 | Blueprint 1 column, repository name hidden in the agent window, embed side panel stacks | Source rule, then adaptations for readability |

No horizontal overflow at 320, 360, 375, 390, 412, 430, 768, 820, 1024, 1280, 1366, 1440, 1512, 1728, 1920 or 2560, in English or Russian.
