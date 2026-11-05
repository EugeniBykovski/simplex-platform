import { getTranslations } from "next-intl/server";
import { LinkButton } from "@/components/ui/button";
import { SxMark } from "@/components/ui/logo";
import { isImplementedRoute } from "@/config/routes";
import type { Locale } from "@/i18n/routing";

const secondaryLinks = [
  { href: "/services", label: "services" },
  { href: "/work", label: "work" },
  { href: "/contact", label: "contact" },
] as const;

/** The approved 404 composition, without its search box, which has no backend (GAP-F05). */
export async function NotFoundView({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "errors.notFound" });

  return (
    <main className="bg-ink flex min-h-[1100px] items-center overflow-hidden p-[200px_0_120px]">
      <div className="wrap split items-center">
        <div className="flex flex-col gap-[32px]">
          <p className="t-mono text-steel">{t("eyebrow")}</p>
          <h1 className="t-h1 [overflow-wrap:break-word] hyphens-auto">
            {t("titleStart")} <span className="t-grad">{t("titleAccent")}</span>
          </h1>
          <p className="t-lead">{t("body")}</p>
          <nav className="flex flex-wrap items-center gap-[8px]" aria-label={t("eyebrow")}>
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
        <div className="relative grid place-items-center" aria-hidden="true">
          <span className="text-[clamp(160px,24cqi,360px)] leading-[.8] font-[600] tracking-[-.07em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.22)]">
            404
          </span>
          <SxMark
            live
            className="absolute [filter:drop-shadow(0_30px_50px_rgba(157,180,204,.35))] [--m:150px]"
          />
        </div>
      </div>
    </main>
  );
}
