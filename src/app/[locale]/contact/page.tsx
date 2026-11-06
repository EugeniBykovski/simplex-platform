import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { ContactFormPanel } from "@/components/sections/contact/contact-form";
import { ContactIntro, ContactScheduler } from "@/components/sections/contact/contact-sections";
import { isImplementedRoute } from "@/config/routes";
import { getContact } from "@/content/contact";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { resolveDelivery } from "@/lib/email/delivery";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { submitContact } from "./actions";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getContact(locale).meta;
  // Out of search until real delivery is live and the page is added to indexableRoutes.
  return buildPageMetadata({
    locale,
    family: "contact",
    path: "/contact",
    title,
    description,
    noindex: true,
  });
}

/** Rendered per request: whether the form can send depends on the server's runtime environment. */
export default async function ContactRoute({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("contact", locale)) notFound();
  setRequestLocale(locale);

  const requestHeaders = await headers();
  const delivery = resolveDelivery(
    { host: requestHeaders.get("host"), forwardedHost: requestHeaders.get("x-forwarded-host") },
    locale,
  );
  const content = getContact(locale);

  return (
    <main className="bg-horizon is-live p-[200px_0_140px] overflow-hidden">
      <div className="wrap grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-[72px] items-start sx-1000:grid-cols-[minmax(0,1fr)] sx-1000:gap-[48px]">
        <ContactIntro content={content} />
        <div className="glass p-[clamp(22px,3.4cqi,44px)] rounded-[32px]">
          <ContactFormPanel
            action={submitContact.bind(null, locale)}
            mode={delivery.mode}
            privacyPublished={isImplementedRoute("/privacy-policy")}
            locale={locale}
            copy={content.form}
          />
        </div>
      </div>
      <ContactScheduler content={content.scheduler} />
    </main>
  );
}
