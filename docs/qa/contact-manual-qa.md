# Contact: manual QA

Manual record for SF-151, against design version `1793953114-553b`. No test tooling was added to the repository. Inspection ran from helpers outside it, against production builds on free ports, with each server started and stopped by PID.

**Browser actually inspected: Chromium only, in emulated viewports.** Safari, Firefox, physical iOS and Android, and screen readers were **not** checked.

**This is a source-render comparison, not a published-canvas comparison.**

**Real Resend was never called, no real email was sent, and no credential was used.** "Local stub" below means Resend's endpoint replaced inside the test process, with a fake key, so nothing left the machine. It proves the request shape and result handling, and **nothing about Resend itself.**

## Layout

| Check | Result |
|---|---|
| Views, demo mode | 76: 2 pages × 2 languages × 19 widths, 320 to 2560. No overflow, clipping or console errors |
| Views, unavailable mode | 76, same matrix. None |
| Success panel, demo Thank You, confirmed headline | 90: both languages × 15 widths, 320 to 2560, with a long name and address. The confirmed Russian headline was swapped in by script, as that state can't be reached before GAP-I02 |
| Found and fixed | Russian demo button clipped at 320. Russian success heading overflowed its card up to 375 |
| Home, with its new labels | 320, 390, 1440: no overflow, no clipped button |
| Link crawl | 66 pages, none dead. Every label linking to `/contact` read |

Viewed by eye, beside the source: [Contact at 1440](evidence/sf-151/contact-1440.jpg), [at 390](evidence/sf-151/contact-390.jpg), [states](evidence/sf-151/states.jpg), [Thank You](evidence/sf-151/thank-you.jpg). A navbar part-way down a capture comes from full-page capture of a sticky header.

## Form states, in a browser, mock mode

70 checks, 0 failures.

| Check | Result |
|---|---|
| Demo banner, "Simulate sending" label | Present |
| Empty submit | No request. "Please check 4 fields." Focus on Name. Each error tied by `aria-describedby`, with `aria-invalid` |
| Email | Incomplete: message. Valid: error clears, `.is-valid` |
| Counter | Updates |
| Keyboard submit | Enter in a field works |
| Demo success | "Your request was simulated. No email was sent." Focus on heading |
| Thank You after success | Demo copy, clean URL, same after refresh |
| Direct visit, clean browser | Neutral. No "submitted", no demo claim |
| Forged signature, or mode changed from demo to live | Neutral |
| Expired or tampered live cookie | Neutral |
| Cookie | `HttpOnly`, `Lax`, no personal data. Browser storage empty |
| Provider failure, unconfirmed send, rate limited, configuration | Right message, every value kept (text, selects, chips, consent), focus on alert, no cookie, no internal words |
| Dropped connection, request aborted in the browser | "Couldn't confirm", values kept, 1 request (no automatic retry). Retrying works |
| Pending | Button disabled and `aria-busy`, "Sending…", fields disabled, announced. Second click sends nothing |
| Start again | Empty form |
| Russian | `lang=ru`, Russian plural ("Проверьте 4 поля"), Russian success and Thank You, locale kept |
| Keyboard | Chips reachable and toggled with Space, focus ring visible. Honeypot never receives focus |
| Touch targets | At least 44 px in the form |
| Focus and sticky nav | Focused field and form anchor land clear of the header |
| **No JavaScript** | Server errors shown, values kept, `aria-invalid` set. Simulated success renders |

**Found and fixed:** React's form reset was clearing selects and checkboxes after a failed send, and a thrown transport error would have reached the error page. The client now calls the action directly.

## Hostile requests to the server boundary

Direct POSTs with no browser. 38 checks, 0 failures.

| Attack | Result |
|---|---|
| Foreign `Origin` | 500 from Next.js. Not processed |
| No `Origin`, or `Sec-Fetch-Site: cross-site` | Rejected |
| Unexpected field, injected `from`, injected `to` | Rejected |
| File as a text field, repeated `name` | Rejected |
| Nine services, odd consent value | Rejected |
| CRLF or `Bcc:` in name, CRLF in email | Field error |
| Two addresses, display-name email | Field error |
| Control characters in name or message | Field error |
| Whitespace-only name or message, short message | Field error |
| 2001-character message, 201-character name, 255-character email | Field error. 2000 characters accepted |
| Budget, timeline or service off the list | Field error |
| Missing consent | Field error |
| Honeypot filled | Rejected |
| 40 KB body | 500 from Next.js's size limit. Not processed |
| Query string on Thank You | Ignored, stays neutral |
| Same client, six times | Five accepted, sixth rate limited |

## Fail-closed matrix

| Environment | English | Russian | Public host header |
|---|---|---|---|
| Nothing set | Unavailable | Unavailable | Unavailable |
| `EMAIL_PROVIDER=bogus` | Unavailable | Unavailable | Unavailable |
| `mock`, local | **Demo** | **Demo** | Unavailable |
| `mock`, `VERCEL_ENV=preview` | Unavailable | Unavailable | Unavailable |
| `mock`, public site URL | Unavailable | Unavailable | Unavailable |
| `resend`, nothing else | Unavailable | Unavailable | Unavailable |
| `resend`, no recipient | Unavailable | Unavailable | Unavailable |
| `resend`, all values, not enabled | Unavailable | Unavailable | Unavailable |
| `resend`, all values, enabled, local stub | Live | **Unavailable**, GAP-I02 | Live |

Unavailable means submit is disabled. `EMAIL_PROVIDER=mock` with `SITE_INDEXABLE=true` or `VERCEL_ENV=production` fails `parseSiteEnv`, which the build runs.

## Resend provider, against the local stub

12 checks, 0 failures.

| Check | Result |
|---|---|
| Request | POST to the Resend URL. `from` and `to` from configuration, `reply_to` the visitor |
| Body | All fields and receipt time. `<script>`, `<b>` and `&` escaped in HTML |
| Attacker-supplied `from`, `to` | Rejected |
| 429 | Rate limited |
| 500, 503 | Provider failure |
| 401, 403, 422 | Unavailable |
| Thrown error, 200 with no id | Unconfirmed |
| Stub's error text in the response | Absent |
| Browser, full flow | "Thank you, Alex." then confirmed Thank You |

## Privacy and secrets

| Check | Result |
|---|---|
| Server log during the form, attack and stub runs | Event metadata only. **No test name, address, company or message, and not the key** |
| Browser bundle, canary build | `pnpm check:bundle` passes with a canary as the key and in the sender. Also forbids `api.resend.com`, `resolveDelivery` and every email variable name |
| Mock | Writes no file and no log of its own |

## Metadata

| Route | Title | Robots | Canonical | hreflang, structured data |
|---|---|---|---|---|
| `/contact` | Contact — SimpleX | `noindex` | `/contact` | None. No `ContactPage`: no verified address, phone or email |
| `/ru/contact` | Контакты — SimpleX | `noindex` | `/contact` | None |
| `/contact/thank-you` | Thank you — SimpleX | `noindex` | Itself | None |
| `/ru/contact/thank-you` | Спасибо — SimpleX | `noindex` | English | None |

One `h1` each, no skipped levels, no bracketed placeholder, no `href="#"`. Neither route is in the sitemap.

## Accessibility

| Check | Result |
|---|---|
| Lighthouse accessibility | 100, on all four pages. Initial state only |
| Semantics | Real labels, `fieldset` and `legend`, `required`, `role="alert"`, `role="status"` |
| Reduced motion | Layout checks ran with it on |
| Screen reader | **Not tested** |

Contrast was not measured separately beyond Lighthouse.

## Lighthouse

One mobile run per page, simulated throttling, local production build, demo mode. **Indicative only.**

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT | Weight |
|---|---|---|---|---|---|---|---|---|
| `/contact` | 93 | 100 | 100 | 66 | 3.2 s | 0 | 10 ms | 365 KiB |
| `/ru/contact` | 92 | 100 | 100 | 66 | 3.3 s | 0 | 10 ms | 372 KiB |
| `/contact/thank-you` | 94 | 100 | 100 | 66 | 3.1 s | 0 | 10 ms | 353 KiB |
| `/ru/contact/thank-you` | 93 | 100 | 100 | 66 | 3.2 s | 0 | 10 ms | 358 KiB |

SEO is 66 because of the deliberate `noindex`. **LCP remains above the 2.5 s target**, for SF-154.

## Open

- **Real Resend delivery, and everything else in the [production release checklist](../architecture/production-release-checklist.md).**
- The in-memory limiter's behaviour on real serverless hosting.
- Published-canvas comparison.
- Safari, Firefox, physical devices and a screen-reader pass.
- Native Russian review.
