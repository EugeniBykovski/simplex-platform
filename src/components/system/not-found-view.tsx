import { getTranslations } from "next-intl/server";
import { LinkButton } from "@/components/ui/button";
import { SxMark } from "@/components/ui/logo";
import { isImplementedRoute } from "@/config/routes";
import type { Locale } from "@/i18n/routing";
import "@/styles/system-pages.css";

const secondaryLinks = [
  { href: "/services", label: "services" },
  { href: "/work", label: "work" },
  { href: "/contact", label: "contact" },
] as const;

/** The approved 404 composition, without its search box, which has no backend (GAP-F05). */
export async function NotFoundView({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "errors.notFound" });

  return (
    <main className="bg-ink nf-main">
      <div className="wrap split nf-split">
        <div className="nf-copy">
          <p className="t-mono">{t("eyebrow")}</p>
          <h1 className="t-h1">
            {t("titleStart")} <span className="t-grad">{t("titleAccent")}</span>
          </h1>
          <p className="t-lead">{t("body")}</p>
          <nav className="nf-actions" aria-label={t("eyebrow")}>
            <LinkButton href="/" variant="light" arrow>
              {t("home")}
            </LinkButton>
            {secondaryLinks
              .filter(({ href }) => isImplementedRoute(href))
              .map(({ href, label }) => (
                <LinkButton key={href} href={href} variant="ghost">
                  {t(label)}
                </LinkButton>
              ))}
          </nav>
        </div>
        <div className="nf-art" aria-hidden="true">
          <span className="nf-digits">404</span>
          <SxMark live className="nf-mark" />
        </div>
      </div>
    </main>
  );
}
