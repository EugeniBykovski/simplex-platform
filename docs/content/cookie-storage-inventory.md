# Cookie and storage inventory

What the site actually stores, for SF-152. Audited in code and at runtime, on a local production build. `src/content/legal/{en,ru}/ui.ts` shows this to visitors: **update them together.** No hosting provider is chosen, so **a host's own cookies are unknown and must be re-checked on the real deployment.**

## In use

| Name | Purpose | Provider | Class | Lifetime | Consent | How to remove |
|---|---|---|---|---|---|---|
| `contact_confirmation` | Lets the confirmation page know a request from this browser was accepted, so it makes no false claim. Holds a mode, a time and a signature. `HttpOnly`, `SameSite=Lax`, `Secure` on https, path `/` | SimpleX, first party. `src/lib/contact/confirmation.ts` | Essential to that confirmation. **Counsel to confirm** | 15 minutes. Set only after acceptance | None requested. **Counsel to confirm** | Expires by itself, or clear it in the browser. The form keeps working, and the page stays neutral |

## Audited and absent

| Mechanism | Code | Runtime |
|---|---|---|
| Other cookies | Only the one above. `localeCookie: false` turns off next-intl's locale cookie | None across 72 pages. One after a form is accepted |
| Authentication | None | None |
| Analytics, advertising, tag managers | None. No `next/script`. CSP allows only this origin | No third-party request on any page |
| Embeds, iframes, external media | None | None |
| Fonts | Self-hosted by `next/font` | No request to Google |
| Scheduling integrations | None (GAP-F01) | None |
| `localStorage`, `sessionStorage`, IndexedDB | Not used | Empty |
| Consent state | Nothing to remember | None |

Server memory also holds a salted hash of the client address for 10 minutes, for rate limiting. It is not stored on the visitor's device. See [contact-and-email.md](../architecture/contact-and-email.md).

## Preference controls

There are none, because there is nothing to control. The design's Analytics and Preferences switches and "Save preferences" would have affected nothing (GAP-D38).
