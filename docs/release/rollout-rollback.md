# Rollout, rollback and operations

For SF-156. **Nothing here has been executed.** No deployment, rollback or live drill has happened.

## Rollout

| # | Step | Owner | Evidence | Status |
|---|---|---|---|---|
| 1 | Approve page content, or withhold routes | Founder | [Content approval](content-approval.md) signed off | Pending |
| 2 | Approve legal pages, per language | Founder and counsel | Records set to `approved` | Pending |
| 3 | Choose domain, confirm hosting ownership | Founder | Written decision | Pending |
| 4 | Create the Vercel project, Node 24, deployment protection on previews | Engineering, with approval | Project settings | Not started |
| 5 | Set production variables, without the live email flag | Engineering | [Environment matrix](environment-matrix.md) | Not started |
| 6 | Verify the Resend sender domain | Founder or engineering | Resend shows verified | Not started |
| 7 | Add the Vercel Firewall rule for contact POSTs | Engineering | Rule visible | Not started |
| 8 | Validate a protected preview, including a test email | Engineering | Smoke checklist passed | Not started |
| 9 | DNS and TLS | Founder or engineering | Both hosts https, one redirects | Not started |
| 10 | **Founder approves public deployment** | Founder | Written approval | Pending |
| 11 | Deploy, then smoke-check production | Engineering | Checklist below | Not started |
| 12 | Enable email: `CONTACT_LIVE_ENABLED=true` | Engineering, after approval | One real test enquiry | Not started |
| 13 | Enable indexing, then Search Console | Founder authorises | [SEO launch](seo-launch-checklist.md) | Not started |
| 14 | Monitor | Engineering | Below | Not started |

## Production smoke check

Home and four pages render. `/nope` is a 404. `/en/services` is a single 308. Headers are present. Canonicals use the real domain. `robots.txt` and the sitemap match the decision. The language switch works. Contact is unavailable, or sends one test enquiry once enabled. The legal pages show their state. Thank You makes no false claim.

## Rollback

| Trigger | Action |
|---|---|
| Broken page, error spike, wrong content | Vercel: promote the previous production deployment, instant and no rebuild. Then fix forward |
| Contact misbehaving | Unset `CONTACT_LIVE_ENABLED`. The form becomes unavailable on the next request |
| Analytics problem, once any exists | Unset its flag |
| Accidental indexing | Set `SITE_INDEXABLE=false` and redeploy. Search engines drop pages over days to weeks, so prevention matters more than cure |
| Wrong environment value | Restore the value and redeploy |
| DNS problem | Restore the recorded previous records. Propagation follows the TTL |

After any rollback, run the smoke check again. **Rollback has not been tested.** Try a promotion once on a preview before launch.

## Monitoring, the smallest setup

| Need | Proposal | Cost |
|---|---|---|
| Server errors | Vercel's runtime logs and log drains | Included |
| Failed contact submissions | The existing `send_failed` and `rate_limited` log events, alerting on any `send_failed` | Included, alert setup needed |
| Provider errors | Same events, plus Resend's dashboard for bounces and complaints | Included |
| Deploy failures | Vercel and GitHub notifications | Included |
| Availability | One free external uptime check on `/` | Free tier |
| Abuse | Vercel Firewall logs for the contact rule | Included |

No third-party monitoring was installed. **Logs must never hold form content, addresses or keys.** The code already follows this.

## Preview and production

| Aspect | Production | Preview |
|---|---|---|
| Build | `next build`, same | Same |
| Origin | Real domain | Real domain in canonicals, noindex |
| Indexing | Per page, after approval | Never |
| Headers | Full set, plus `X-Robots-Tag` until indexing is on | Full set, plus `X-Robots-Tag` |
| Contact | Unavailable until activated | Unavailable, or a test inbox for a smoke test |
| Analytics | None | None |
| Legal drafts | Hidden | Hidden, or shown in review mode behind protection |
| Caching | Static pages cached, Contact dynamic | Same |

**Not verified on a real hosted preview, as none exists.** Local production builds stand in.
