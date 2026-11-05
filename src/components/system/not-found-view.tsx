import { getTranslations } from "next-intl/server";
import { implementedRoutes } from "@/config/routes";
import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import "@/styles/not-found.css";

const secondaryLinks = [
  { href: "/services", label: "services" },
  { href: "/work", label: "work" },
  { href: "/contact", label: "contact" },
] as const;

/**
 * The approved 404 composition, without the header and footer that SF-142 adds, and without its
 * search box, which has no backend (GAP-F05). Plain anchors keep it working without JavaScript.
 */
export async function NotFoundView({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "errors.notFound" });

  return (
    <div className="sx">
      <main className="bg-ink nf-main">
        <div className="wrap split">
          <div className="nf-copy">
            <p className="t-mono">{t("eyebrow")}</p>
            <h1 className="t-h1">
              {t("titleStart")} <span className="t-grad">{t("titleAccent")}</span>
            </h1>
            <p className="t-lead">{t("body")}</p>
            <nav className="nf-actions" aria-label={t("eyebrow")}>
              <a className="btn btn-light" href={getPathname({ href: "/", locale })}>
                {t("home")} <span className="ico ico-arrow" aria-hidden="true" />
              </a>
              {secondaryLinks
                .filter(({ href }) => implementedRoutes.includes(href))
                .map(({ href, label }) => (
                  <a key={href} className="btn btn-ghost" href={getPathname({ href, locale })}>
                    {t(label)}
                  </a>
                ))}
            </nav>
          </div>
          <div className="nf-art" aria-hidden="true">
            <span className="nf-digits">404</span>
            <span className="sx-mark">
              <span className="logo">
                S
                <svg className="logo-x" viewBox="0 0 88 100">
                  <path d="M0 0H15L88 100H73Z" />
                  <path className="x-accent" d="M73 0H88L54.5 45.9 47 35.6Z" />
                  <path className="x-accent" d="M33.5 54.1 41 64.4 15 100H0Z" />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
