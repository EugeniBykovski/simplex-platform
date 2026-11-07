# Structured data

For SF-153. Builders are in `src/lib/seo/jsonld.ts`, and `src/components/seo/json-ld.tsx` renders them server-side, with `<` escaped so no value can close the script. **All of it reflects visible content and verified facts.** Validated by parsing rendered output. **The Schema Markup Validator and Rich Results Test were not run**, as they need a public URL.

## In use

| Type | Where | Properties | Condition |
|---|---|---|---|
| `Organization` | Home | `name`, `url`, `logo` | Page eligible for search |
| `WebSite` | Home | `name`, `url`, `description`, `inLanguage`, `publisher` | As above |
| `BreadcrumbList` | Every page with a visible breadcrumb | Mirrors it, through `SeoBreadcrumbs` | As above |
| `Service` | 12 service pages | `name`, `description`, `url`, `inLanguage`, `provider` | As above |
| `BlogPosting` | Published articles | Headline, description, language, URL, dates, `Person`, publisher | Published, with real author and date. **None today** |

On the shipped data: 1 home graph, 13 breadcrumbs, 12 services. A parse check found no invalid JSON and none of the forbidden claims below.

A breadcrumb with no page of its own, such as "Legal", is left out of the structured list, because every item but the last needs a URL.

## Deliberately absent

| Type or property | Why |
|---|---|
| `legalName`, `address`, `telephone`, `foundingDate`, `employee`, `sameAs` | Unverified (GAP-C08) |
| `aggregateRating`, `review` | No approved reviews |
| `award`, `hasCredential`, certifications | None verified |
| `offers`, `price` | No approved prices |
| `JobPosting` | No live vacancy |
| `FAQPage` | Accordions aren't enough, and FAQ rich results are limited to authoritative government and health sites |
| `ContactPage`, `ContactPoint` | No verified contact details. The page isn't indexed |
| `AboutPage` | The page isn't indexed yet, and its claims are unverified |
| `SearchAction` | No site search |
| `Service` on Work, Industries, Agent, Packages | Not indexed. Demonstrations must never look like delivered work |

## Adding more

Add a fact only once it is verified and visible on the page. Then extend the builder and check rendered output.
