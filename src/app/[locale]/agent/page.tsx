import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { AgentCapabilities } from "@/components/sections/agent/agent-capabilities";
import { AgentCta } from "@/components/sections/agent/agent-cta";
import { AgentDeployment } from "@/components/sections/agent/agent-deployment";
import { AgentEmbed } from "@/components/sections/agent/agent-embed";
import { AgentFaq } from "@/components/sections/agent/agent-faq";
import { AgentHero } from "@/components/sections/agent/agent-hero";
import { AgentHow } from "@/components/sections/agent/agent-how";
import { AgentRoi } from "@/components/sections/agent/agent-roi";
import { AgentStack } from "@/components/sections/agent/agent-stack";
import { getAgentContent } from "@/content/agent";
import { routing } from "@/i18n/routing";
import { isLocaleAvailable } from "@/i18n/translation-status";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const { title, description } = getAgentContent(locale).meta;
  // Stays out of search until its capabilities are verified (GAP-C01).
  return buildPageMetadata({
    locale,
    family: "agent",
    path: "/agent",
    title,
    description,
    noindex: true,
  });
}

/** The section order follows Agent.dc.html. */
export default async function AgentPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) || !isLocaleAvailable("agent", locale)) notFound();
  setRequestLocale(locale);

  const content = getAgentContent(locale);

  return (
    <main>
      <AgentHero content={content.hero} breadcrumb={content.breadcrumb} />
      <AgentStack content={content.stack} />
      <AgentHow content={content.how} />
      <AgentCapabilities content={content.capabilities} />
      <AgentEmbed content={content.embed} />
      <AgentDeployment content={content.deployment} />
      <AgentFaq content={content.faq} />
      <AgentRoi content={content.roi} locale={locale} />
      <AgentCta content={content.cta} />
    </main>
  );
}
