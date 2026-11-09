# Portfolio attribution register

Every project on `/work`. **SF-157 replaced the design's fictional portfolio** (Ledgerline, Carepath, Routewise, Northbeam, Atlas Commerce, Meridian Works) with eight projects the founder approved. The concept cases, their three bespoke layouts and their interface mock-ups were removed from the site, not relabelled.

Facts were taken read-only from each project's own local repository and documentation. No project repository was modified. Content lives in `src/content/work/projects.ts`; one template renders every project page.

## Rules applied to every project

- "What is built" lists only what the code implements. Partial, stubbed or planned work is listed separately as "In progress and planned".
- No user, revenue, launch, store availability, outcome or partnership claim. None is verified for any project.
- No testimonial, quote or client figure.
- No screenshot or logo. Each project is shown with the site's sector ground, a glyph and part of its stack. Nothing imitates a product interface.
- All Work routes stay `noindex` until the founder approves the pages (GAP-C02).

## Projects

| Project | Category | SimpleX role, as published | Status, as published | Attribution and limits | Founder approval required |
|---|---|---|---|---|---|
| SimpleFit Boxing | Sports platform | Product design and full-stack engineering | In development | Sponsor domain, operator bootstrap and marketplace are planned, not built. Stripe billing tested in test mode only | Page wording |
| FinancialPress | Financial media platform | Engineering leadership and product development engagement | Pre-beta | **Owned by FinPress Communications Inc.** The page says so and that it implies no endorsement. Its brand and logos are not shown. TradingView's charting library is named as licensed, not as SimpleX work | Page wording, and whether FinPress should review the attribution |
| Hobworks | Professional networking | MVP backend and mobile app development | MVP in development | Client work. Match scoring is described as rule-based, not AI. **A scope-clarification document exists for this engagement**, so the page claims no completed MVP | Page wording, and confirm publication is permitted under the agreement |
| Simple House | PropTech | Product design and full-stack engineering | In development | No mobile apps, maintenance requests or e-signing are claimed. Gemini document checks are described as implemented | Page wording |
| Simple Market | B2B marketplace | Product design and full-stack engineering | In development | Quotes, approvals, contracts, analytics and integrations are listed as planned. No payments claim | Page wording |
| Deeply | Mobile training app | Product design and full-stack engineering | In development | **No health or medical claim.** Described as breath-hold and freediving training only. No App Store availability claimed | Page wording |
| Wait | Mobility | Product design and full-stack engineering | In development | No store availability claimed. Payment provider not named | Page wording |
| AnyWay | PetTech | Product design and full-stack engineering | Early stage | Spelled AnyWay, never "Pawway". AI checklists, PDF packs and subscriptions are listed as planned, since the code holds only mocks | Page wording |

## Where projects appear

| Place | What it shows |
|---|---|
| `/work` | All eight, with platform and focus filters. SimpleFit Boxing featured |
| `/work/<slug>` | Category, role, status, platforms, built, in progress, engineering, stack, attribution note |
| Home | SimpleFit Boxing, FinancialPress, Hobworks |
| Service pages | Up to two related projects per service, from `serviceCatalog`. Desktop, Legacy Modernization, Dedicated Teams and Telegram Bots have none, so the block is hidden |
| Industry pages | One related project where the sector fits: FinTech (FinancialPress), E-commerce (Simple Market), SaaS (SimpleFit Boxing), Enterprise (Simple House), Logistics (Wait). Healthcare has none: Deeply is not a health product |

## Still withheld

The design's reference-call block, client quote slot, NPS and repeat-client figures stay hidden (GAP-C02). No reference or figure exists.

## Open

- Founder sign-off of each page's wording, then a decision on indexing `/work`.
- Native Russian review of the project copy.
- FinancialPress and Hobworks: confirm publication with the client where the agreement requires it.
