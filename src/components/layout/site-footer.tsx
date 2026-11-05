import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/i18n/locale-switcher";
import { Badge } from "@/components/ui/feedback";
import { ArrowLink, ExternalLink, RouteLink } from "@/components/ui/links";
import { Lockup, Wordmark } from "@/components/ui/logo";
import { companyDetails } from "@/config/company";
import { footerColumns, footerLegalLinks } from "@/config/navigation";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const socialKeys = ["linkedin", "github", "x"] as const;

/**
 * The design has one footer, used by every page. Facts it leaves as placeholders (email, company
 * details, social URLs) appear only once they are set in config/company.ts (GAP-C08).
 */
export async function SiteFooter({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "footer" });
  const { contactEmail, registeredDetails, social } = companyDetails;
  const liveSocial = socialKeys.filter((key) => social[key]);

  const groups = [
    { key: "services", links: footerColumns.services },
    { key: "industries", links: footerColumns.industries },
    { key: "company", links: footerColumns.company },
  ] as const;

  return (
    <footer className="footer dark" data-menu-inert>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand stack gap-5" style={{ maxWidth: 360 }}>
            <Link href="/" style={{ alignSelf: "flex-start" }}>
              <span className="sr-only">{t("homeLabel")}</span>
              <Lockup variant="on-dark" size={34} style={{ color: "#fff" }} />
            </Link>
            <p className="t-body">{t("tagline")}</p>
            <div className="stack gap-2">
              <ArrowLink href="/contact">{t("startProject")}</ArrowLink>
              {contactEmail ? <span className="t-small">{contactEmail}</span> : null}
            </div>
          </div>
          {groups.map(({ key, links }) => (
            <div key={key}>
              <h3>{t(`groups.${key}`)}</h3>
              <div className="footer-links">
                {links.map((link) => (
                  <RouteLink key={link.key} href={link.href}>
                    {t(`links.${link.key}`)}
                    {"isNew" in link ? (
                      <Badge isNew style={{ marginLeft: 8 }}>
                        {t("new")}
                      </Badge>
                    ) : null}
                  </RouteLink>
                ))}
              </div>
            </div>
          ))}
          {liveSocial.length > 0 ? (
            <div>
              <h3>{t("groups.connect")}</h3>
              <div className="footer-links">
                {liveSocial.map((key) => (
                  <ExternalLink key={key} href={social[key] ?? ""}>
                    {t(`links.${key}`)}
                  </ExternalLink>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="footer-base">
          <span>
            {t("legal.rights", { year: new Date().getFullYear() })}
            {registeredDetails ? ` · ${registeredDetails}` : null}
          </span>
          <div className="wrap-row gap-5">
            {footerLegalLinks.map(({ key, href }) => (
              <RouteLink key={key} href={href}>
                {t(`legal.${key}`)}
              </RouteLink>
            ))}
            <RouteLink href="/cookie-policy">{t("legal.cookieSettings")}</RouteLink>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
      <div className="footer-mega" aria-hidden="true">
        <Wordmark />
      </div>
    </footer>
  );
}
