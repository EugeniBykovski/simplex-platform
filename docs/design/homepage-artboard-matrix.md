# Homepage artboard matrix

Source: `project/Home.dc.html`, design version `1793869596-167d`. **Fourteen boards, one composition.** Tablet and mobile boards render the same source narrower, and the stylesheet's container queries change the layout.

## Boards

| Artboard | Device | Frame | Crop Y | Status |
|---|---|---|---|---|
| `Home` | Desktop | 1440 × 7699 | 0 | APPROVED WITH ADAPTATION |
| `Home-p2` | Desktop | 1440 × 6677 | 7699 | APPROVED WITH ADAPTATION |
| `Home-p3` | Desktop | 1440 × 7172 | 14376 | APPROVED WITH ADAPTATION |
| `Home-p4` | Desktop | 1440 × 2020 | 21548 | APPROVED WITH ADAPTATION |
| `HomeTablet` | Tablet | 768 × 7650 | 0 | APPROVED WITH ADAPTATION |
| `HomeTablet-p2` | Tablet | 768 × 5953 | 7650 | APPROVED WITH ADAPTATION |
| `HomeTablet-p3` | Tablet | 768 × 6858 | 13603 | APPROVED WITH ADAPTATION |
| `HomeTablet-p4` | Tablet | 768 × 6091 | 20461 | APPROVED WITH ADAPTATION |
| `HomeMobile` | Mobile | 390 × 7383 | 0 | APPROVED WITH ADAPTATION |
| `HomeMobile-p2` | Mobile | 390 × 4691 | 7383 | APPROVED WITH ADAPTATION |
| `HomeMobile-p3` | Mobile | 390 × 6872 | 12074 | APPROVED WITH ADAPTATION |
| `HomeMobile-p4` | Mobile | 390 × 7782 | 18946 | APPROVED WITH ADAPTATION |
| `HomeMobile-p5` | Mobile | 390 × 5817 | 26728 | APPROVED WITH ADAPTATION |
| `HomeMenuMobile` | Mobile, menu open | 390 × 932 | 0 | APPROVED |

"With adaptation" refers to the content and state changes in [homepage-visual-parity.md](../qa/homepage-visual-parity.md). No Homepage variant is MISSING or FUTURE.

## Sections

The order below is the source order, and the page follows it.

| # | Section | Component | Ground | Motion | Client code |
|---|---|---|---|---|---|
| 1 | Hero | `home-hero.tsx` | `bg-horizon` | Pinned, dims on scroll, line mask, drift, beams, floating widgets | No |
| 2 | Point of view: 3 statements | `home-hero.tsx` | Rises over the hero | Stacked sticky cards | No |
| 3 | What we do: 6 services | `home-what-we-do.tsx` | `bg-ink` | Sticky column, stacked cards | No |
| 4 | SimpleX Agent | `home-agent.tsx` | `bg-mist`, orbs | Pulse | No |
| 5 | Build packages | `home-packages.tsx` | `mesh-graphite`, orbs | Reveal, card hover | No |
| 6 | Why SimpleX: bento | `home-why.tsx` | White | Reveal | No |
| 7 | Featured work: 3 demonstrations | `home-work.tsx` | `bg-mist` | Stacked cards, image scale | No |
| 8 | How we work: 5 steps | `home-how.tsx` | `bg-ink-left` | Sticky column, story rail, step focus | No |
| 9 | Industries: 6 cards | `home-industries.tsx` | White | Reveal, details on hover | No |
| 10 | Technology | `home-technology.tsx`, `home-technology-panel.tsx` | `bg-mist` | Marquees | Tabs, show all |
| 11 | Engagement models | `home-models.tsx` | `bg-ink` | Reveal | No |
| 12 | Transparent by default | `home-engagement.tsx` | `mesh-light`, orbs | Reveal | No |
| 13 | Insights: 3 samples | `home-insights.tsx` | White | Reveal | No |
| 14 | Estimator | `home-estimator.tsx`, `home-estimator-panel.tsx` | `paper` | None | Options, live team |
| 15 | Closing CTA | `home-cta.tsx` | `bg-cta` | Reveal | No |

Mock-ups are in `src/components/sections/home/illustrations.tsx`, and copy is in `src/content/home/`.

## Assets

| Asset | Where |
|---|---|
| `bg-trading`, `bg-office`, `bg-server`, `bg-city`, `bg-code`, `bg-tower` | `.viz-*` grounds on Work, Industries, Insights. Provenance: GAP-A01 |
| Logo, SX tile | Inline, from the design's geometry |
| Product visuals | Drawn in HTML and CSS, as on the board. No screenshots exist |

The page needs no `next/image`, because the design uses no `<img>`: all imagery is CSS grounds.

## Links

Every link is a real route with no page yet, so it renders as a disabled link until its ticket ships. The logo is the only live link. Article cards point to `/insights`, because the design defines no article slugs (GAP-R01).
