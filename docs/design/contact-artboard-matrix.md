# Contact artboard matrix

Inventory for SF-151, from the structured artifact, design version `1793953114-553b`. Claude Design was not modified.

## What the design contains

**Five boards, two compositions, two routes.** `ContactTablet`, `ContactMobile` and `ThankYouMobile` import their desktop board at a smaller frame, so they hold no separate content. There is no `ThankYou` tablet board.

| Artboard | Device | Frame | Route |
|---|---|---|---|
| `Contact.dc.html` | Desktop | 1440 × 3235 | `/contact` |
| `ContactTablet.dc.html` | Tablet | 768 × 4530 | `/contact` |
| `ContactMobile.dc.html` | Mobile | 390 × 5262 | `/contact` |
| `ThankYou.dc.html` | Desktop | 1440 × 2525 | `/contact/thank-you` |
| `ThankYouMobile.dc.html` | Mobile | 390 × 3467 | `/contact/thank-you` |

## Artboard, section, field, validation, component, route and status

The full contract is in [contact-and-email.md](../architecture/contact-and-email.md). Components are in `src/components/sections/contact/`.

| Artboard | Section | Field | Validation | Component | Route | Status |
|---|---|---|---|---|---|---|
| Contact | Intro | | | `ContactIntro`, `Breadcrumbs` | `/contact` | Implemented, copy changed |
| Contact | What happens next | | | `ContactIntro` | `/contact` | Implemented, response time removed |
| Contact | Prefer email? | | | | `/contact` | **Withheld**: no real address (GAP-C08) |
| Contact | Careers line | | | `ContactIntro` | `/contact` | Implemented |
| Contact | Form | What can we help with? | Optional. Allow-list, 8 values | `ContactFormPanel`, native checkboxes | `/contact` | Implemented (GAP-D36) |
| Contact | Form | Name | Required, 200 max, no controls | `TextField` | `/contact` | Implemented |
| Contact | Form | Work email | Required, 254 max, one address, no header characters | `TextField` | `/contact` | Implemented |
| Contact | Form | Company | Optional, 200 max, no controls | `TextField` | `/contact` | Implemented |
| Contact | Form | Project description | Required, 20 to 2000, line breaks and tabs only | `TextArea` | `/contact` | Implemented |
| Contact | Form | Budget range | Allow-list, 5 values | `Select` | `/contact` | Implemented, bands unconfirmed (GAP-C08) |
| Contact | Form | Expected timeline | Allow-list, 5 values | `Select` | `/contact` | Implemented |
| Contact | Form | Consent | Must be checked. Value `yes` only | `Checkbox` | `/contact` | Implemented, policy link waits for SF-152 |
| | Form | `website`, the honeypot | Must be empty | `ContactFormPanel` | `/contact` | Added |
| Contact | Form states | Idle, validation, loading, success, network error | | `ContactFormPanel` | `/contact` | Implemented, with five more |
| Contact | `.proto-bar` | | | | | **Not shipped**, review tool |
| Contact | Scheduler | Day, slot | | `ContactScheduler` | `/contact` | **Composition only**, no calendar (GAP-F01) |
| ThankYou | Hero | | Signed cookie picks the state | `ThankYouHero` | `/contact/thank-you` | Implemented, three states |
| ThankYou | Steps | | | `ThankYouHero` | `/contact/thank-you` | Implemented, times and confirmation email removed |
| ThankYou | While you wait | | | `ThankYouMore` | `/contact/thank-you` | Implemented, retitled |

## Added states

The design has five form states. The brief needs these too, all reachable through [mock mode](../architecture/contact-and-email.md#mock-mode):

| State | Source |
|---|---|
| Unavailable, on load and after a provider configuration error | New |
| Rate limited | New |
| Provider failure, distinct from an unconfirmed send | New |
| Rejected: bad origin, malformed payload, honeypot | New |
| Demo mode, on the form, success panel and Thank You | New, from the amendment |

## Scheduling: DEFERRED

No calendar provider is configured. Left column kept, with the wording changed from "Book" to "Ask for". The right panel is a truthful "Online booking: not available yet", with no days or slots. Dependency: a founder picks a provider, which also needs a privacy-policy entry and CSP review.

## Tablet and mobile

Source rules: the two columns stack at 1000, restated with `sx-1000`. Grid widths follow the source's classes.

## Geometry

Against the source's static render, in English, with the form in demo mode.

| Route | 1440 page (source / build) | 768 | 390 |
|---|---|---|---|
| `/contact` | 3234 / 3245 | 4529 / 4019 | 5261 / 4943 |
| `/contact/thank-you`, neutral state | 2525 / 2455 | 2991 / 2557 | 3467 / 3106 |

- **Contact, 1440, top section +50:** the demo banner adds 54, and the email block's removal is offset by the taller form column.
- **Contact, 768 and 390:** the scheduler panel is shorter than the 6-slot picker, and the email block and proto bar are gone.
- **Thank You:** the neutral state has no step cards. The confirmed state has them.

## Discrepancies

In the [gap register](design-gap-register.md): GAP-C08, GAP-C09, GAP-F01, GAP-F06, GAP-F08, GAP-F09, GAP-I02, GAP-D07, GAP-D36, GAP-D37.
