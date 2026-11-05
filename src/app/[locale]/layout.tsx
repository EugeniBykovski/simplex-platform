import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";

// The design loads Geist 300..700 and Geist Mono 400/500. Cyrillic is required for /ru.
const geist = Geist({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: "variable",
  variable: "--font-geist",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

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
    <html lang={locale} className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {/* Client bundles receive only what client components read; page copy stays on the server. */}
        <NextIntlClientProvider messages={{ common, errors }}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
