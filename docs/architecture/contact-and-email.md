# Contact and email architecture

Implemented in SF-151, with a mock provider. **Real Resend delivery has not been configured or tested, and production lead capture is blocked** until the [activation procedure](#activation-procedure) is complete. Source boards: `Contact`, `ContactTablet`, `ContactMobile`, `ThankYou`, `ThankYouMobile`. Decisions are in [contact-privacy-register.md](../content/contact-privacy-register.md), and the map to the design is in [contact-artboard-matrix.md](../design/contact-artboard-matrix.md).

## Other capture points

| Form | Route | Status |
|---|---|---|
| Job application | `/careers/[slug]` | Not built. Applying goes to `/contact` (GAP-F02) |
| Playbook request | `/insights` | Withheld (GAP-A03) |
| Call scheduler | `/contact` | No calendar. Truthful unavailable panel (GAP-F01) |

## Delivery modes

`resolveDelivery` in `src/lib/email/delivery.ts` is the only place delivery is chosen. It runs per request, on the page and again in the action, and **there is no fallback from Resend to the mock.**

| Mode | Needs | Visitor sees |
|---|---|---|
| `unavailable` | The default, for anything else | Fields and submit disabled. "This form isn't accepting requests right now." |
| `demo` | `EMAIL_PROVIDER=mock`, **and** a loopback host, **and** no `VERCEL_ENV` beyond `development`, **and** `SITE_INDEXABLE` not `true`, **and** an unset or loopback `NEXT_PUBLIC_SITE_URL` | "Demo mode", on the form, the success panel and Thank You. Never presented as a real enquiry |
| `live` | `EMAIL_PROVIDER=resend`, a key, valid sender and recipient, **and** `CONTACT_LIVE_ENABLED=true`. For Russian, also `contact` set to `approved` | The normal form |

`parseSiteEnv` also **fails the build** for `EMAIL_PROVIDER=mock` when the build is indexable or `VERCEL_ENV=production`.

`CONTACT_LIVE_ENABLED` is an addition to the amendment's four variables. It records what code cannot check: a verified domain, edge rate limiting, an approved privacy notice and a smoke test. Without it, adding an API key would turn the form on before those are in place.

## Providers

`EmailProvider` in `src/lib/email/provider.ts` has one method, `send`, returning an id or a failure class.

| Class | File | Notes |
|---|---|---|
| `MockEmailProvider` | `src/lib/email/mock-provider.ts` | Sends, stores and logs nothing. Its result carries `simulated: true`, and its id starts `simulated-` |
| `ResendEmailProvider` | `src/lib/email/resend-provider.ts` | `fetch` to Resend's HTTP API, 10 s timeout, no dependency added. **Checked only against a local stub** |

| Provider result | Status | Visitor copy |
|---|---|---|
| 2xx with an id | `accepted` | "Your request has been submitted." |
| 429 | `rate_limited` | "Too many attempts." |
| 5xx | `provider_failure` | "We couldn't send your request." |
| Other 4xx | `unavailable` | "This form isn't accepting requests right now." |
| Timeout, network, or 2xx with no id | `network_failure` | "We couldn't confirm that your request was sent… we might receive it twice." |

### Mock mode

```sh
EMAIL_PROVIDER=mock pnpm dev
```

These visitor addresses force an outcome:

| Email | Outcome |
|---|---|
| `qa+provider-failure@example.test` | Provider failure |
| `qa+network-failure@example.test` | Unconfirmed send |
| `qa+rate-limited@example.test` | Rate limited |
| `qa+configuration@example.test` | Unavailable |
| `qa+slow@example.test` | Accepted after 1.5 s, to see the pending state |
| Anything else valid | Simulated acceptance |

## Request flow

`submitContact` in `src/app/[locale]/contact/actions.ts`, a Server Action. It works without JavaScript.

```
Browser form: instant hints from the same rules; submit disabled while pending
  ▼
1. Locale and origin: Origin must match the host, and Sec-Fetch-Site must be same-origin if sent
2. resolveDelivery: unavailable stops here, before any field is read for use
3. Parse: known fields, strings, one value each. Anything else is rejected
4. Honeypot
5. Validate and normalize
6. In-memory rate limit
7. Compose from validated values, with sender and recipient from configuration
8. provider.send
9. On acceptance: set the signed cookie. Return a status, never provider detail
```

Next.js adds its own origin check and a body limit, set to 32 KB in `next.config.ts`.

## Field contract

Rules are in `src/lib/contact/fields.ts`, shared with the browser. The server's run is authoritative. Parsing is in `src/lib/contact/parse.ts`.

| Field | Name | Required | Rules | Normalized |
|---|---|---|---|---|
| What can we help with? | `services`, repeated | No | Allow-list of 8, at most 8 values | Deduplicated |
| Name | `name` | Yes | 1 to 200, no control or separator characters | Whitespace collapsed |
| Work email | `email` | Yes | One address, at most 254, none of `` <>(),;:"\[] `` or whitespace. No "work domain" rule | Trimmed |
| Company | `company` | No | At most 200, no control or separator characters | Whitespace collapsed |
| Project description | `description` | Yes | 20 to 2000, after normalizing. Only line breaks and tabs among controls | CRLF to LF, trimmed |
| Budget range | `budget` | No | Allow-list of 5 | Defaults to first |
| Expected timeline | `timeline` | No | Allow-list of 5 | Defaults to first |
| Consent | `consent` | Yes | Exactly `yes` | |
| Honeypot | `website` | Must be empty | Any value rejects the submission | |

Unknown field, file, or repeated single value: the whole submission is rejected with a generic message. No Zod: a small hand-written validator covers it, and the brief asks for no unneeded dependency.

## States

Initial, editing, invalid, required missing, invalid email, pending, rate limited, network failure, provider failure, unavailable, rejected, success and demo success. **Values are kept on every recoverable failure, including a dropped connection and without JavaScript.** Errors announce through `role="alert"`, and focus moves to the first invalid field or the alert. Pending is announced in a `role="status"` element.

The client calls the action directly, not through the form's `action`, because React resets selects and checkboxes after a form action it started, and a thrown transport error would reach the error boundary.

## Thank You

`/contact/thank-you` is `noindex` and not in the sitemap. It has three states:

| State | When | Says |
|---|---|---|
| Confirmed | Valid cookie, live mode | "Thank you. Request submitted." |
| Demo | Valid cookie, demo mode | "Your request was simulated. No email was sent." |
| Neutral | Anything else, including a direct visit | Makes no claim, and links to the form |

The `contact_confirmation` cookie comes from `src/lib/contact/confirmation.ts`. It holds a mode, a time and an HMAC, expires in 15 minutes, and carries no personal data. The live key is derived from `RESEND_API_KEY`, so no extra secret is needed, and rotating the key only makes old confirmations neutral. The URL holds nothing and query strings are ignored.

The success panel from the design comes first, then Continue. Nothing about the visitor is stored in the browser. Refreshing within 15 minutes stays confirmed, which remains true.

## Email

`src/lib/contact/message.ts`. Plain text and simple HTML, in English, with no attachments.

- **From:** `CONTACT_FROM_EMAIL`, **To:** `CONTACT_TO_EMAIL`. Neither can come from the form.
- **Reply-To:** the validated visitor address, never in From.
- **Subject:** fixed, so no visitor text reaches a header.
- **Body:** source, name, email, company, help wanted, budget, timeline, description, and the server's receipt time. HTML is escaped, and visitor links are not made clickable.

**No confirmation goes to the visitor** (GAP-F09): it would let anyone send mail to any address through the form.

## Abuse controls

| Control | Where | Limit |
|---|---|---|
| Honeypot | Off-screen, `tabindex=-1`, `aria-hidden` | A filled one gets the generic "couldn't process". **Not a fake success**, because a person with autofill would otherwise believe it was sent |
| Payload size | `next.config.ts` | 32 KB |
| Field limits | `fields.ts` | As above |
| Origin | Action and Next.js | Same origin |
| In-memory limit | `src/lib/contact/rate-limit.ts` | 5 per client and 60 per instance, per 10 minutes. Salted hashes, bounded map. **Trusts `x-forwarded-for`, which only a platform proxy makes reliable** |
| Edge rate limit | Hosting | **NOT CONFIGURED. Blocks production** |
| CAPTCHA | | None. Needs approval |

**Production blocker:** serverless instances don't share memory, so the in-memory limiter alone is not adequate. A durable store or external service needs approval. Hosting WAF rules are the lightest route, and adding one is part of activation.

**Duplicates:** submit is disabled while pending, and nothing resends automatically. A retry after "couldn't confirm" may produce a duplicate, and the copy says so. **Exactly-once delivery is not claimed.**

**Not built:** minimum fill time, which is worth adding only if spam appears.

## Safe logging

`logContactEvent` in `src/lib/contact/log.ts` is the only logging on this path. Its parameters can hold an event, a correlation id, a reason, a provider name, a message id and an error name. **Never names, emails, message text, IP addresses or keys.**

## Activation procedure

Do these in order, and **do not set `CONTACT_LIVE_ENABLED` first.** See [production-release-checklist.md](production-release-checklist.md).

1. Founder approves the sender domain and recipient mailbox (GAP-C08).
2. Verify the domain in Resend: SPF, DKIM and DMARC.
3. Create a sending-only key, per environment. Set it in the host, never in Git or chat.
4. Set `EMAIL_PROVIDER=resend`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL`. The form stays unavailable.
5. Configure edge rate limiting on POSTs to `/contact`.
6. Publish the approved privacy policy (SF-152).
7. On a protected preview with a test inbox, set `CONTACT_LIVE_ENABLED=true` and run the smoke checklist.
8. Enable production, and repeat the smoke checklist.
9. Russian only after GAP-I02, then set `contact` to `approved`.

## Scheduler

**Decision: no fake scheduling** (GAP-F01). The section stays as "Ask for 30 minutes", with a panel saying online booking isn't available. A hosted provider such as Cal.com or Calendly, linked from there, is the lightest real route. It would be a new external service needing approval, a privacy-policy entry and CSP review.

## Verification

Manual, in [contact-manual-qa.md](../qa/contact-manual-qa.md).
