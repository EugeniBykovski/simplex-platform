# Editorial roadmap

Proposed for SF-153. **These are briefs, not articles.** Nothing is written, published or attributed. Titles are working titles. Publishing follows the workflow in [insights-editorial-register.md](../content/insights-editorial-register.md): a founder confirms the text, slug, author and date, then sets `published`. Status for all: **Not started, not approved. Author unassigned.**

Priority reflects how directly a piece supports a page that is already eligible, and how easily it can be written from real experience. Search volume is unverified. Article 2 builds on the existing unapproved draft, "The quiet cost of a distributed monolith".

**Every piece needs its author's real experience.** Where that is missing, drop it, rather than filling it with generic advice.

## Priority 1

| # | Working title | Reader | Intent | Core question | Unique value | Outline | Service | Links | Evidence required |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Build or buy: five questions before custom software | CTO, founder | Informational, leaning commercial | When does custom pay for itself? | A decision method, not a sales case | Workarounds as a signal; cost over time; differentiation; ownership; when to buy | Custom Software | Architecture, Product Design | Real decisions, including times the advice was to buy |
| 2 | Recognising a distributed monolith, and three ways out | Engineering lead | Informational | Why are our microservices still deployed together? | Diagnosis from your own change history | Symptoms; measuring co-change; three paths; what not to do | Architecture | Legacy, Cloud | Author's experience. Replace the draft's unidentified `co-change-report` tool with something real |
| 3 | Evaluating LLM features before they reach users | Product engineer | Informational | How do we know it works? | Evaluation as engineering practice | Test sets; offline and online; guardrails; cost; regression | AI Engineering | Quality, Cloud | Real evaluation practice. No invented accuracy numbers |
| 4 | Architecture decision records people read | Tech lead | Informational | How do we keep decisions usable? | A format that survives real teams | Why they rot; minimum format; where they live; review | Architecture | How We Work | Team's real template |
| 5 | FinOps for product teams: cost as a feature | Engineering manager | Informational | How do we control spend without slowing down? | Cost inside delivery | Visibility; ownership; budgets; design choices | Cloud & DevOps | Architecture | Real, anonymised figures, or none. No invented savings |
| 6 | Dedicated team or staff augmentation? | CTO | Commercial | Which model suits us? | Honest trade-offs, including when neither fits | Accountability; onboarding; cost; exit | Dedicated Teams | Custom Software, How We Work | The engagement models actually offered |

## Priority 2

| # | Working title | Reader | Intent | Core question | Unique value | Outline | Service | Links | Evidence required |
|---|---|---|---|---|---|---|---|---|---|
| 7 | Strangler fig, step by step | Architect | Informational | How do we replace a system while it runs? | The unglamorous parts: data and cutover | Seams; routing; data sync; retirement | Legacy Modernization | Enterprise Software | Author's migration experience |
| 8 | Performance budgets that survive a roadmap | Front-end lead | Informational | How do we stop gradual slowdown? | Enforcement, not targets | Choosing budgets; CI; trade-offs | Web Development | Quality | Real measurements. This site's own are lab values |
| 9 | Native or React Native: how to decide | Product lead | Informational | Which fits our product? | Criteria over preference | Device needs; team; offline; release | Mobile Development | Web, Packages | Real project experience |
| 10 | Is desktop still the right choice? | Operations lead | Informational | When does desktop beat web? | Named cases: devices, offline, keyboard | Criteria; signing; updates | Desktop | Mobile, Legacy | Real or clearly hypothetical cases |
| 11 | Contract testing: release independently, safely | QA lead | Informational | How do we release without full-system tests? | Where it helps, and doesn't | Problem; contracts; pipelines; limits | Quality Engineering | Cloud & DevOps | Working examples |
| 12 | Designing dashboards for decisions, not data | Product designer | Informational | Why does nobody use our dashboard? | Starting from the decision | Decision first; hierarchy; states | Product Design | Web Development | Real, permitted examples |

## Priority 3, after industry claims clear

| # | Working title | Reader | Intent | Core question | Unique value | Outline | Service | Links | Evidence required |
|---|---|---|---|---|---|---|---|---|---|
| 13 | Audit trails that regulators and engineers can both use | FinTech CTO | Informational | What makes a ledger auditable? | Design patterns. **Not compliance advice** | Immutability; reconciliation; access | Custom Software | FinTech | Counsel or expert review |
| 14 | Multi-tenancy: choosing an isolation model | SaaS architect | Informational | Shared or separate? | Trade-offs by stage | Models; noisy neighbours; enterprise demands | Architecture | SaaS | Real experience |
| 15 | Designing for interrupted clinical work | Health product lead | Informational | How do we design for interruption? | UX patterns. **No clinical claims** | Context; recovery; safety | Product Design | Healthcare | Clinical review |
| 16 | Preparing a storefront for peak days | E-commerce lead | Informational | What breaks first? | A readiness checklist | Load; degradation; rehearsal | Cloud & DevOps | E-commerce | Real, permitted data |

## Before writing starts

1. Name the authors, with real roles (register decision 3).
2. Adopt, rewrite or drop the sample article.
3. Confirm which themes reflect real company experience, and remove the rest.
4. Decide on Russian: translate later through the same approval, never automatically.
