# Insights artboard matrix

Inventory for SF-150, from the structured artifact, design version `1793953114-553b`. Claude Design was not modified.

## What the design contains

**Four boards, two compositions and two routes.** The insights page in `canvas.json` is its own group. The article route has no slug values (GAP-R01). There are no tablet boards, and no category route: categories are filters on one page.

| Artboard | Device | Frame | Route |
|---|---|---|---|
| `Insights.dc.html` | Desktop | 1440 × 4589 | `/insights` |
| `InsightsMobile.dc.html` | Mobile | 390 × 7810 | `/insights` |
| `Article.dc.html` | Desktop | 1440 × 5038 | `/insights/[slug]` |
| `ArticleMobile.dc.html` | Mobile | 390 × 6479 | `/insights/[slug]` |

## Route, section, source, component, asset and status

No article is published, so "template" parts render only for a published article. They were checked with temporary fixtures, removed before commit. See [insights-manual-qa.md](../qa/insights-manual-qa.md#template-check).

### `/insights`

| # | Section | Source content | Component | Asset | Status |
|---|---|---|---|---|---|
| 1 | Hero | Breadcrumb, H1, lead | `InsightsHero` | `bg-mist` | Implemented |
| 1b | Featured article | First `featured` article | `InsightsHero` | `viz-*` | Template |
| 2 | Latest: empty state | Written for this ticket | `InsightsLatest` | | **Shipped** |
| 2b | Latest: search, categories, count, cards, no-match | `ALL`, `cats` | client `InsightsBrowser` | `viz-*` | Template |
| | Load more, skeletons | Simulated wait | | | **Not built** (GAP-F10) |
| 3 | Playbook | PDF, email capture | | `bg-code.jpg` | **Withheld** (GAP-A03) |
| 4 | CTA | Reworded | `InsightsCta` | `bg-ink` | Implemented |

### `/insights/[slug]`: template only

| # | Section | Component | Status |
|---|---|---|---|
| | Reading progress | `.progress-bar`, CSS scroll timeline | Template |
| 1 | Header: breadcrumb, category, H1, lead, author, cover diagram | `ArticleHeader`, `AuthorAvatar` | Template |
| 2 | Share rail, reading column, contents | `ArticleBody`, `ArticleBlocks`, client `ArticleCopyButton` | Template |
| 3 | Related articles | `ArticleRelated` | Template. Hidden when none |

**Share links** are real: LinkedIn, X and a `mailto:`. The source's are `href="#"`.

## Filtering

Category and search live in the URL (`?category=delivery&q=cost`), so a view can be shared and Back works. Category controls are real links. Only categories with a published article appear. `/insights` stays canonical for every query, and an unknown category shows all.

## Tablet

No board exists. 601–1100 follows the source's rules: the reading grid becomes one column at 1100, with the contents hidden and the share rail below the article.

## Geometry

Against the source's static render, at the same widths, with `reducedMotion`, using the fixtures. English. "Latest" holds nine cards here, where the source shows six behind "Load more". The playbook is left out of the comparison.

| Route | 1440 sections | 768 sections | 390 sections |
|---|---|---|---|
| `/insights`, with fixtures | 0, +341, 0 | −59, +746, 0 | −80, +856, 0 |
| `/insights/[slug]`, with a fixture | −2, 0, 0 | −2, 0, 0 | −2, 0, 0 |

- **+341, +746, +856:** the three extra cards in the fixture. At 390, a 360 px source gap (GAP-D33) is also gone.
- **−59, −80:** the hero's shorter lead.
- **−2:** the header without its sample tag's line.

**Shipped state, with no articles:**

| Width | Hero | Latest | CTA | Page (build / source) |
|---|---|---|---|---|
| 1440 | −534 | −784 | 0 | 2381 / 4589 |
| 390 | −978 | −2865 | 0 | 2824 / 7809 |

## Discrepancies

In the [gap register](design-gap-register.md): GAP-A03, GAP-C07, GAP-F10, GAP-R01, GAP-D33 to GAP-D35.
