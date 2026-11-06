# Portfolio attribution register

Every project on `/work`, for SF-148. Source: `Work.dc.html` and `CasePage.dc.html`, design version `1793953114-553b`. Claude Design was not modified.

**No verified client or internal project exists.** No client, permission, contract, screenshot or result has been supplied. All four Work routes are `noindex`, set by the pages.

## Classification

| Project | Source | Classification | Evidence | Published attribution | Asset rights | Founder approval required |
|---|---|---|---|---|---|---|
| Ledgerline | `Work`, `CasePage` Layout A | CONCEPT_PROJECT | Page note: "illustrative concepts". Tag: "Demonstration case study · illustrative". Text: "A demonstration of how we would…" | "Demonstration", on the card, the case hero and the next-project link | No client asset. Drawn in code | Confirm it is not based on a real client |
| Carepath | `Work`, `CasePage` Layout B | CONCEPT_PROJECT | As above. "Demonstration · illustrative" | As above | As above | As above. Also: is showing a clinical concept acceptable (see below)? |
| Routewise | `Work`, `CasePage` Layout C | CONCEPT_PROJECT, **with one correction** | Page note and tag as above. **But its overview read as real:** "Route planning that once took an evening now takes minutes" | As above. The overview now reads "A demonstration of route planning that takes minutes…" | As above | As above |
| Northbeam | `Work` card | CONCEPT_PROJECT, **lower confidence** | The page note and a "Demo" tag. **But the card said "full write-up pending approval"**, which implies a real client. GAP-C02 records "six projects… none real" | "Demonstration", "Concept only · no full case study" | No asset. Gradient only | **Confirm it is fictional** |
| Atlas Commerce | `Work` card | CONCEPT_PROJECT, **lower confidence** | As Northbeam | As Northbeam | As Northbeam | **Confirm it is fictional** |
| Meridian Works | `Work` card | CONCEPT_PROJECT, **lower confidence** | As Northbeam | As Northbeam | As Northbeam | **Confirm it is fictional** |

**Name risk.** These names were not checked against real companies or trademarks. Northbeam, Atlas Commerce, Meridian Works and the others may belong to someone, so check them before anything is indexed.

## Withheld

| Element in the design | Why | To restore |
|---|---|---|
| **Reference calls section:** "Don't take our word for it. Take theirs.", "we'll connect you with a CTO or product lead", "Request a reference call", client quote slot, name and role, `[NPS]`, `[x] yrs`, `[x]%` repeat clients | GAP-C02 decided these stay hidden until real clients exist. No reference, quote or figure exists | Real references, permission, and real figures |
| Page note: "They will be replaced with approved client work before launch." | A promise about the future. Replaced with "They are not client work." | Your decision |
| "Much of our work is under NDA and never appears here." | No evidence | Confirm it is true |
| "including the work we can't publish" | No evidence | Confirm it is true |

## Claims changed

| Where | In the design | Status | Published |
|---|---|---|---|
| Overview lead | "A selection of engagements… ended with software people rely on." | Implies real delivery | "Illustrative concepts… shows how we would approach it." |
| Cards | "Demo" | Too easy to miss | "Demonstration" |
| Overview CTA | "Your project could be next." | Implies a client list | "Tell us about your project." |
| Cases, facts | "Client: [Demonstration] …" | A fictional client | "Scenario: Fictional …" |
| Cases, facts | "[Illustrative] 9 months", "[Illustrative] 7 people" | Placeholder | "Illustrative · 9 months", "Illustrative · 7 people" |
| Cases, context and challenges | Past tense, as events that happened | Reads as a real project | Present tense, starting "In this scenario…" |
| Cases, approach | "Shadowed the team", "Rode along with drivers" | Reads as work done | "Shadow the team", "Ride along with drivers" |
| Mock-ups | `[98%]`, `[9m]`, EUR, USD and GBP figures, patient conditions | Fictional figures | "—", "Sample". "Chest pain" became "new symptoms" |
| Mock-up status | "Live" | Implies a running system | "Sample" |

### Results

**Every number is removed.** The design labelled these "Illustrative metrics — not client results", but they still read as results.

| Case | In the design | Published, as a design goal |
|---|---|---|
| Ledgerline | `[Same day]`, `[−80%]`, `[100%]`, `[Minutes]` | Continuous, Less, In-system, Faster |
| Carepath | `[−40%]`, `[1×]`, `[Minutes]`, AA | Less, Once, Faster, AA |
| Routewise | `[Minutes]`, `[−12%]`, Live, Offline | Faster, Less, Live, Offline |

The section's heading is now "What it aims to change", tagged "Design goals — not client results".

| Other figure | In the design | Published |
|---|---|---|
| Routewise solver benchmark | Bars at `[100%]`, `[92%]`, `[88%]`, "historical week" | "What we would measure": empty tracks, "Baseline", "To measure", "No benchmark has been run." |
| Before and after | "the week before and the quarter after go-live", "replace with the client's approved figures", `[x] hours` | "The intended shift": "Starting point" and "Intended", with "Nothing here is a measured result." |

**The before-and-after copy is the same on all three pages in the design**, and mentions reconciliation on pages that have none. It is reworded, not rewritten per project.

## Healthcare concept

Carepath shows triage rules, an LLM summary service and a sample triage queue. It is labelled a demonstration and "clinicians always make the decision". **Software of this kind may be a regulated medical device**, so legal should review it with the [Healthcare scenarios](industries-claims-register.md#healthcare).

## Other pages that show these projects

Home, Services and Industries already carry demonstration labels. With `/work` live, their case links are now active. The Home copy still describes them in the present tense as "a real-time treasury platform for a mid-market finance team", with a demo tag beside it. Not changed by this ticket.

## To publish real work

For each verified project, a founder supplies: the client's written permission, the factual attribution, real figures with their source, and approved assets. Its record here then changes to VERIFIED_CLIENT_PROJECT or VERIFIED_INTERNAL_PROJECT.
