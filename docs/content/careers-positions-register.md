# Careers positions register

Every vacancy and hiring statement on `/careers`, for SF-149. Source: `Careers.dc.html` and `Job.dc.html`, design version `1793953114-553b`. Claude Design was not modified.

**No vacancy is live.** The design marks all six roles "Sample listings · not live vacancies", and `Job.dc.html` says "Sample listing — not a live vacancy". No authoritative job description, recipient or privacy decision exists. `jobPositions` in `src/content/careers/positions.ts` is empty, so no `/careers/[slug]` page is generated and every slug returns 404. All routes are `noindex`, with no `JobPosting` markup.

## Positions

| Reference | Role in the design | Status | Published | Founder approval required |
|---|---|---|---|---|
| ENG-01 | Senior Backend Engineer (Kotlin), Remote · [Region], Full-time, [Salary band] | SAMPLE | **No** | A real description, location, salary decision |
| ENG-02 | Senior Frontend Engineer (React), Hybrid · [City], Full-time | SAMPLE | **No** | As above |
| ENG-03 | Cloud Platform Engineer, Remote · [Region], Full-time | SAMPLE | **No** | As above |
| DES-01 | Senior Product Designer, Hybrid · [City], Full-time | SAMPLE | **No** | As above |
| QA-01 | QA Automation Engineer, Remote · [Region], Full-time | SAMPLE | **No** | As above |
| DEL-01 | Delivery Lead, Hybrid · [City], Full-time | SAMPLE | **No** | As above |

The design gives no slugs, as `Job.dc.html` is one board (GAP-R01). Only ENG-01 has a written description.

## Applications

| Question | State |
|---|---|
| Application endpoint | **None.** The source's form shows "Application received" after a timer, with nothing sent. It is not implemented |
| Recruitment email | None approved |
| CV or personal-data storage | None. No privacy or retention decision exists (GAP-F02, GAP-I02) |
| Consent | The design has none (GAP-F02) |
| When a real role is added | "Apply for this role" goes to `/contact`, which is disabled until SF-151 |

## Withheld or changed

| In the design | Status | Published |
|---|---|---|
| Six sample rows, team filter, counts, "6 sample roles" | Sample | "No open roles right now", with no count and no filter |
| "Send a general application" | No way to apply | Removed |
| **Benefits section:** "Remote-first", "[Confirm policy]", "Scheduled time and budget", "[Local health…]", "[Holiday allowance]", "Transparent salary bands", equipment, career paths, guild | Unconfirmed, tagged "Details to be confirmed by HR" | **Withheld in full** |
| "We're building a team…", "Hard problems, senior colleagues" | Implies active hiring and an existing senior team | "We care about engineers, designers and delivery leads…" |
| "See open roles" | Leads to no roles | "Open roles" |
| "What working here feels like." | States a current experience | "What we want working here to feel like." |
| "Senior colleagues… who have shipped hard things before" | Unverified | "Good colleagues: pairing, design reviews and RFCs as everyday practice" |
| "within [three weeks]" | Placeholder | Removed |
| "Paid if take-home" | A commitment | Removed |
| "Productive in weeks, not months." | Outcome | "How we plan to bring people in." |
| "Laptop", "shipped to a client product", "our engineering ladder" | Unverified | "Accounts, tools and a buddy", "A real, reviewed change, shipped", "Written goals" |
| "Don't see your role? We hire for people, not just vacancies." | Implies hiring | "Interested anyway? No role is listed today." |

## The job template

`Job.dc.html` is implemented for real roles, without its form and without the "We review every application by hand" and "Reasonable adjustments" lines, which a founder should confirm. It was checked once against the source using a temporary copy of the sample role, which was removed before commit. See [company-careers-manual-qa.md](../qa/company-careers-manual-qa.md#job-template).

## To publish a role

1. A founder approves the description, team, location, employment type, and salary policy.
2. Decide how applications arrive, and the privacy and retention rules.
3. Add one `JobPosition`, with EN and RU copy, to `positions.ts`. Its page, list row and route follow from that.
4. Decide on `JobPosting` markup, using only real facts. Team filter with counts, from the design, can be added once there are enough roles.
