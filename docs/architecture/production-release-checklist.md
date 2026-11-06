# Production release checklist: contact form

**Status: production lead capture is BLOCKED.** No item below has been done. Complete them in order, as set out in the [activation procedure](contact-and-email.md#activation-procedure). Release as a whole belongs to SF-156.

## Before enabling

- [ ] Production domain chosen (GAP-C08)
- [ ] Sender domain verified in Resend, with SPF, DKIM and DMARC passing
- [ ] Approved recipient mailbox exists and is monitored
- [ ] Sending-only Resend key created, per environment, stored only in the host
- [ ] `EMAIL_PROVIDER=resend`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` set on production. **`EMAIL_PROVIDER=mock` is not set anywhere public**
- [ ] Edge rate limiting active on POSTs to `/contact`. The in-memory limiter alone is not adequate
- [ ] Privacy policy approved and published, naming Resend and the host, with retention (GAP-C09, SF-152)
- [ ] Cookie policy lists `contact_confirmation`
- [ ] Founder confirmed the copy in [contact-privacy-register.md](../content/contact-privacy-register.md), including budget bands
- [ ] Public contact email decided, as the outage fallback
- [ ] Russian form left disabled, or GAP-I02 cleared by counsel and `contact` set to `approved`

## Smoke checklist

Run on a protected preview with a test inbox, then on production after setting `CONTACT_LIVE_ENABLED=true`. Use test data.

- [ ] `/contact` shows the normal form, with no demo banner
- [ ] Valid submission: success panel, then the confirmed Thank You
- [ ] Email arrives in the approved mailbox with correct From and all fields
- [ ] Replying goes to the visitor's address
- [ ] HTML in the message appears as text in the email
- [ ] Authentication result: SPF and DKIM pass, and it is not marked as spam
- [ ] Direct visit to `/contact/thank-you` in a clean browser is neutral
- [ ] Invalid submission shows inline errors
- [ ] Repeated posts are stopped at the edge
- [ ] Temporarily invalid key: the form shows unavailable, input is kept, and no detail leaks. Restore the key
- [ ] Function logs hold only event metadata: no name, email, message or key
- [ ] `/contact/thank-you` is `noindex`, and neither route is in the sitemap unless approved

## Ongoing

- [ ] **Outage behaviour agreed.** Without a database, a message refused during an outage reaches nobody unless the visitor retries
- [ ] **Error visibility.** Someone is alerted to `send_failed` events. No alerting exists yet
- [ ] **Deliverability monitoring.** Resend's dashboard is reviewed for bounces and complaints
- [ ] Key rotation owner named

## To disable quickly

Unset `CONTACT_LIVE_ENABLED`. The form returns to its unavailable state on the next request, with no build.

## Before indexing

Add `/contact` to `indexableRoutes` and remove its `noindex` only after the above.
