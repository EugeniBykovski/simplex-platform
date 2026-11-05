import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { SiteLayout } from "@/components/layout/site-layout";
import { NotFoundView } from "@/components/system/not-found-view";
import { fontClassNames } from "@/styles/fonts";
import "@/styles/globals.css";

/**
 * Unmatched URLs land here and get real server-rendered HTML with a 404 status. A notFound() call
 * during rendering would instead send an empty shell that needs JavaScript, so routes must not use
 * a catch-all page, and slug pages should set dynamicParams = false. The proxy supplies the locale.
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "errors.notFound" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    robots: { index: false, follow: false },
  };
}

export default async function GlobalNotFound() {
  const locale = await getLocale();
  const { common, errors } = await getMessages({ locale });

  return (
    <html lang={locale} className={fontClassNames}>
      <body>
        <NextIntlClientProvider locale={locale} messages={{ common, errors }}>
          <SiteLayout locale={locale}>
            <NotFoundView locale={locale} />
          </SiteLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
