import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import type { Locale } from "@/i18n/routing";

/** The `.sx` root every page shares. It is the container that all breakpoints query. */
export async function SiteLayout({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <div className="sx">
      <a
        className="fixed top-[16px] left-[16px] z-[100] -translate-y-[200%] rounded-sm bg-white p-[12px_18px] font-[500] text-ink focus:translate-y-0"
        href="#main-content"
        data-menu-inert
      >
        {t("skipToContent")}
      </a>
      <SiteHeader locale={locale} />
      <div id="main-content" tabIndex={-1} data-menu-inert>
        {children}
      </div>
      <SiteFooter locale={locale} />
    </div>
  );
}
