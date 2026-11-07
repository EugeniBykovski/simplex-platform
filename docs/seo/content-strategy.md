# Content strategy: search intent

For SF-153. Based on the 12 service and 6 industry pages that exist. **No keyword tool or Search Console data was available, so all search volumes are UNVERIFIED and none are stated.** Demand is qualitative, from what these pages are about. Validate it in Search Console after launch. Nothing here is a ranking prediction.

## Principles

1. **One primary intent, one URL.** See the map below.
2. **No doorway pages.** No city or country landing pages unless there is real local presence.
3. **Service pages describe what we do. Industry pages describe the constraints. Insights answer questions.**
4. **Evidence first.** A claim needs proof. Demonstrations stay labelled, and are never used as client results.
5. **No keyword stuffing.** Copy is written for a technical buyer.

## Services

Industries come from `industryCatalog`. Article numbers refer to the [editorial roadmap](editorial-roadmap.md).

| Page | Primary intent | Supporting topics | Distinct positioning | Buyer questions | Industries | Links | Articles |
|---|---|---|---|---|---|---|---|
| `/services/custom-software-development` | Hire a partner for bespoke software | Build vs buy, discovery, ownership | When off-the-shelf forces workarounds | When is custom worth it? Who owns the code? | FinTech, SaaS, Logistics | Architecture, Design, Quality | 1 |
| `/services/enterprise-software` | Build core business systems | ERP integration, audit, SSO | Integrates with everything, survives reorganisations | How do you integrate with what we have? | Enterprise | Legacy, Cloud, Architecture | 7 |
| `/services/web-development` | Build a complex web application | Performance budgets, accessibility, design systems | Portals and SaaS front ends | How is performance held over time? | Healthcare, E-commerce | Design, Mobile, Quality | 8 |
| `/services/mobile-development` | Build iOS and Android apps | Native vs cross-platform, offline, release pipelines | Offline, weekly releases | Native or React Native? | Healthcare, Logistics | Web, Design, Quality | 9 |
| `/services/desktop-development` | Build desktop software | Windows, macOS, Linux, signing, updates | Keyboard-heavy and device-connected work | Is desktop still right? | None named | Mobile, Legacy, Design | 10 |
| `/services/ai-engineering` | Add AI to a real product | Evaluation, guardrails, retrieval, cost | Engineering discipline, not demos | How do we measure quality? Control cost? | FinTech, Healthcare, SaaS, Logistics | Architecture, Cloud, Quality | 3 |
| `/services/cloud-devops` | Improve delivery and cloud platforms | CI/CD, observability, FinOps | Ship small, recover fast, see cost | How do we reduce cloud spend safely? | FinTech, E-commerce, SaaS, Enterprise, Logistics | Legacy, Architecture, Quality | 5 |
| `/services/legacy-modernization` | Modernise without a rewrite | Strangler fig, risk, migration | Incremental: understand, wrap, replace, retire | Rewrite or not? | Enterprise | Architecture, Cloud, Quality | 2 |
| `/services/quality-engineering` | Improve testing and release confidence | Test strategy, contract testing, performance | Quality inside delivery | Where does automation pay off? | FinTech, E-commerce | Cloud, Web, Legacy | 11 |
| `/services/architecture-consulting` | Get independent architecture advice | Reviews, due diligence, ADRs | Advice at turning points | When do we need a review? | SaaS, Enterprise | Legacy, Enterprise, Cloud | 4 |
| `/services/product-design` | Design a complex product | UX research, design systems | Designed with the engineers | How does design work with engineering? | Healthcare, E-commerce | Web, Mobile, Custom | 12 |
| `/services/dedicated-teams` | Extend a team with engineers | Team models, onboarding, staff augmentation vs teams | Joins your rituals, not a body shop | How is this different from outsourcing? | None named | Custom, Quality, Cloud | 6 |

Overview intent, "software engineering partner", belongs to `/` and `/services`. Home is the brand and positioning page, and `/services` compares capabilities.

## Industries

**All six are `noindex` until their claims clear.** No page may imply a client or completed project in that industry. Their "projects" are demonstrations.

| Page | Pain points on the page | Services | Themes | Expertise boundary |
|---|---|---|---|---|
| `/industries/fintech` | Real-time, audit, resilience, regulators | Custom, Cloud, AI, Quality | Ledgers, reconciliation, audit trails | Standards are named as context. No compliance certification or legal advice |
| `/industries/healthcare` | Safety, privacy, interoperability, interrupted work | Design, Mobile, Web, AI | Clinical UX, interoperability | Not a medical device maker, no clinical claims |
| `/industries/ecommerce` | Peak days, constant change | Web, Cloud, Design, Quality | Peak readiness, search and order flows | No revenue-uplift claims |
| `/industries/saas` | Multi-tenancy, reliability, unit economics | Architecture, Cloud, Custom, AI | Tenancy, enterprise readiness | No customer references |
| `/industries/enterprise` | Long-lived estates, integration, governance | Enterprise, Legacy, Architecture, Cloud | Incremental modernisation | No named estates |
| `/industries/logistics` | Routing, tracking, warehouse decisions | Mobile, Custom, Cloud, AI | Offline-first field apps, telematics | No delivery-time claims |

## Avoiding cannibalisation

| Overlap | Rule |
|---|---|
| Enterprise Software vs Enterprise industry | Service: what we build. Industry: the constraints of large organisations |
| Custom Software vs Web or Mobile | Custom: whether and why to build. Web and Mobile: the platform |
| Architecture vs Legacy | Architecture: advice. Legacy: delivering the migration |
| Dedicated Teams vs Packages | Teams: extending yours. Packages: a defined scope |
| Agent vs AI Engineering | Agent: the product concept. AI Engineering: client work |
| Service page vs article | Commercial intent goes to the service. Articles answer "how" and "why", and link across |

## Measurement

**None exists yet.** Search Console, and Yandex Webmaster if relevant, are for launch (SF-156), and analytics needs a decision (GAP-F03). Review after launch: queries per page, pages competing for one query, and pages with impressions and few clicks.
