# Release readiness

After SF-155. **The site is technically ready for review. It is not ready to launch.** Launch belongs to SF-156.

## State

| Area | State |
|---|---|
| Implemented routes | 37 English and 37 Russian, plus 404 |
| P0 and P1 visual or functional defects | **None known** |
| Overflow | None, at 16 widths |
| Header and footer | Verified. Wordmark centred at 320, 390, 768, 1440 and 1920 |
| Keyboard | Verified |
| Static gates | Pass |
| Automated tests in the repository | **None, by decision.** QA used temporary scripts only |

## Verified, partly verified, not tested

| Item | Status |
|---|---|
| Chromium | Verified |
| Playwright WebKit, Firefox | Partly verified: layout sweeps at 5 widths |
| iOS Simulator Safari | Partly verified: 5 pages by eye |
| Physical iPhone, Android, desktop Safari, Firefox by eye | **Not tested** |
| Screen readers | **Not tested** |
| Real hosting, HTTP/2, CDN | **Not tested** |
| Field Core Web Vitals | **Not available** |
| Real Resend delivery | **Blocked** |

## External blockers for launch

1. Production domain and company facts (GAP-C08).
2. Founder sign-off on claims, including Home and Services, which are listed for indexing (GAP-C10).
3. Counsel-approved legal text, per language (GAP-C09, GAP-I02).
4. Resend: verified domain, recipient, key, edge rate limiting.
5. Background image rights (GAP-A01).
6. Social card approval (GAP-A02).
7. Russian native review.
8. Analytics decision (GAP-F03).

Checklists: [production](../architecture/production-release-checklist.md), [SEO](../seo/release-checklist.md), [performance](../performance/remaining-issues.md).

## Intentionally deferred

Article and job pages until content is approved; real scheduling; the 404 search; preference controls until something optional exists.
