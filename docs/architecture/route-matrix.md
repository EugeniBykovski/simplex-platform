# Route matrix

Machine-readable twin: [route-registry.json](route-registry.json). Source: design version `1793869596-167d`. Every route below has an artboard whose title carries that URL label, so all are **APPROVED** as URLs. Approval of the URL does not mean approval of the copy: see [content-and-claims-register.md](../content/content-and-claims-register.md).

## Summary

- **22 route patterns**, which expand to **40 routes**: 37 concrete pages, 2 content-driven patterns (`/careers/[slug]`, `/insights/[slug]`) and the 404.
- Every candidate in the ticket exists in the design. None had to be marked PROPOSED, and the design adds none beyond the ticket's list.
- Shared layout everywhere: `SiteLayout`, the header slot, `main`, then the footer. `/contact` and the 404 render `main` directly with no `section` wrapper at the top.
- All routes render statically. `/careers/[slug]` and `/insights/[slug]` use `generateStaticParams` from local content. Nothing needs a database.

## Routes

| Route | Status | Render | Template | Boards | Boarded devices | Indexing | Ticket |
|---|---|---|---|---|---|---|---|
| `/` | APPROVED | static | Home | 14 | desktop · tablet · mobile | index at launch | SF-143 |
| `/agent` | APPROVED | static | Agent | 4 | desktop · mobile | noindex until capabilities are verified | SF-144 |
| `/services` | APPROVED | static | Services | 4 | desktop · mobile | index at launch | SF-145 |
| `/services/custom-software-development` | APPROVED | static | ServicePage `custom-software-development` | 2 | desktop | index at launch | SF-145 |
| `/services/enterprise-software` | APPROVED | static | ServicePage `enterprise-software` | 2 | desktop | index at launch | SF-145 |
| `/services/web-development` | APPROVED | static | ServicePage `web-development` | 2 | desktop | index at launch | SF-145 |
| `/services/mobile-development` | APPROVED | static | ServicePage `mobile-development` | 2 | desktop | index at launch | SF-145 |
| `/services/desktop-development` | APPROVED | static | ServicePage `desktop-development` | 2 | desktop | index at launch | SF-145 |
| `/services/ai-engineering` | APPROVED | static | ServicePage `ai-engineering` | 4 | desktop · mobile | index at launch | SF-145 |
| `/services/cloud-devops` | APPROVED | static | ServicePage `cloud-devops` | 2 | desktop | index at launch | SF-145 |
| `/services/architecture-consulting` | APPROVED | static | ServicePage `architecture-consulting` | 2 | desktop | index at launch | SF-145 |
| `/services/product-design` | APPROVED | static | ServicePage `product-design` | 2 | desktop | index at launch | SF-145 |
| `/services/legacy-modernization` | APPROVED | static | ServicePage `legacy-modernization` | 2 | desktop | index at launch | SF-145 |
| `/services/quality-engineering` | APPROVED | static | ServicePage `quality-engineering` | 2 | desktop | index at launch | SF-145 |
| `/services/dedicated-teams` | APPROVED | static | ServicePage `dedicated-teams` | 2 | desktop | index at launch | SF-145 |
| `/packages` | APPROVED | static | Packages | 5 | desktop · mobile | index at launch | SF-146 |
| `/industries` | APPROVED | static | Industries | 3 | desktop · mobile | index at launch | SF-147 |
| `/industries/fintech` | APPROVED | static | IndustryPage `fintech` | 1 | desktop | index at launch | SF-147 |
| `/industries/healthcare` | APPROVED | static | IndustryPage `healthcare` | 3 | desktop · mobile | index at launch | SF-147 |
| `/industries/ecommerce` | APPROVED | static | IndustryPage `ecommerce` | 1 | desktop | index at launch | SF-147 |
| `/industries/saas` | APPROVED | static | IndustryPage `saas` | 1 | desktop | index at launch | SF-147 |
| `/industries/enterprise` | APPROVED | static | IndustryPage `enterprise` | 1 | desktop | index at launch | SF-147 |
| `/industries/logistics` | APPROVED | static | IndustryPage `logistics` | 1 | desktop | index at launch | SF-147 |
| `/work` | APPROVED | static | Work | 4 | desktop · tablet · mobile | noindex until verified client work exists | SF-148 |
| `/work/simplefit-boxing` | APPROVED | static | CasePage project template `simplefit-boxing` | 1 | desktop · mobile | noindex until the founder approves the project pages (GAP-C02) | SF-157 |
| `/work/financialpress` | APPROVED | static | CasePage project template `financialpress` | 1 | desktop · mobile | noindex until the founder approves the project pages (GAP-C02) | SF-157 |
| `/work/hobworks` | APPROVED | static | CasePage project template `hobworks` | 1 | desktop · mobile | noindex until the founder approves the project pages (GAP-C02) | SF-157 |
| `/work/simple-house` | APPROVED | static | CasePage project template `simple-house` | 1 | desktop · mobile | noindex until the founder approves the project pages (GAP-C02) | SF-157 |
| `/work/simple-market` | APPROVED | static | CasePage project template `simple-market` | 1 | desktop · mobile | noindex until the founder approves the project pages (GAP-C02) | SF-157 |
| `/work/deeply` | APPROVED | static | CasePage project template `deeply` | 1 | desktop · mobile | noindex until the founder approves the project pages (GAP-C02) | SF-157 |
| `/work/wait` | APPROVED | static | CasePage project template `wait` | 1 | desktop · mobile | noindex until the founder approves the project pages (GAP-C02) | SF-157 |
| `/work/anyway` | APPROVED | static | CasePage project template `anyway` | 1 | desktop · mobile | noindex until the founder approves the project pages (GAP-C02) | SF-157 |
| `/how-we-work` | APPROVED | static | HowWeWork | 4 | desktop · mobile | index at launch | SF-149 |
| `/about` | APPROVED | static | About | 4 | desktop · mobile | index at launch | SF-149 |
| `/technologies` | APPROVED | static | Technologies | 4 | desktop · mobile | index at launch | SF-149 |
| `/careers` | APPROVED | static | Careers | 3 | desktop · mobile | index when live roles exist | SF-149 |
| `/careers/[slug]` | APPROVED | static | Job | 2 | desktop · mobile | noindex while sample; add JobPosting only for live roles | SF-149 |
| `/insights` | APPROVED | static | Insights | 2 | desktop · mobile | index at launch | SF-150 |
| `/insights/[slug]` | APPROVED | static | Article | 2 | desktop · mobile | noindex while sample | SF-150 |
| `/contact` | APPROVED | static | Contact | 3 | desktop · tablet · mobile | index at launch | SF-151 |
| `/contact/thank-you` | APPROVED | static | ThankYou | 2 | desktop · mobile | noindex | SF-151 |
| `/privacy-policy` | APPROVED | static | LegalPage `privacy` | 2 | desktop · mobile | not published until owner and legal approve | SF-152 |
| `/cookie-policy` | APPROVED | static | LegalPage `cookie` | 1 | desktop | not published until owner and legal approve | SF-152 |
| `/terms` | APPROVED | static | LegalPage `terms` | 1 | desktop | not published until owner and legal approve | SF-152 |
| `/404` | APPROVED | static | NotFound | 2 | desktop · mobile | noindex | SF-152 |

Per-route artboards, content source, interactions, asset dependencies and metadata are in the registry JSON. Page-level SEO is in [page-seo-matrix.md](../seo/page-seo-matrix.md).

## App Router layout

```
src/app/[locale]/                     root layout: <html lang>, fonts, intl provider
  page.tsx                            /
  agent/page.tsx
  services/page.tsx
  services/[slug]/page.tsx            12 slugs
  packages/page.tsx
  industries/page.tsx
  industries/[slug]/page.tsx          6 slugs
  work/page.tsx
  work/[slug]/page.tsx                3 slugs, layouts A, B, C
  how-we-work/page.tsx
  about/page.tsx
  technologies/page.tsx
  careers/page.tsx
  careers/[slug]/page.tsx
  insights/page.tsx
  insights/[slug]/page.tsx
  contact/page.tsx
  contact/thank-you/page.tsx
  privacy-policy/page.tsx
  cookie-policy/page.tsx
  terms/page.tsx
  not-found.tsx                       fallback for a notFound() thrown while rendering
src/app/global-not-found.tsx          the /404 design for unmatched URLs, server-rendered
```

Only the root `page.tsx`, `layout.tsx`, `not-found.tsx` and `global-not-found.tsx` exist today. The rest are planned, one ticket each.

**Rules for 404s (GAP-R03, verified on a production build):** do not add a catch-all route. Slug pages set `dynamicParams = false` and list their slugs in `generateStaticParams`, so unknown slugs reach `global-not-found.tsx` as real HTML. Do not call `notFound()` while rendering, because that sends an empty shell that needs JavaScript.

## Locale URLs

Requested by the owner, so this is the one **PROPOSED** family. See [i18n.md](i18n.md).

| Locale | Pattern | Example | Status |
|---|---|---|---|
| en (default) | unprefixed | `/services/web-development` | APPROVED: identical to design URLs |
| ru | `/ru` prefix, English slugs | `/ru/services/web-development` | PROPOSED: no Russian design or copy exists yet |

`/en/...` redirects to the unprefixed URL. A Russian route ships only when its page ticket adds the copy. Before that it does not exist, so an unreviewed page cannot be crawled.

## Referenced by the design with no route

| Item | Where | Treatment |
|---|---|---|
| Northbeam, Atlas Commerce, Meridian Works | Work grid | Rendered as non-linking cards in the design (hasCase false). No routes. |
| Nine further article titles | Insights listing, Home, Article related | All link to the single Article board in the prototype. Need slugs and content. |
| Five further sample roles | Careers listing, Job | All link to the single Job board in the prototype. Need slugs and content. |

## Design link inconsistencies

Links in the prototype point at artboard files. These do not map one-to-one, and the implementation has to choose:

- The footer's **Web, Mobile & Desktop** link goes only to `/services/web-development`.
- The footer's **Cookie settings** goes to `/cookie-policy`, because there is no consent dialog on any page (GAP-F03).
- Every article and job card links to the one sample board (GAP-R01).
- `Nav` has no `active` value for `/technologies`, `/packages` (uses `services`) or `/contact`. `/technologies` highlights nothing.
- `/technologies` appears only in the footer: neither the header nor the mobile menu links to it.
- The 404 board's search box does nothing, so it is omitted (GAP-F05). Its Services, Our work and Contact buttons appear once those routes exist, driven by `implementedRoutes` in `src/config/routes.ts`.
- The mobile menu lists 8 of the 13 mega-menu service items and no industry sub-links (GAP-R02).
