# Contact and email architecture

Implemented in SF-151, except the application form, which ships with SF-149. Nothing here is built yet. Source boards: `Contact`, `ContactTablet`, `ContactMobile`, `ThankYou`, `ThankYouMobile`, `Job`, `JobMobile`, `Insights`.

## Forms in the design

The design has four capture points, and **three of them promise something that does not exist yet.**

| Form | Route | Fields | Requires | Status |
|---|---|---|---|---|
| Project enquiry | `/contact` | See below | Resend | Build |
| Job application | `/careers/[slug]` | Name, email, CV or LinkedIn URL, notes | Resend | Build, needs consent (GAP-F02) |
| Playbook request | `/insights` | Work email | Resend, the PDF, a list decision | **Blocked** (GAP-A03) |
| Call scheduler | `/contact` | Day, time slot | A real calendar provider | **Blocked** (GAP-F01) |

Also not a form: the 404 page's search box (GAP-F05).

## Project enquiry form

Exact fields from `Contact.dc.html`:

| Field | Control | Required | Validation | Error copy |
|---|---|---|---|---|
| What can we help with? | Toggle chips, multi-select | No | One or more of the 8 values | None |
| Name | `input[text]`, `autocomplete=name` | Yes | Non-empty after trim | "Please tell us your name" |
| Work email | `input[email]`, `autocomplete=email` | Yes | `/^[^@\s]+@[^@\s]+\.[^@\s]+$/` | "Enter a complete email, like name@company.com" |
| Company | `input[text]`, `autocomplete=organization` | No | None | None |
| Project description | `textarea` with counter | Yes | At least 20 characters. Counter shows `/ 2000` | "A sentence or two helps us prepare — at least 20 characters" |
| Budget range | `select` | No | One of 5 values | None |
| Expected timeline | `select` | No | One of 5 values | None |
| Consent | Checkbox linking to privacy policy | Yes | Must be checked | "Please confirm so we can reply" |

Chip values: Custom Software, Web & Mobile, AI Engineering, Cloud & DevOps, Product Design, Architecture, Dedicated Team, Not sure yet.

Budget values: Prefer not to say, Under [€50k], [€50k – €150k], [€150k – €500k], [€500k+]. **The bands and the currency are placeholders** (GAP-C08).

Timeline values: Not sure yet, As soon as possible, Within 3 months, 3–6 months, Exploring options.

No field is conditional on another. There is no conditional logic in the design.

### Prototype defects to fix

- `budget` and `timeline` are not bound to state, so the prototype would lose them on submit.
- The inputs have no `name` attributes, which real form submission requires.
- The 2000-character limit is displayed but not enforced.
- `.proto-bar` ("Prototype states") is a review tool and **must not ship**.
- Inputs have no `aria-describedby` pointing at their error text. Add it.

### States

| State | Trigger | Behaviour from the design |
|---|---|---|
| Idle | Load | All fields empty |
| Validation | Submit with errors | `role="alert"` summary "Please check N field(s)", inline errors, `aria-invalid`, `.is-error` |
| Field valid | Well-formed email | `.is-valid` on the email field |
| Sending | Valid submit | Fields disabled, `aria-busy`, spinner, label "Sending…" |
| Success | Accepted | `role="status"` panel: "Thank you, {firstName}" with Continue and Send another |
| Network error | Failure | `role="alert"`: "We couldn't send your message. Nothing was lost…", label "Try again", fields preserved |

### Success semantics

**Show success only after Resend has accepted the message for delivery.** Accepted is not the same as delivered, so never tell the visitor it has arrived. The design's wording, "Your message is with our team", is acceptable.

The design has two success screens: the inline panel, and `/contact/thank-you` reached through Continue. Keep both as designed. `/contact/thank-you` is `noindex` and must not be used to measure conversions alone, since anyone can open the URL.

**`ThankYou` promises "Confirmation email sent to you".** So the flow sends two emails: the internal notification and a visitor confirmation. A failed confirmation must not fail the submission, since the enquiry is already safe. The confirmation goes to an unverified address, which makes it an abuse vector, so keep it plain, send it only after anti-spam passes, and never echo the visitor's message text back.

## Request flow

```
Browser form
  │  (works without JavaScript; client component adds inline errors and busy state)
  ▼
Server Action: features/contact/actions.ts (planned)
  1. Reject if the honeypot is filled or the submit was implausibly fast
  2. Throttle by IP
  3. Validate on the server, always, regardless of client checks
  4. Send internal notification through Resend ── failure ──▶ return "network error" state
  5. Send visitor confirmation ── failure ──▶ log, continue
  6. Return success state
```

Use a Server Action, not a route handler: it is same-origin, supports progressive enhancement and adds no public API. The proxy matcher already excludes `/api` should a webhook ever need it.

## Validation

**Recommendation: add Zod in SF-151.** The ticket allows it only if justified, and the justification is real here: one schema can back both client hints and server enforcement, and the same pattern serves the job form. There is no existing project convention to weigh against it.

Server rules beyond the design's: trim everything, cap name and company at 200 characters, description at 2000, reject control characters and line breaks in single-line fields (prevents email header injection), and allow-list chip, budget and timeline values.

Messages come from `src/i18n/messages/{locale}/forms.json`, so errors appear in the visitor's language. Validate email format only. Do not try to require a "work" domain.

## Resend

| Item | Requirement |
|---|---|
| Sender domain | Verified in Resend with SPF and DKIM, plus DMARC. **Blocked: production domain not chosen** (GAP-C08) |
| From | `CONTACT_FROM_EMAIL`, on the verified domain |
| To | `CONTACT_INBOX_EMAIL`. Separate address for careers if the owner wants one |
| Reply-To | The visitor's address, once validated, so staff can simply reply |
| API key | `RESEND_API_KEY`, sending-only scope, per environment. Server-only module (planned at `src/lib/email/`) |
| Preview environments | Use Resend's test mode or a separate inbox. **Never email real inboxes from previews** |
| Templates | Plain, minimal, in the visitor's locale for confirmations. Internal notifications stay in English |

Treat all visitor input as untrusted in templates: escape it, and do not render links from it as clickable.

Resend delivers email. **It is not a booking calendar, an inbox, a CRM or a database.**

## Anti-spam

The design says "Protected by [spam protection]", naming no provider.

Recommended layers, no new vendor needed at first:

1. **Honeypot field**, hidden from people and assistive technology.
2. **Minimum fill time**, using a signed timestamp in the form.
3. **Throttle by IP.** Serverless memory does not persist across instances, so a purely local counter is weak. Use the hosting platform's rate limiting (WAF or edge rules) as the real control, with an in-memory limiter as a cheap extra. Proposed limit: 5 submissions per IP per 10 minutes, tuned on real traffic.
4. **Add Cloudflare Turnstile only if** spam gets through. It is a new external service and needs approval and a privacy-policy entry.

Then replace the placeholder with accurate wording, or delete the line. Do not name a provider that is not in use.

## Errors and delivery failures

| Failure | Visitor sees | System does |
|---|---|---|
| Invalid input | Inline errors, input kept | Nothing sent |
| Throttled | The network error state, with the email fallback | Log the event only |
| Honeypot or timing hit | A normal-looking success | Silent drop, log a counter |
| Resend 4xx or 5xx, or timeout | Network error state; input kept; direct email shown | One retry on 5xx or timeout, then log and alert |
| Confirmation fails | Normal success | Log it |
| Outage | Network error state | Direct email address is the fallback, so it must be real (GAP-C08) |

**No database is added.** The trade-off: while Resend is down, an enquiry reaches nobody unless the visitor retries or uses the email address. The design's error message already handles that honestly. Revisit if lead volume makes this costly. Use Resend's delivery webhooks later only if bounces need monitoring.

## Safe logging

Log an event type, a timestamp, a Resend message ID and an error class. **Never log names, emails, message text, IP addresses in clear, or API keys.** Hash the IP if throttling diagnostics need it.

## Privacy and consent

- Consent is required, unchecked by default, and links to the privacy policy.
- The privacy text must list Resend as a processor, along with hosting, and state retention (GAP-C09).
- The enquiry persists only in the inbox, so retention means the mailbox's retention policy. Define it.
- The **job form has no consent checkbox** although it collects personal data and the design's privacy policy covers applications. Add one (GAP-F02).
- Russian-language forms: see the legal question in [i18n.md](i18n.md) (GAP-I02).

## Scheduler

`Contact.dc.html` shows a day picker, slot grid and "Booked — the invite is on its way", with copy promising "calendar invite sent instantly" and "Times shown in your time zone". The slots are hard-coded, labelled "Sample availability", and fixed to CET.

**This cannot ship as drawn without a real scheduling provider, and it must never claim a booking that did not happen.**

| Option | Fit | Trade-offs |
|---|---|---|
| **Cal.com or Calendly, embedded or linked (recommended)** | Real availability, invites, time zones, no backend | External service to approve; embeds load third-party script and may set cookies, so a plain link is lightest |
| Google or Microsoft calendar API | Keeps the custom UI | OAuth, secrets, slot logic, double-booking handling. Too much for a marketing site |
| Remove until decided | Honest and simple | Loses the section |

**Interim recommendation:** ship the section's left column with a link to the provider's page, or replace the widget with the enquiry form anchor. Either is a visible change from the design, so it needs owner approval (GAP-F01).

## Playbook lead magnet

"Send me the playbook" promises a "24-page PDF" and "Unsubscribe anytime". The PDF does not exist (GAP-A03), and "unsubscribe" implies a mailing list, which needs its own consent and tooling. If only one email is ever sent, remove that phrase. Hide the block until the PDF exists.

## Tests

Covered in [test-matrix.md](../qa/test-matrix.md). Playwright uses a mocked email boundary, so CI sends no real email.
