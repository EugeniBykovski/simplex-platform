import { getTranslations } from "next-intl/server";
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
          <div className="footer-brand stack gap-5 max-w-[360px]">
            <Link className="self-start" href="/">
              <span className="sr-only">{t("homeLabel")}</span>
              <Lockup variant="on-dark" className="text-[34px] text-white" />
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
                      <Badge className="ml-[8px]" isNew>
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
          </div>
        </div>
      </div>
      {/*
        Centred on the whole word and the X, on the viewport. The S has a built-in left bearing of
        .026em that the X lacks, so the margin centres what is visible rather than the text box.
        When the word is wider than the screen, it crops evenly on both sides.
      */}
      <div className="footer-mega px-[0]" aria-hidden="true">
        <Wordmark className="relative left-1/2 ml-[-.026em] w-max -translate-x-1/2" />
      </div>
    </footer>
  );
}
