# Content approval

For SF-156. Classification of every public route, from the registers built in SF-143 to SF-152. **Nothing is invented: no client, partnership, certification, metric or testimonial exists on the site.** The design's placeholders were removed or labelled.

| Route | Content | Status | Indexed at launch |
|---|---|---|---|
| `/` | Positioning, services summary, sample cards labelled as samples | **Founder approval required**: claims such as experience and team (GAP-C10) | Listed, pending that approval |
| `/services`, 12 service pages | Service descriptions, process, stack | **Founder approval required** (GAP-C10). Discovery price withheld | Listed, pending that approval |
| `/agent` | Product concept | **Founder approval required**: capabilities unverified (GAP-C01). ROI assumptions labelled | No |
| `/packages` | Packages, composition | **Founder approval required**: commercial terms | No |
| `/industries`, 6 pages | Constraints and approach | **Founder approval required**: industry claims. Standards named as context, no certification | No |
| `/work`, 3 cases | **Design samples**, labelled "Demonstration" | Must stay labelled. Never client work (GAP-C02) | No |
| `/about`, `/how-we-work`, `/technologies` | Company story and practice | **Founder approval required**: team and proof withheld | No |
| `/careers` | Culture, no roles | **Unpublished**: no live vacancy | No |
| `/careers/*` | No routes | **Deferred** | No |
| `/insights` | Empty state | **Unpublished**: no approved article | No |
| `/insights/*` | One draft, no route | **Deferred** | No |
| `/contact` | Form, unavailable in production | **Founder approval required**: response time, email, budget bands | No |
| `/contact/thank-you` | Confirmation | Verified behaviour | Never |
| Legal, 3 pages | Pending notice | **Legal review required** | No |
| 404 | Error page | Verified | Never |
| All, Russian | Draft translation | **Native review required** | No |

**If something can't be approved, withhold that route,** by keeping it out of `indexableRoutes` and, if needed, out of navigation. Don't rewrite it to sound verified.

Registers: [content and claims](../content/content-and-claims-register.md), plus the per-area registers under [`docs/content/`](../content/content-and-claims-register.md).
