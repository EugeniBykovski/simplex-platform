# Resend activation

For SF-156. **Not activated, and no credentials exist.** The architecture and the code-level procedure are in [contact-and-email.md](../architecture/contact-and-email.md#activation-procedure). This adds the account steps. **Mock success is never production delivery:** the mock only runs on a loopback host, a public build refuses it, and its screens say "Demo mode… No email was sent".

## Current behaviour, verified in SF-151 to SF-155

| Situation | Visitor sees | Data sent |
|---|---|---|
| Production today: no provider | Form disabled: "This form isn't accepting requests right now." | None |
| Provider set, but no approved privacy policy | Same | None |
| Provider set and live, provider error | Truthful failure, input kept | None, or ambiguous on timeout, and the copy says so |
| Mock, local only | Demo mode, no email | None |

No message is silently dropped, and none is sent to a fake recipient.

## Steps, for the owner

1. Create a Resend account, owned by the company, not an individual.
2. Add the sending domain or subdomain, such as `mail.<domain>`.
3. Add the DNS records Resend lists: SPF, DKIM, and a DMARC policy. Wait for "Verified".
4. Create a **sending-only** API key, one per environment.
5. In Vercel production, set `EMAIL_PROVIDER=resend`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` on the verified domain, and `CONTACT_TO_EMAIL` as the approved inbox. The form stays unavailable.
6. Add a Vercel Firewall rate-limit rule for POST requests to `/contact` and `/ru/contact`.
7. Approve the privacy policy (SF-152), which the code requires.
8. On a protected preview with a test key and test inbox, set `CONTACT_LIVE_ENABLED=true`, and run the smoke checklist in [production-release-checklist.md](../architecture/production-release-checklist.md).
9. Repeat in production.

**Rotation:** create a new key, update the variable, redeploy, confirm one test send, then revoke the old key. **To disable quickly:** unset `CONTACT_LIVE_ENABLED`. The form becomes unavailable on the next request.

## Abuse protection

| Control | State |
|---|---|
| Validation, field limits, one-address email, no control characters | Done |
| 32 KB body limit | Done |
| Same-origin check, plus Next.js's own | Done |
| Honeypot | Done |
| Duplicate submits | Submit disabled while pending. No automatic retry |
| No user enumeration | Nothing is looked up |
| Nothing personal in URLs, logs or storage | Done |
| **Rate limit across instances** | **Missing.** The in-memory limiter is per instance, and serverless instances don't share it. **A Vercel Firewall rule is the fix that needs no database.** Until it exists, real delivery stays off |
