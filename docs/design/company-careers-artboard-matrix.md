# Company and Careers artboard matrix

Inventory for SF-149, from the structured artifact, design version `1793953114-553b`. Claude Design was not modified.

## What the design contains

**Seventeen boards, five source compositions and five routes.** `/careers/[slug]` is one sample board with no slug values (GAP-R01).

| Composition | Boards | Device coverage |
|---|---|---|
| `About` | 4 | Desktop and mobile. No tablet board |
| `HowWeWork` | 4 | Desktop and mobile. No tablet board |
| `Technologies` | 4 | Desktop and mobile. No tablet board |
| `Careers` | 3 | Desktop and mobile. No tablet board |
| `Job` | 2 | Desktop and mobile. No tablet board |

## Every board

| Artboard | Device | Frame | Crop offset | Route |
|---|---|---|---|---|
| `About.dc.html` | Desktop, part 1/2 | 1440 × 7799 | 0 | `/about` |
| `About-p2.dc.html` | Desktop, part 2/2 | 1440 × 1302 | 7799 | `/about` |
| `AboutMobile.dc.html` | Mobile, part 1/2 | 390 × 6543 | 0 | `/about` |
| `AboutMobile-p2.dc.html` | Mobile, part 2/2 | 390 × 7811 | 6543 | `/about` |
| `HowWeWork.dc.html` | Desktop, part 1/2 | 1440 × 7925 | 0 | `/how-we-work` |
| `HowWeWork-p2.dc.html` | Desktop, part 2/2 | 1440 × 1381 | 7925 | `/how-we-work` |
| `HowWeWorkMobile.dc.html` | Mobile, part 1/2 | 390 × 7699 | 0 | `/how-we-work` |
| `HowWeWorkMobile-p2.dc.html` | Mobile, part 2/2 | 390 × 5636 | 7699 | `/how-we-work` |
| `Technologies.dc.html` | Desktop | 1440 × 6804 | 0 | `/technologies` |
| `TechnologiesMobile.dc.html` | Mobile, part 1/3 | 390 × 681 | 0 | `/technologies` |
| `TechnologiesMobile-p2.dc.html` | Mobile, part 2/3 | 390 × 8000 | 681 | `/technologies` |
| `TechnologiesMobile-p3.dc.html` | Mobile, part 3/3 | 390 × 5072 | 8681 | `/technologies` |
| `Careers.dc.html` | Desktop | 1440 × 6527 | 0 | `/careers` |
| `CareersMobile.dc.html` | Mobile, part 1/2 | 390 × 7204 | 0 | `/careers` |
| `CareersMobile-p2.dc.html` | Mobile, part 2/2 | 390 × 2838 | 7204 | `/careers` |
| `Job.dc.html` | Desktop | 1440 × 3447 | 0 | `/careers/[slug]` |
| `JobMobile.dc.html` | Mobile | 390 × 5023 | 0 | `/careers/[slug]` |

## Route, section, content, component, asset and status

Claims: [company-claims-register.md](../content/company-claims-register.md), [careers-positions-register.md](../content/careers-positions-register.md).

### `/about`

| # | Section | Component | Asset | Status |
|---|---|---|---|---|
| 1 | Hero | `AboutHero` | `bg-horizon` | Implemented |
| 2 | Our story | `AboutStory` | `Wordmark` | Implemented, reworded |
| 3 | Mission | `AboutMission` | `bg-ink` | Implemented |
| 4 | Engineering values, 6 | `AboutValues` | `bg-mist` | Implemented |
| 5 | Ways of working, 4 tiles | `AboutWays` | | Implemented, **figures removed** |
| 6 | Leadership, 4 profiles | | Portraits missing | **Withheld** (GAP-C05) |
| 7 | Team culture, bento | `AboutCulture` | Photographs missing | Implemented, **2 photo slots withheld** |
| 8 | Trust center, 6 tiles | `AboutTrust` | `bg-tower.jpg` | Implemented, reworded |
| 9 | CTA | `AboutCta` | `bg-cta` | Implemented |

### `/how-we-work`

| # | Section | Component | Asset | Status |
|---|---|---|---|---|
| 1 | Hero and stage chain | `HowHero` | `bg-ink` | Implemented |
| 2 | Principles, 4 | `HowPrinciples` | `bg-mist` | Implemented, reworded |
| 3 | Methodology: 8 stages on a rail | `HowMethod` | `.story` | Implemented |
| 4 | Rhythm, 5 | `HowRhythm` | | Implemented |
| 5 | Transparency and dashboard | `HowTransparency` | Drawn | Implemented, **figures removed** |
| 6 | Sprint report | `HowReport` | Drawn | Implemented, **figures removed** |
| 7 | FAQ, 5 | `HowFaq` | | Implemented, reworded |
| 8 | CTA | `HowCta` | `bg-cta` | Implemented |

**The stage rail** keeps the source's numbered steps and connecting line. Its growth is CSS only (`view-timeline`), so there is no scroll handler or scroll-jacking. All stages stay readable without it, and under reduced motion it is static.

### `/technologies`

| # | Section | Component | Asset | Status |
|---|---|---|---|---|
| 1 | Hero and legend | `TechHero` | `bg-ink` | Implemented |
| 2 | Search, filters, 47 entries in 8 groups, empty state | `TechList`, client `TechDirectory` | No logos in the design | Implemented |
| 3 | Technology follows the problem | `TechFollows` | | Implemented |
| 4 | Radar: 4 rings, 15 dots | `TechRadarSection`, client `TechRadar` | Drawn | Implemented, **labelled sample** |

### `/careers`

| # | Section | Component | Asset | Status |
|---|---|---|---|---|
| 1 | Hero | `CareersHero` | `bg-horizon` | Implemented, reworded |
| 2 | Culture, 3 | `CareersCulture` | | Implemented, reworded |
| 3 | Benefits, 8 | | | **Withheld** (GAP-C06) |
| 4 | Open positions | `CareersRoles` | | **Empty state**. Rows render for real roles. Sample roles withheld |
| 5 | Hiring process, 4 | `CareersProcess` | | Implemented, reworded |
| 6 | First 90 days, 4 | `CareersOnboarding` | `.tl` | Implemented, reworded |
| 7 | CTA | `CareersCta` | `bg-cta` | Implemented, reworded |

### `/careers/[slug]`

| # | Section | Component | Status |
|---|---|---|---|
| 1 | Hero | `JobHero` | Template only |
| 2 | Article and apply panel | `JobBody`, client `CopyLink` | Template only. **No form** (GAP-F02) |
| 3 | Other roles | `JobOthers` | Template only |

**No page is generated**, since no vacancy is approved. Every slug returns 404.

## Tablet

No board exists. All pages follow the source's own container rules, compared with the source rendered at the same width.

## Geometry

Against the source's static render, at the same widths, with `reducedMotion`. English. Withheld sections are left out of the section comparison.

| Route | 1440 sections | 1440 page (build / source) | 768 sections | 390 sections | 390 page (build / source) |
|---|---|---|---|---|---|
| `/about` | 0, 0, 0, 0, −61, −588, +22, 0 | 7504 / 9089 | 0, −31, 0, 0, +48, −729, +22, −27 | 0, −29, 0, +27, +48, −765, +104, −27 | 11061 / 14273 |
| `/how-we-work` | 0, 0, −26, 0, 0, 0, 0, 0 | 9232 / 9258 | All 0 | 0, +27, 0, 0, 0, −45, 0, 0 | 13266 / 13335 |
| `/technologies` | All 0 | 6804 / 6804 | All 0 | +24, 0, 0, 0 | 13725 / 13752 |
| `/careers` | 0, 0, −454, 0, −101, 0 | 5047 / 6527 | 0, 0, −1127, 0, −27, +27 | −68, 0, −1272, 0, 0, +27 | 6640 / 10041 |

- **Largest differences:** the empty roles state, and the culture section without its photographs.
- **`/about` culture:** also has no top padding, since it now follows a white section. The source's mist Leadership section sat between them.
- **Others:** reworded copy.

## Discrepancies

In the [gap register](design-gap-register.md): GAP-C05, GAP-C06, GAP-F02, GAP-R01, GAP-D30 to GAP-D32.
