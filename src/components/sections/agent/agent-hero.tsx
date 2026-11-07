import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { AnchorButton, LinkButton } from "@/components/ui/button";
import { Badge, DemoTag } from "@/components/ui/feedback";
import type { AgentContent } from "@/content/agent";
import { AgentSessionMock } from "./illustrations";

/**
 * The headline has no reveal animation, unlike the board's line masks, so it paints at once and
 * LCP does not wait for it. Its final position is the same.
 */
export function AgentHero({
  content,
  breadcrumb,
}: {
  content: AgentContent["hero"];
  breadcrumb: AgentContent["breadcrumb"];
}) {
  return (
    <section className="bg-ink p-[210px_0_140px] overflow-hidden" aria-labelledby="agent-title">
      <div className="orbs" aria-hidden="true">
        <span className="orb orb-c w-[620px] h-[620px] right-[-120px] top-[80px]" />
        <span className="orb orb-t w-[420px] h-[420px] right-[380px] top-[460px] opacity-[.5]" />
        <span className="orb orb-m w-[380px] h-[380px] right-[40px] top-[-60px] opacity-[.45]" />
      </div>
      <div className="wrap lift grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-[56px] items-center sx-1100:grid-cols-[minmax(0,1fr)]">
        <div className="stack gap-6">
          <SeoBreadcrumbs
            path="/agent"
            label={breadcrumb.label}
            items={[{ label: breadcrumb.home, href: "/" }, { label: breadcrumb.current }]}
          />
          <span className="row gap-3">
            <Badge isNew>{content.isNew}</Badge>
            <span className="t-mono text-on-dark-2">{content.label}</span>
          </span>
          <h1 className="t-h1 text-[clamp(40px,4.6cqi,68px)]" id="agent-title">
            <span className="block pb-[.06em]">{content.lines[0]} </span>
            <span className="block pb-[.06em] t-grad">{content.lines[1]}</span>
          </h1>
          <p className="t-lead">{content.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/contact" variant="light" size="lg" arrow>
              {content.primaryCta}
            </LinkButton>
            <AnchorButton href="#how" variant="ghost" size="lg">
              {content.secondaryCta}
            </AnchorButton>
          </div>
          <DemoTag className="self-start">{content.illustrative}</DemoTag>
        </div>
        <AgentSessionMock content={content.mock} />
      </div>
    </section>
  );
}
