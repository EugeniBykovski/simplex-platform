# Content and claims register

**Approved design copy is the design baseline, not proof that a claim is true.** Source: design version `1793869596-167d`. Gap IDs refer to [design-gap-register.md](../design/design-gap-register.md).

The design handles this responsibly: it brackets most unknowns and labels demonstrations with `.tag-demo`. The main risk at implementation is that a label gets dropped during the build, or that an unbracketed claim passes as fact.

**Rule for every page ticket:** port `.tag-demo` labels and brackets faithfully, never fill a bracket with a guess, and never remove a demonstration label unless the content has become real.

## Approved product decisions that apply

- Case studies without verified clients stay clearly identified as demonstrations, and are not indexed as client success stories.
- Statistics, testimonials, certifications and business achievements are never invented.
- SimpleX Agent must not claim production capabilities that are not verified.
- Legal pages need owner and legal approval before production.

So anything bracketed below ships as supplied real data or is hidden, never filled in with an estimate.

## Agent copy changes (SF-144)

Each change from the design, with its evidence and published wording, is in [agent-claims-register.md](agent-claims-register.md).

## Homepage copy changes (SF-143)

Composition kept, wording changed. Listed in full in [homepage-visual-parity.md](../qa/homepage-visual-parity.md). Still in the Home copy and **awaiting owner confirmation:** "Our engineering handbook is part of the contract", "Senior engineers only", "Code and IP are yours", "NDA first", "Governed: every change approved by a SimpleX engineer".

## Status legend

| Status | Meaning |
|---|---|
| **APPROVED CONTENT** | Present in the design as final copy, with no factual claim that needs outside evidence |
| **NEEDS FACTUAL VERIFICATION** | Stated as fact, and only the owner can confirm it |
| **PLACEHOLDER** | Bracketed, or labelled sample, demo or illustrative |
| **MISSING** | Required, but absent from the source |

## APPROVED CONTENT

Editorial baseline, reviewable for tone but with no outside facts to verify.

| Content | Where | Note |
|---|---|---|
| Hero headlines, leads and section headings | All routes | Exact text in [route-registry.json](../architecture/route-registry.json) and the design source |
| Service descriptions: pains, capabilities, value, process, use cases | 12 `ServicePage` slugs | Unique per slug |
| Industry descriptions: challenges, opportunities, scenarios | 6 `IndustryPage` slugs | Unique per slug |
| Engineering values and philosophy | About, Home, How We Work | Opinion, not fact |
| Eight-stage method, cadence | How We Work | A commitment: see verification below |
| Technology directory and "Core" or "Selective" levels | Technologies, Home | Describes experience. **Owner should sanity-check the list** |
| Form labels, errors, empty states, system copy | All | |
| Sample article body | Article | Clearly marked sample, reusable if an author adopts it |

## NEEDS FACTUAL VERIFICATION

These read as facts. Most have no bracket, so they are easy to ship by accident.

| Claim | Where | Gap |
|---|---|---|
| The SimpleX Agent exists, ships "production-ready features", generates tests, deploys in three models. **Must not ship unverified** | Agent, Home, Nav mega menu, Services | GAP-C01 |
| "The repetitive 70%" | Agent | GAP-C10 |
| "No training on client code" | Agent | Flagged in the design: `[Confirm with legal]` |
| Launch stacks: TypeScript/Node, Java/Kotlin, .NET, Python, Go, Swift, Kotlin, Flutter, React Native | Agent | Flagged: `[Confirm final list.]` |
| "Adapters for 20+ frameworks" | Home | Flagged: `[confirm]` |
| "Senior engineers only", "Senior people, small teams" | Services, Home, About | GAP-C10 |
| "100% code and IP owned by the client", "Yours from day one" | About, Services | GAP-C10, plus legal |
| "2 wks maximum time between working demos" | About | GAP-C10 |
| "1 accountable lead per engagement" | About, Services | GAP-C10 |
| "A senior engineer reads every enquiry", "reply within one business day" | Contact, ThankYou, Nav | Flagged: `[confirm SLA]` |
| "Mutual NDA before kick-off", "SSO, MFA, access reviewed", "SAST, dependency and secret scanning in CI" | About | GAP-C10 |
| "We work inside your accounts; nothing leaves them" | About | An absolute claim. GAP-C10 |
| "Request our security pack" implies the pack exists | About | GAP-F06 |
| "We plan capacity weeks ahead" | Packages | GAP-F04 |
| Reference calls with a "CTO or product lead we've worked with" | Work | Implies real clients exist. GAP-C02 |
| Comparison with freelancers, agencies and in-house teams ("Senior sells, junior builds", "3–6 months to hire") | Services | GAP-C04 |
| Standards listed: PCI DSS, PSD2, DORA, SOC 2, HIPAA, GDPR, HL7 FHIR, ISO 27001, SOX, SAML, OIDC, EDI, GS1, WCAG 2.2 AA, European Accessibility Act | Industries, IndustryPage | Framed as "not certification claims". Confirm the experience behind them. GAP-C03 |
| WCAG 2.2 AA "as the baseline" | Services, Industries | The site itself should meet it |
| "We never sell personal data", "do not use advertising or cross-site tracking cookies" | LegalPage | Must match real practice. GAP-C09 |
| "Internal talks, RFCs and an open engineering handbook", "Our engineering handbook is part of the contract" | About, Careers, Home | Does the handbook exist? GAP-C10 |
| "Remote-first with optional office days", "Transparent salary bands" | Careers | Flagged `[Confirm]` |
| "Stable people, low turnover by design" | ServicePage | Flagged `[confirm]` |
| "© 2026 SimpleX" and the company being "international" | Footer, Main | GAP-C08 |

## PLACEHOLDER

### Demonstration and sample content

| Content | Where | Marking in the design |
|---|---|---|
| Ledgerline, Carepath, Routewise (full cases) | Work, CasePage, Home, ServicePage, IndustryPage | "Demonstration case study · illustrative". `[Demonstration]` client, `[Illustrative]` duration and team |
| Northbeam, Atlas Commerce, Meridian Works (cards) | Work | "Demonstration content" |
| All case metrics: `[−80%]`, `[−40%]`, `[−12%]`, `[98%]`, `[92%]`, `[88%]` | CasePage | "Illustrative metrics — not client results" |
| Before and after comparison | CasePage | "Illustrative — replace with the client's approved figures" |
| Six roles: ENG-01 to ENG-03, DES-01, QA-01, DEL-01 | Careers, Job | "Sample listings · not live vacancies" |
| Articles and the playbook | Insights, Article, Home | "Sample article" |
| Technology radar | Technologies | "Sample radar for layout" |
| Sprint report and dashboard figures | How We Work | "Illustrative" |
| Availability | Packages | "Updated weekly · sample" |
| Booking slots | Contact | "Sample availability" |
| Leadership profiles | About | "Placeholder profiles · awaiting real team" |
| Mock UI data (orders, patients, routes, builds) | Home, Agent, Packages, ServicePage, CasePage | Fictional interface content |
| Contact form sample (Alex Morgan, Northwind Labs) | Contact | Placeholder and prototype data only |

### Bracketed placeholders, by composition

Extracted from markup and evaluated slug data. `[Client quote…]` and similar must be supplied, not written.

| Composition | Placeholders |
|---|---|
| About | `[Founding year and founder story to be supplied.]`, `[0:0]`, `[to be confirmed]`, `[Name]`, `[URL]`, `[Details of learning time and budget to be confirmed.]`, `[Certifications]`, `[ISO 27001 / SOC 2 — list only if held]`, `[Chief Executive Officer]`, `[Chief Technology Officer]`, `[Head of Design]`, `[Head of Delivery]` |
| Agent | `[86%]`, `[Confirm with legal]`, `[Confirm final list.]` |
| Article | `[Author name]`, `[Role]`, `[Publish date]` |
| Careers | `[three weeks]`, `[Region]`, `[City]`, `[Confirm policy]`, `[Confirm]`, `[Local health and wellbeing benefits]`, `[Holiday allowance]`, `[Confirm approach]` |
| CasePage | `[Demonstration]`, `[Illustrative]`, `[98%]`, `[Same day]`, `[−80%]`, `[100%]`, `[Minutes]`, `[9m]`, `[−40%]`, `[1×]`, `[−12%]`, `[92%]`, `[88%]` |
| Contact | `[Confirm response commitment]`, `[hello@your-domain.com]`, `[€50k]`, `[€50k – €150k]`, `[€150k – €500k]`, `[€500k+]`, `[spam protection]` |
| Footer | `[hello@your-domain.com]`, `[URL]`, `[Registered company details]` |
| Home | `[confirm]`, `[128]`, `[24]`, `[Team composition per engagement]`, `[Author name]`, `[Publish date]`, `[x–y]`, `[€ band]`, `[confirm SLA]` |
| HowWeWork | `[2.1d]`, `[18]`, `[3%]`, `[86%]`, `[42]`, `[11]`, `[48%]`, `[date]`, `[Locations and time-zone coverage to be confirmed.]` |
| Industries | `[ISO 27001 / SOC 2 — if certified]` |
| IndustryPage | `[List SimpleX certifications if held.]`, `[confirm jurisdiction]` |
| Insights | `[Article content shown is sample editorial for layout purposes.]`, `[Author name]`, `[Role]`, `[Date]`, `[Author]`, `[Privacy policy link]` |
| Job | `[Region]`, `[Salary band]`, `[three weeks]`, `[Band]`, `[five working days]`, `[City]` |
| LegalPage | `[date]`, `[x.x]`, `[legal@your-domain.com]`, `[Registered company name, number and address]`, `[registered company name]`, `[Registered address and company number.]`, `[Map each purpose to a lawful basis.]`, `[List processor categories.]`, `[period]`, `[privacy@your-domain.com]`, `[Name the analytics provider.]`, `[Acceptable use terms.]`, `[Licensing terms.]`, `[Limitation of liability — to be drafted by counsel.]`, `[Jurisdiction and governing law.]` |
| Nav | `[confirm SLA]` |
| Packages | `[1,284]`, `[€00]`, `[128]`, `[24]`, `[typical first release: x weeks]`, `[86%]`, `[24 / 26]`, `[0,000]`, `[000]`, `[€0k]`, `[indicative: 5–8 people]`, `[date]`, `[5–8]`, `[x weeks]` |
| ServicePage | `[87%]`, `[128]`, `[24]`, `[0.94]`, `[0.91]`, `[0 / 1,200]`, `[1.8s]`, `[€0.00]`, `[Name]`, `[€ x]`, `[Legacy platforms — confirm]`, `[confirm]`, `[2m 14s]`, `[3m 02s]` |
| Services | `[confirm typical lead time]` |
| Technologies | `[quarter]` |
| ThankYou | `[confirm]` |
| Work | `[Client quote — to be supplied with permission. One or two sentences on the outcome and how the team worked.]`, `[Name]`, `[Role, Company · Industry]`, `[NPS]` |

## MISSING

Required, and absent from the source.

| Item | Blocks | Gap |
|---|---|---|
| Production domain | Canonicals, email, schema | GAP-C08 |
| Legal company name, registration, address | Footer, legal, schema | GAP-C08 |
| Contact, privacy and legal email addresses | Forms, footer, legal | GAP-C08 |
| Social profile URLs | Footer, schema | GAP-C08 |
| Response-time commitment | Contact, ThankYou, Nav | GAP-C08 |
| Budget bands and currency | Contact | GAP-C08 |
| Spam-protection wording | Contact | [contact-and-email.md](../architecture/contact-and-email.md) |
| Founding year and story | About | GAP-C05 |
| Leadership names, roles, portraits, LinkedIn | About | GAP-C05 |
| Team and office photography | About | GAP-C05 |
| Real client case studies, permissions, quote, NPS, repeat rate | Work, Home | GAP-C02 |
| Package durations, sizes, any prices | Packages, Services | GAP-F04 |
| Discovery sprint price `[€ x]` | ServicePage | GAP-F07 |
| Delivery locations and time-zone coverage | How We Work | GAP-C10 |
| Live vacancies, salary bands, benefits, locations | Careers | GAP-C06 |
| Article authors, dates, bodies for 9 titles | Insights | GAP-C07 |
| Playbook PDF | Insights | GAP-A03 |
| Security pack | About | GAP-F06 |
| Privacy, cookie and terms text approved by counsel | Legal | GAP-C09 |
| Meta descriptions and social images | All | GAP-S01, GAP-A02 |
| **All Russian copy** | `/ru` | GAP-I01 |

## Testimonials and pricing

**There are no approved testimonials, client logos, client names or review ratings anywhere in the design,** only one bracketed quote slot on Work. **There are no approved prices.** Every price or budget is bracketed. Package pricing does not exist. Do not imply otherwise in copy or structured data.
