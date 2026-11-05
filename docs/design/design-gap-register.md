# Design gap register

Claude Design was not modified. **Nothing here is resolved**, except where the status column says so. Severity: **Blocker** stops launch; **High** needs a decision before its ticket starts; **Medium** can be handled during the ticket; **Low** is cleanup.

"Owner" means the owner's approval or input is needed.

## Decisions for the owner

The items that most affect the plan, in priority order:

1. **GAP-C02** Demonstration case studies: what ships at launch?
2. **GAP-F01** Scheduler: pick a provider, or remove the widget?
3. **GAP-C08** Domain, company details and contact email: these block email, SEO and legal.
4. **GAP-I02** Who is `/ru` for? Depends on legal advice if it targets Russia.
5. **GAP-C01** SimpleX Agent: is it a real product today?
6. **GAP-F03** Analytics and cookie consent.

## Functional

| ID | Artboard | Gap | Severity | Suggested solution | Owner | Ticket |
|---|---|---|---|---|---|---|
| GAP-F01 | Contact | Scheduler shows fake availability and says "Booked… the invite is on its way". No provider exists, and slots are fixed to CET despite promising the visitor's time zone | Blocker | Adopt Cal.com or Calendly, or remove the widget. See [contact-and-email.md](../architecture/contact-and-email.md) | Yes | SF-151 |
| GAP-F02 | Job | Application form has no consent checkbox, no file upload (URL only), no endpoint. It accepts blank CV and notes | High | Add consent. Send by Resend. Confirm URL-only is intended | Yes | SF-149 |
| GAP-F03 | Components, LegalPage, Footer | Cookie banner exists only as a specimen on Components, and on no page. "Cookie settings" just links to the policy. Analytics provider unnamed | High | Decide on analytics first. If none or cookieless, a banner may not be needed: confirm with counsel. Otherwise place the banner and wire preferences | Yes | SF-152 |
| GAP-F04 | Packages | Availability block shows dates and capacity bars. The board itself says "never show invented availability" | High | Remove, or source manually from real resourcing data | Yes | SF-146 |
| GAP-F05 | NotFound | Search form does nothing | Medium | Remove, or link to a small client-side index of pages and articles, with no new service | Yes | SF-152 |
| GAP-F06 | About, Packages, Work, Agent, Home, Contact | Several CTAs ("Request our security pack", "Reserve a start date", "Request a reference call", "Book an agent demo") all land on the generic form, losing their intent. Promises assets that do not exist, such as the security pack | Medium | Pass an `intent` query parameter to preselect form context. Confirm each promise is real | Yes | SF-151 |
| GAP-F07 | Home, Agent | Estimators compute team shape, hours and EUR values, and show `[x–y] weeks`, `[€ band]`. ROI assumes 40% and EUR 9000/month. Neither submits anywhere | High | Get real ranges, or remove outputs. Keep the "illustrative" labels. Consider passing results to the form | Yes | SF-143, SF-144 |
| GAP-F08 | Contact | `budget` and `timeline` selects are unbound. Inputs lack `name`. 2000-char limit not enforced. `.proto-bar` must not ship | Medium | Fix in implementation | No | SF-151 |
| GAP-F09 | ThankYou, Contact | `ThankYou` promises a confirmation email, and there are two success screens | Medium | Send one, keep both screens as designed | No | SF-151 |
| GAP-F10 | Insights | Load more fakes a 900 ms delay with all content local. Article search covers only title and description | Low | Show all or paginate without artificial delay. Keep skeleton only if there is a real wait | No | SF-150 |

## Routes and navigation

| ID | Artboard | Gap | Severity | Suggested solution | Owner | Ticket |
|---|---|---|---|---|---|---|
| GAP-R01 | Careers, Job, Insights, Article | Patterns approved, but no slug values exist. All cards link to one sample board | High | Slug rule in [seo-architecture.md](../seo/seo-architecture.md). Real slugs arrive with real content | Yes | SF-149, SF-150 |
| GAP-R02 | Nav, HomeMenuMobile | Mobile menu lists 8 of 13 service items, with different labels ("Desktop Apps" vs "Desktop Applications") and no industry sub-links. Behaviour for Escape, focus trap, scroll lock and short screens is not specified | Medium | Keep as drawn for links, unless owner wants parity. Add standard menu behaviour as an adaptation | Yes | SF-142 |
| GAP-R03 | NotFound | Framework limit: thrown `notFound()` gives a correct 404 status but an empty HTML shell until JavaScript runs. Verified in Next.js 16.4.5 | Low | Accept for launch, since crawlers get the status and JavaScript users see the page. Re-test on Next.js upgrades | No | SF-152 |
| GAP-R04 | Nav | No `active` state for `/technologies` or `/contact`, and `/technologies` is footer-only | Low | Keep, or add a link if the owner wants it | Yes | SF-142 |

## Content and claims

Full list: [content-and-claims-register.md](../content/content-and-claims-register.md).

| ID | Artboard | Gap | Severity | Suggested solution | Owner | Ticket |
|---|---|---|---|---|---|---|
| GAP-C01 | Agent, Home, Nav, Services | The SimpleX Agent is presented as an available product. The Agent board itself says "Product details illustrative · confirm before launch" | Blocker | Owner confirms what exists. Label or reduce the page accordingly | Yes | SF-144 |
| GAP-C02 | Work, CasePage, Home, ServicePage, IndustryPage | Six projects, three full cases, all invented and labelled demonstration | Blocker | Replace with approved work, or launch with labelled examples and `noindex`. Never remove the labels without real clients | Yes | SF-148 |
| GAP-C03 | Industries, IndustryPage, About | Lists PCI DSS, HIPAA, SOC 2, ISO 27001 and others as standards designed for. SimpleX's own certifications are unknown | High | Keep "not certification claims" wording. Confirm any held | Yes | SF-147 |
| GAP-C04 | Services | Comparison table makes statements about freelancers, agencies and in-house hiring ("Senior sells, junior builds") | Medium | Legal or editorial review. It is labelled a positioning summary | Yes | SF-145 |
| GAP-C05 | About | Founding story, leaders, portraits, team and office photography all missing | High | Supply. No stock imagery, per the design's own note | Yes | SF-149 |
| GAP-C06 | Careers, Job | Sample roles, benefits, locations, salary bands | High | Supply real data. Hide listings until then | Yes | SF-149 |
| GAP-C07 | Insights, Article, Home | One written sample article, nine titles only, no authors or dates | High | Write or cut. Launch with what is real | Yes | SF-150 |
| GAP-C08 | Footer, Contact, LegalPage, Nav | Domain, emails, company name and registration, social URLs, SLA, budget bands and currency: all placeholders | Blocker | Supply. Blocks Resend domain, canonicals, schema and legal | Yes | SF-141, SF-151 |
| GAP-C09 | LegalPage | Partial text with bracketed gaps. The design says counsel must review | Blocker | Counsel drafts and approves, in each language | Yes | SF-152 |
| GAP-C10 | Various | Absolute claims with no brackets, so easy to miss: "Senior engineers only", "100% code and IP", "2 wks between demos", "A senior engineer reads every enquiry", "We never sell personal data", "The repetitive 70%" | High | Owner confirms each is true and will stay true | Yes | Page tickets |

## Assets

| ID | Artboard | Gap | Severity | Suggested solution | Owner | Ticket |
|---|---|---|---|---|---|---|
| GAP-A01 | Global | Provenance of the seven `img/` backgrounds and the typeface behind outlined logos is undocumented. The README calls procedural-looking images "photography" | Medium | Owner confirms origin. Do not describe them as photography | Yes | SF-154 |
| GAP-A02 | Global | No Open Graph images, favicon set, web manifest or `.ico` | Medium | Generate from approved marks in SF-154. New social art needs approval | Yes | SF-154 |
| GAP-A03 | Insights | The "24-page PDF" playbook does not exist | High | Write it, or hide the block | Yes | SF-150 |

## Responsive

| ID | Artboard | Gap | Severity | Suggested solution | Owner | Ticket |
|---|---|---|---|---|---|---|
| GAP-V01 | All | Only three routes have a 768 board | Low | CSS-derived behaviour applies. Review by eye | No | SF-155 |
| GAP-V02 | case-carepath, case-routewise | Layouts B and C have **no mobile board** and unique markup | High | Implement from CSS rules, label as CSS-derived, get owner review | Yes | SF-148 |
| GAP-V03 | All | No boards at 320, 1024, 1280, 1920, 2560 | Low | Render the design source at those widths as a reference ([strategy](../qa/visual-regression-strategy.md)) | No | SF-155 |
| GAP-V04 | All | No Russian design exists, and Russian text can break `.btn` nowrap, line masks, header fit and display floors | High | [i18n.md](../architecture/i18n.md) adaptations, owner reviews on `ru` | Yes | SF-142, page tickets |
| GAP-V05 | Handoff | Handoff claims safe-area handling and mobile blur caps that the CSS lacks | Medium | Add as adaptations | No | SF-142, SF-154 |
| GAP-V06 | Home | Fixed 960 px sticky hero on short laptops (768 and 900 px tall) is not shown on any board | Medium | Test at 1366 × 768. Change only if it looks wrong, with owner approval | Yes | SF-143 |

## Motion

| ID | Artboard | Gap | Severity | Suggested solution | Owner | Ticket |
|---|---|---|---|---|---|---|
| GAP-M01 | Handoff | Page transitions are recommended but unspecified | Low | Optional enhancement | No | SF-142 |
| GAP-M02 | Global | Firefox lacks scroll-driven animation by default, so no scroll motion there | Low | Accept. Final states work | No | SF-155 |
| GAP-M03 | Global | `.pulse` keyframes use the retired mint colour | Low | Confirm the intent, likely keep green as a status colour | Yes | SF-142 |
| GAP-M04 | Handoff | Handoff prose differs from CSS: reveal 36 px with fade vs 48 px with none | Low | CSS wins | No | SF-142 |
| GAP-M05 | Global | Playback was not reviewed in SF-140, only source | Medium | Compare by eye in SF-155 | No | SF-155 |

## Design system

| ID | Artboard | Gap | Severity | Suggested solution | Owner | Ticket |
|---|---|---|---|---|---|---|
| GAP-D01 | Foundations | Version labels disagree: 1.0, 1.1, 1.4.0, 1.9 | Low | Pin the artifact version. Treat content as v1.9 | No | SF-142 |
| GAP-D02 | System, UI Kit | Redefined rules and dead code from accretion: legacy aliases, `.si-glyph`, blob keyframes, unused `.hero-chip`, about 90 kit-only classes | Medium | Resolve the cascade and drop unused rules. Check by rendering, not by assumption | No | SF-142 |
| GAP-D03 | Handoff | Mentions Storybook compatibility, which is not approved. The Technologies page listing Storybook as a skill is unrelated and fine | Low | Ignore for tooling | No | SF-142 |
| GAP-D04 | Global | `.sx` is a size container. Check that `position: fixed` children (banner, menu) resolve against the viewport in all target browsers | Medium | Test early in SF-142 | No | SF-142 |
| GAP-D05 | Global | No `backdrop-filter` fallback, and missing arrow-key handling on tabs | Medium | Add `@supports` fallback and keyboard support | No | SF-142 |

## Internationalisation

| ID | Artboard | Gap | Severity | Suggested solution | Owner | Ticket |
|---|---|---|---|---|---|---|
| GAP-I01 | All | No Russian copy or named reviewer. Current catalogues are a machine draft | High | Name a reviewer. Translate with each page | Yes | Page tickets |
| GAP-I02 | Contact, Job, Legal | Legal position of collecting data from Russian users, including Federal Law 152-FZ and processor choice, has not been assessed | High | Counsel, before any Russian form goes live | Yes | SF-151, SF-152 |
| GAP-I03 | All | Launch scope for Russian undecided | Medium | Recommended order in [i18n.md](../architecture/i18n.md) | Yes | SF-156 |
| GAP-I04 | Slug templates | Design strings interpolate names into sentences, which fails Russian grammar | Medium | Full per-slug sentences | No | SF-145, SF-147 |

## SEO and process

| ID | Artboard | Gap | Severity | Suggested solution | Owner | Ticket |
|---|---|---|---|---|---|---|
| GAP-S01 | All | No metadata in the design | Medium | Approve the proposals in [page-seo-matrix.md](../seo/page-seo-matrix.md) | Yes | SF-153 |
| GAP-S02 | n/a | `EugeniBykovski/simplex-web` is a separate older SimpleX site. Is it live on the target domain? | Medium | If so, plan redirects | Yes | SF-153 |
| GAP-Q01 | n/a | Reference capture depends on the design runtime | Medium | Spike at the start of SF-155 | No | SF-155 |
| GAP-L01 | Audit | The design was benchmarked against a named company's site. The board records that its logo, copy and content were deliberately not copied | Low | Do not ship the Audit board. Owner may want a brief review of overall resemblance | Yes | SF-156 |
| GAP-J01 | n/a | **Jira was not accessible in SF-140.** The roadmap uses the ticket names in the SF-140 brief | High | Reconcile with real scope in Jira before SF-141 | Yes | SF-141 |
