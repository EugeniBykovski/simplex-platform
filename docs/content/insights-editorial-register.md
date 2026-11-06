# Insights editorial register

Every article and editorial statement in Insights, for SF-150. Source: `Insights.dc.html` and `Article.dc.html`, design version `1793953114-553b`. Claude Design was not modified.

**No article is published.** The design has one written article, marked "Sample article", and nine titles with no body. None has an author, a date or approval. `/insights` shows an empty state, and every article URL returns 404.

## Articles

| Slug | Locale | Design source | Content source | Status | Author | Date | Image rights | Approval | Indexing |
|---|---|---|---|---|---|---|---|---|---|
| `the-quiet-cost-of-a-distributed-monolith` | EN | `Article.dc.html`, "Sample article" | `src/content/insights/articles.ts` | **draft** | None. `[Author name]` in the source | None. `[Publish date]` | Drawn diagram, no image | **None** | No route |
| Same | RU | | No translation | Missing | | | | | No route |

The slug follows the rule in [seo-architecture.md](../seo/seo-architecture.md), since the design gives none (GAP-R01).

**Before this draft could publish, a founder should check:**

- Whose experience it is. It is written in a general voice, but an author has to stand behind it.
- Its example command pipes into `co-change-report`, **which is not a real tool I can identify**.
- Its callout, "We run focused architecture reviews", is a service claim (GAP-C10).
- It carries no benchmark, client or statistic, which is good.
- A Russian translation is needed for a Russian page.

### Titles with no body

These appear on the source's cards. **They are not stored in the content system**, as there is nothing to publish. Write them, or drop them.

| Title | Category | Minutes in the design |
|---|---|---|
| Evaluating LLM features before they reach users | AI in practice | 7 |
| Five questions to ask before a rewrite | Leadership | 6 |
| Designing dashboards for decisions, not data | Product design | 8 |
| Trunk-based development without the fear | Delivery | 7 |
| FinOps for product teams: cost as a feature | Cloud | 6 |
| Strangler fig, step by step | Modernisation | 10 |
| Accessibility is an engineering requirement | Product design | 5 |
| Contract testing: release independently, safely | Quality | 6 |
| Architecture decision records that people read | Architecture | 5 |

## Publication workflow

Content lives in `src/content/insights/articles.ts`, as typed data. No CMS, database or MDX, since typed blocks cover everything the design uses.

| Status | Meaning | Public? |
|---|---|---|
| `draft` | Being written | No |
| `review` | Awaiting approval | No |
| `published` | Approved | Yes, in that language only |

**Status is per translation**, so an approved English article doesn't publish its Russian draft.

**To publish**, a founder confirms the title, body, category, slug, attribution, date and any imagery, then sets `status: "published"`. TypeScript refuses `published` without `author` and `publishedAt`. Nothing derives a date from the build.

**Draft isolation.** `getPublishedArticles` in `src/content/insights/index.ts` is the only reader, and returns published translations alone. So pages, cards, related links, metadata, `generateStaticParams`, the sitemap and search see no draft. Confirmed with a `review` fixture: 404, absent from HTML, sitemap and related links. Draft text is not in the client bundle.

**Rich content** is a closed set of blocks: paragraph, heading, subheading, list, quote, code, callout. There is no raw HTML, Markdown or executable path. Inline links and emphasis are not supported, because the design's body has none: add them to the block type when an article needs them. Cover images are likewise diagram-only until an image is approved.

## Withheld or changed

| In the design | Status | Published |
|---|---|---|
| **Playbook:** "Free · 24-page PDF", "The CTO's build-vs-buy playbook", "The framework our architects use with clients", email capture, "On its way" | **The PDF does not exist (GAP-A03), and the form only simulates sending.** No privacy decision | **Section withheld.** No email is collected |
| "from the engineers and designers doing the work" | Unverified | Removed from the lead |
| `[Article content shown is sample editorial…]` | Note to authors | Removed |
| "Load more" with a 900 ms simulated wait and skeletons (GAP-F10) | Fake delay | All articles shown |
| "Our best articles start as client questions." | Implies clients and articles | "Tell us what you're trying to understand." |
| Home: three sample article cards | Would link to an empty page | Kept with their "Sample articles" tag, **no longer links**. "All insights" still links |

## To decide

1. Adopt, rewrite or drop the sample article.
2. Write or drop the nine other titles.
3. Who are the named authors? Roles? Is a photograph wanted?
4. Create the playbook, with a privacy decision and a sending route, or drop it.
5. Home shows sample cards while nothing is published. Keep them labelled, or hide the block until articles exist?
