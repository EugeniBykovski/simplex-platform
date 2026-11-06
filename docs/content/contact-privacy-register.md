# Contact content and privacy register

Copy changes and privacy decisions for SF-151. Source: `Contact.dc.html` and `ThankYou.dc.html`, design version `1793953114-553b`. **No decision here is legal approval.** Counsel has not reviewed any of it.

## Copy withheld or changed

| In the design | Why | Published |
|---|---|---|
| "A senior engineer reads every enquiry" | Unverified (GAP-C10) | Removed |
| "We reply within one business day", `[Confirm response commitment]` | No approved response time | "We read your request. We reply to the email address you give us." |
| `[hello@your-domain.com]`, "Prefer email?" | No real address (GAP-C08) | Block withheld. Failure copy does not offer email |
| "Protected by [spam protection]" | Names nothing, and claims protection not yet complete | Removed. "No mailing lists." stays |
| "as described in the privacy policy" | The policy doesn't exist (SF-152) | "Our privacy policy isn't published yet." A link replaces this by itself when `/privacy-policy` ships |
| Placeholders "Alex Morgan", "alex@company.com" | Sample person | "Your name", "you@company.com" |
| `[€50k]`, `[€150k]`, `[€500k+]` | **Bands and currency unconfirmed** | Shown without brackets, as they are questions rather than claims. **Founder to confirm or replace** |
| "We couldn't send your message. Nothing was lost… or email us directly" | No address, and a timeout can't claim it wasn't sent | Separate failure and unconfirmed copy |
| "Thank you… Your message is with our team", "We've got it." | Delivery can't be claimed. Acceptance by the provider is all the site knows | "Your request has been submitted.", "Thank you. Request submitted." |
| "Confirmation email sent to you", "Today", "Within a day", "This week" | No confirmation is sent. Times unapproved | "Request submitted", "A reply by email", "A 30-minute call" |
| "Book 30 minutes with a senior engineer" | Nothing can be booked. "Senior" unverified | "Ask for 30 minutes with an engineer." |
| "calendar invite sent instantly", "Times shown in your time zone", "Sample availability", "Booked" | Describes a fake widget (GAP-F01) | Removed |
| "NDA available before the call" | Unverified (GAP-C10) | Removed |
| "Case studies in our standard format" | They are demonstrations (GAP-C02) | "Demonstration case studies in our standard format." |
| Home "Book a demo", "Book a review" | The route has no booking | "Ask for a demo", "Ask for a review" |

**Steps 2 and 3**, "A 30-minute call with an engineer" and "A short written proposal", are kept from the design as stated process. A founder should confirm them.

## Privacy decisions

| Decision | State | Status |
|---|---|---|
| Fields collected | The design's fields only. Name, email and description are required. Budget and timeline default to non-committal values | Implemented |
| Purpose | Responding to the enquiry. Stated beside the form | Implemented, wording unapproved |
| Consent | Required, unchecked by default, checked on the server | Implemented. Lawful basis **not** confirmed by counsel |
| Marketing | None. No subscribe option and no list | Implemented |
| Storage | No contact database. No browser storage. The message exists only in the email and the provider's own systems | Implemented |
| Retention | Mailbox and Resend retention are undefined | **Open** (GAP-C09) |
| Processors | Resend and the host must be named in the privacy policy. The form says "our email provider" | **Open**, SF-152 |
| Privacy policy | Not published, and the form says so | **Blocks production** (GAP-C09) |
| Russian-language form | Disabled for real delivery until `contact` is `approved` in `src/i18n/translation-status.ts`, which includes the counsel review in GAP-I02 | **Blocked** |
| Cookie | `contact_confirmation`: `HttpOnly`, `SameSite=Lax`, 15 minutes, set only after acceptance. Holds a mode, a time and a signature. No personal data | Implemented. Add to the cookie policy (SF-152) |
| Logs | Event, correlation id, provider name, provider message id, failure class and error name. **Never** name, email, company, message, IP or key | Implemented, checked in QA |
| Rate-limit memory | Salted hash of the client address, in process memory, 10 minutes | Implemented. Mention in the policy |
| Analytics | None. No conversion event fires | Implemented |
| Confirmation email to the visitor | **Not sent.** An anonymous form that mails any address can be used to bombard third parties | Decided (GAP-F09) |
| Job applications | Applying still goes through `/contact`, so CVs and application data are not requested (GAP-F02) | Unchanged |

## To decide

1. A public contact email. Without it, an outage has no fallback.
2. An approved response time, if any.
3. Budget bands and currency.
4. Whether steps 2 and 3 describe the real process.
5. Privacy policy, retention and processors, with counsel.
6. Legal position for Russian-speaking visitors (GAP-I02).
7. A calendar provider, if real booking is wanted.
8. Whether `CONTACT_TO_EMAIL` should differ for careers.
