import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/layout/site-layout";
import { routing } from "@/i18n/routing";
import { fontClassNames } from "@/styles/fonts";
import "@/styles/globals.css";

// Pages opt in through buildPageMetadata. Anything that forgets stays out of search.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { viewportFit: "cover" };

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const { common, errors } = await getMessages({ locale });

  return (
    <html lang={locale} className={fontClassNames}>
      <body>
        {/* Client bundles receive only what client components read; page copy stays on the server. */}
        <NextIntlClientProvider messages={{ common, errors }}>
          <SiteLayout locale={locale}>{children}</SiteLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
