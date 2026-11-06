# Build packages artboard matrix

Inventory for SF-146, from the structured artifact, design version `1793869596-167d`. Claude Design was not modified.

## What the design contains

**Five boards, one source composition and one route.** All five are crops of `Packages.dc.html`. The ticket's candidates ("Software enhancement", a separate comparison page, pricing cards) are **not in the design**. There is no second route, and comparison is a section of `/packages`.

| Artboard | Device | Frame | Crop offset | Route |
|---|---|---|---|---|
| `Packages.dc.html` | Desktop, part 1/2 | 1440 × 7507 | 0 | `/packages` |
| `Packages-p2.dc.html` | Desktop, part 2/2 | 1440 × 3506 | 7507 | `/packages` |
| `PackagesMobile.dc.html` | Mobile, part 1/3 | 390 × 5451 | 0 | `/packages` |
| `PackagesMobile-p2.dc.html` | Mobile, part 2/3 | 390 × 7162 | 5451 | `/packages` |
| `PackagesMobile-p3.dc.html` | Mobile, part 3/3 | 390 × 3407 | 12613 | `/packages` |

Totals: 11013 px on desktop and 16020 px on mobile. **There is no tablet board**, so 601–1100 follows the source's container rules.

## Sections, in order

| # | Section | Anchor | Ground | Height at 1440 | Component |
|---|---|---|---|---|---|
| 1 | Hero, with breadcrumb, chip, H1, lead, two CTAs and three phones | | `bg-ink` | 1470 | `PackagesHero`, `HeroPhones` |
| 2 | Three packages, with three cards | | `mesh-light` | 1127 | `PackagesSelection` |
| 3 | 01 Mobile pod, with track tabs, track card, checks and phone stage | `#mobile-pod` | white | 1394 | `PackagesPod`, `PodTracks`, `PodStage` |
| 4 | 02 Desktop, with window, three panels and four features | `#desktop` | `mesh-graphite` | 1482 | `PackagesDesktop`, `DesktopWindow` |
| 5 | 03 Full cycle, with ecosystem, laptop and squad | `#full-cycle` | white | 2021 | `PackagesFullCycle`, `AdminLaptop` |
| 6 | Team availability | | white | 688 | `PackagesStarts` |
| 7 | Compare packages, with the table and four FAQ entries, first open | `#compare` | `paper` | 1206 | `PackagesCompare` |
| 8 | CTA | | `bg-cta` | 749 | `PackagesCta` |
| | Shared footer | | | | `SiteFooter`, unchanged |

The FAQ belongs to the comparison section in the source, and has no heading of its own there or here.

## Packages

| ID | Name in the design | Team shape | Tracks or scope |
|---|---|---|---|
| `mobile-pod` | Mobile pod | 2 people | iOS native, Android native, React Native (opens on React Native) |
| `desktop` | Desktop apps | 2–3 people | Windows, macOS, Linux, kiosk or embedded |
| `full-cycle` | Full cycle (highlighted) | One squad | Backend, web app, website, admin, iOS, Android, QA and release, cloud and DevOps |

Commercial status of each statement: [packages-commercial-register.md](../content/packages-commercial-register.md).

## Comparison

One typed model in `src/content/packages/`: `packageIds`, `compare.columns`, `compare.rows[].values`, `compare.actions`, plus `packageCatalog` for anchors, destinations and the highlighted column. Desktop and mobile render the same table, and nothing is hidden.

| Width | Columns | Behaviour |
|---|---|---|
| > 860 | 220 px, then three equal | Fits |
| ≤ 860 | 140 px, then three equal, tighter cells | Fits |
| ≤ 600 | As above, table at least 560 px | Scrolls inside a focusable, labelled region, as the source's `.cmp` does |

Markup: `table`, `caption`, `thead`, `tbody`, `th scope="col"` and `th scope="row"`, in place of the source's `div` grid. No row uses a check mark, so nothing depends on an icon for its meaning.

## Interaction

| Element | Source | Build |
|---|---|---|
| Track tabs | State toggles card and phones | `PodTracks`, on shared `useTabs`, with arrow keys, Home and End added |
| Phone frame | `.android` on the Android track only | Same |
| Accordion | Native `details`, first open | Shared `Accordion`, same |
| Package cards | Link to section anchors | Same |

Only the track selection is client code. Cards, phones and table are rendered on the server.

## Geometry

Against the source's static render, at the same widths, with `reducedMotion`.

| Width | Hero | Three | Pod | Desktop | Full cycle | Availability | Compare | CTA | Page |
|---|---|---|---|---|---|---|---|---|---|
| 1440 English | 0 | 0 | 0 | 0 | 0 | 0 | −1 | 0 | 11012 of 11013 |
| 390 English | 0 | −1 | 0 | 0 | −21 | −4 | +70 | 0 | 15985 of 15992 |

The differences are explained:

- **−1 at 1440:** collapsed table borders.
- **+70 at 390:** "Scope the full cycle" overflowed its column in the source, and now wraps inside it (table +71, FAQ unchanged).
- **−21 at 390:** the squad note and the QA row are shorter, as the placeholder and the Agent claim are gone.
- **−1 and −4 at 390:** wrapped labels and shorter copy.

The source renders 15992 at 390, and its boards total 16020. That 28 px is in the source, not the build.

## Discrepancies

Recorded in the [gap register](design-gap-register.md): GAP-F04 (availability), GAP-D20 (placeholders), GAP-D21 (table and button), GAP-D22 (laptop base).

- `Nav` marks Services as active for `/packages`, as the source's `active="services"` asks. Already implemented in `navigation.ts`.
- `/services` and the mega menu call it "Build Packages". The page says "Build packages", as in each source.
- Home's package cards use different visuals and grounds from this page's cards, in the design too. They are not shared for that reason.
