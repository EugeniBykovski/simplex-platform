# SimpleX Agent claims register

Record for SF-144. **No Agent capability has been verified** (GAP-C01). Nothing in the repository or the design shows that the product exists, runs in production, or has customers. Product decision 3 forbids unverified production claims, so this page describes design intent, and `/agent` stays `noindex`.

The design says so itself: "Product details illustrative · confirm before launch". The published page keeps that label, without the internal note.

**The owner confirms what is true, and this copy then changes.** Russian follows the same wording and is an unreviewed draft.

## Changed from the design

| Section | Design copy | Evidence | Published wording |
|---|---|---|---|
| Hero label | "SimpleX Agent · v1" | No release exists to version | "SimpleX Agent" |
| Hero lead | "connects to your repositories… spins up production-ready ecosystems" | None | "is designed to connect… generate services, pipelines, infrastructure and features as reviewable changes" |
| Hero, final CTA | "Book an agent demo" | No demo or booking system verified (decision 5) | "Ask about the agent" |
| Final CTA | "See it work on your code." "A 45-minute demo on a repository of your choice" | Same | "Talk to us about your code." with a plain invitation to talk |
| ROI CTA | "Book a pilot" | Same | "Ask about a pilot" |
| Agent window | "Working", "Read 1,284 files · mapped 9 domains", "PR #412", "48 tests generated · all passing" | Invented figures, even though fictional | "Illustrative" tag, with the numbers removed |
| Widgets | "48", "generated · passing", "auto-detected" | Same | A tick, "for review", "example stack" |
| Stack title | "See the ecosystem it builds." | Not verified | "See an example blueprint." |
| Stack panel | "Detected", "blueprint" | Implies live detection | "Example", "example blueprint", and a note: not a list of live integrations |
| Stack lead | "reads your code… generates an ecosystem blueprint" | Not verified | "is designed to read… produce" |
| How, tag and lead | "How it works", "The agent does the heavy lifting" | Not verified | "How it is designed to work", "is designed to do" |
| How, step 04 | "Deploys through your pipelines… and keeps maintaining." | Claims autonomous deployment and upkeep | "Changes go through your own pipelines… with a person approving each one." |
| Capabilities | "What the agent does", "The repetitive 70%" | No data (GAP-C10) | "What the agent is designed to do", "The repetitive work" |
| Tests ring | "[86%]", "Coverage target, illustrative" | Placeholder | "Goal", "Coverage target agreed with your team" |
| Observability | "p95 within SLO", "ok" | Fictional status | Marked "example" |
| Embed lead | "The same engine powers" | Not verified | "is intended to power" |
| Embed list | "SDKs for web… and mobile", "Runs in your cloud; your data stays in your accounts" | No SDK or cloud deployment verified | "Planned SDKs", "Designed to run in your cloud" |
| Embed visual | Unlabelled mock-up | Could pass for a product | "Conceptual mock-up" tag |
| Deployment | "Three deployment models", "Governance stays the same" | Not verified | "Three proposed deployment models", "are meant to apply", "Availability is confirmed case by case", "Proposed models" tag |
| Model 01 | "SimpleX runs the agent", "Fastest start" | Unverified, and an unsupported comparison | "would run", "Quick to start" |
| Model 02 | "Data never leaves" | An absolute security guarantee | "Data kept in your accounts", under "is designed to run" |
| Model 03 | "Web & mobile SDKs", "Evaluations included" | Not verified | "Planned web & mobile SDKs", "Evaluations by design" |
| Governance | "Every action, prompt and tool call recorded", "Scoped, revocable access" | Not verified | "Designed to record", "Designed for scoped" |
| Governance | "Your code stays yours", "No training on client code. [Confirm with legal]" | Unconfirmed legal commitment | "Your code", "Terms for client code, including model training, are agreed in writing first" |
| FAQ, stacks | "supported… at launch. [Confirm final list.]" | Unconfirmed | "The final list is not confirmed yet" |
| FAQ, models | "We select models per task" | Not verified | "designed to be model-agnostic, so models can be chosen" |
| FAQ, start | "the agent… ships a first reviewed feature" | Not verified | "We propose… work towards a first reviewed feature. Ask us about current availability first" |
| ROI lead, label | "validate it in a two-week pilot", "Estimated every month" | Estimate only | "only a pilot… could validate", "Illustrative estimate, every month" |
| ROI rows | "Pilot length", "What you keep: Every PR and pipeline" | An unconfirmed IP commitment | "Proposed pilot", "Pilot output: Reviewable PRs and pipelines" |

## Kept, and needing owner confirmation

| Claim | Why it stayed | Owner action |
|---|---|---|
| "A SimpleX engineer reviews every change before it ships" | Central to the design, and a commitment the company can choose to make | Confirm |
| "Two weeks" pilot, "Fixed scope", "Clear go / no-go" | A proposal, labelled as one | Confirm the offer exists |
| **40% assumption** in the ROI estimator, with 2–120 engineers and a €9,000 default | The visitor enters the inputs, and the page states it is "a modelling assumption, not a measured result or a guarantee" | Provide evidence, or remove the widget (GAP-F07) |
| "Read-only access… Scoped, revocable, logged" in step 01 | Under the "designed to work" heading | Confirm the design intent |
| Stack names in blueprints and the FAQ | Labelled examples | Confirm the final list |
| Sample data in the mock-ups: `acme/checkout`, churn question | Fictional, inside labelled illustrations | None, unless the labels go |
| "New" badge | Navigation label from the design | Confirm |

## Never added

No customers, testimonials, benchmarks, revenue, certifications, uptime figures, data residency promises or Product ratings. No live chat, simulated agent or fake booking. No structured data, because there are no verified product facts to mark up.
