# Privacy, analytics and consent

For SF-156. **Technical state, not legal advice.** Nothing here has been reviewed by counsel.

## Legal documents

| Document | Status | Visitors see |
|---|---|---|
| Privacy Policy, EN and RU | `draft` | "Not yet published" |
| Cookie Policy, EN and RU | `draft` | "Not yet published", and the real storage list |
| Terms of Use, EN and RU | `draft` | "Not yet published" |

Details: [legal-document-register.md](../content/legal-document-register.md).

**Missing for approval:** legal entity, registration and address; data controller and contact; lawful bases; processors, including Resend and the host; retention; international transfers; the Russian position (GAP-I02); terms on liability and governing law. **No date, approval or company detail has been invented.**

## Cookies and storage, verified

One first-party cookie, `contact_confirmation`, set only after an accepted form, holding no personal data. No browser storage. No third-party requests on 72 pages. Full list: [cookie-storage-inventory.md](../content/cookie-storage-inventory.md). **A host's own cookies are unknown until a host is chosen.**

## Analytics: NOT INSTALLED

No analytics, tag manager, pixel or tracking script exists. The CSP allows no third-party origin. There are no consent controls, because there is nothing to consent to (GAP-D38).

## Enabling analytics later

1. **Founder chooses a provider**, and its data, such as cookieless or cookie-based.
2. **Counsel** decides whether consent is required for the intended markets, and updates the Privacy and Cookie Policies first.
3. **If consent is needed:** build a real consent control. Nothing loads before acceptance, rejection and withdrawal stop collection and clear the provider's first-party storage, the choice persists, and it works by keyboard. A banner alone is not compliance.
4. Add the provider's origin to the CSP in `src/config/security-headers.ts`, and nothing broader.
5. Gate the script on an environment flag, so it can be switched off without code.
6. Verify in a browser: no request before consent, and none after withdrawal.

**Status: BLOCKED.** No provider is chosen, and nothing will be installed without approval.
