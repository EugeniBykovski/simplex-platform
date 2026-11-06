# Legal document register

Status of every legal document, for SF-152. The source of truth is `src/content/legal/registry.ts`, which this mirrors. **Nothing here has been approved. No lawyer has reviewed any of this text.**

## Documents

| Document | Locale | Content source | Status | Approved by | Effective | Last revised | May be public | May be indexed |
|---|---|---|---|---|---|---|---|---|
| `privacy` | EN | `src/content/legal/en/documents.ts` | `draft` | Nobody | None | None | No | No |
| `privacy` | RU | `src/content/legal/ru/documents.ts` | `draft` | Nobody | None | None | No | No |
| `cookie` | EN | `src/content/legal/en/documents.ts` | `draft` | Nobody | None | None | No | No |
| `cookie` | RU | `src/content/legal/ru/documents.ts` | `draft` | Nobody | None | None | No | No |
| `terms` | EN | `src/content/legal/en/documents.ts` | `draft` | Nobody | None | None | No | No |
| `terms` | RU | `src/content/legal/ru/documents.ts` | `draft` | Nobody | None | None | No | No |

## Lifecycle

| Status | Meaning | Visitors see | Search |
|---|---|---|---|
| `draft` | Being written | "Not yet published" | `noindex`, not in sitemap |
| `in_review` | With counsel | "Not yet published" | `noindex`, not in sitemap |
| `approved` | Approved, per language | The document, with dates | Indexable, in sitemap |

**Status is per language.** TypeScript refuses `approved` without `approvedBy`, `effectiveDate` and `lastRevised`. Nothing derives a date from the build. If only English is approved, the Russian page keeps its notice and links to the English version. A Russian page also needs `legal` set to `approved` in `src/i18n/translation-status.ts` before it is indexed.

**Draft isolation.** Unapproved text is not rendered, so it is absent from public HTML, RSC data and browser files, confirmed in QA.

**Internal review.** Build with `LEGAL_REVIEW_MODE=true` to read the drafts, with a visible draft notice, and keep them behind deployment protection. A production or indexable build with it set fails.

**To approve:** counsel signs off the final wording in that language, an owner replaces every bracket, then sets the record with the real authority and dates. Then check the [production checklist](../architecture/production-release-checklist.md).

## What the drafts changed from the design

The design's text describes some things this site doesn't do. Leaving them would have given counsel a false starting point.

| Design | Why | Draft |
|---|---|---|
| "with your consent for analytics", analytics retention, "Name the analytics provider" | No analytics exists | Removed. "This site uses no analytics" |
| "remembering your cookie choice" | No such cookie | Names the real cookie |
| "Change your choice with the controls above" | No controls | Browser settings |
| "Application details… such as your CV", "assess applications" | No application route (GAP-F02) | Bracketed |
| "We never sell personal data", "under data-processing agreements" | Unverified | Bracketed for confirmation |
| "You can access, correct, delete…" | Depends on jurisdiction | Kept, flagged for counsel |
| "cookie choice… cannot be switched off" | Doesn't apply | Removed |

Liability and governing law stay as bare placeholders. **No legal entity, address, controller, DPO, retention period, transfer safeguard, jurisdiction, or date was invented.**

## Privacy and consent decisions

| Decision | State |
|---|---|
| Consent manager | **None.** Nothing optional exists to control, and no third-party platform was added |
| Cookie banner | **None.** Whether one is legally needed for the one cookie is for counsel (GAP-F03) |
| Essential classification of `contact_confirmation` | Proposed, **not confirmed by counsel** |
| Real delivery | **Refused in code until the privacy policy is approved for that language** |
| Contact form's note | Says the policy isn't published. Becomes a link only when approved, not merely when the route exists |
| Structured data | None. No verified organisation facts |
| Adding analytics later | Needs approval, a policy change first, real script gating before load, and withdrawal that stops it. A switch alone isn't compliance |

More in [contact-privacy-register.md](contact-privacy-register.md) and [cookie-storage-inventory.md](cookie-storage-inventory.md).

## To decide, with counsel

1. Legal entity, registration, address and controller.
2. Privacy, legal and support addresses.
3. Lawful bases, processors, data-processing agreements, transfers and retention.
4. Whether `contact_confirmation` is strictly necessary, and whether any notice is needed.
5. Terms: acceptable use, licensing, liability, governing law and jurisdiction.
6. Russian position (GAP-I02), and who approves the Russian text.
7. Whether versions or PDFs are wanted.
