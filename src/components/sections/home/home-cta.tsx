import { LinkButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import type { HomeContent } from "@/content/home";

export function HomeCta({ content }: { content: HomeContent["cta"] }) {
  return (
    <section className="bg-cta dark p-[clamp(120px,14cqi,200px)_0]" aria-labelledby="cta">
      <div className="wrap stack items-center text-center gap-[32px]">
        <p className="t-mono">{content.eyebrow}</p>
        <h2 className="t-display reveal max-w-[1100px]" id="cta">
          {content.title}
        </h2>
        <p className="t-lead max-w-[560px]">{content.lead}</p>
        <div className="wrap-row gap-3 stack-sm justify-center">
          <LinkButton href="/contact" size="lg" arrow>
            {content.primaryCta}
          </LinkButton>
          <LinkButton href="/work" variant="glass" size="lg">
            {content.secondaryCta}
          </LinkButton>
        </div>
        <div className="cta-kpis" role="list">
          {content.kpis.map((kpi) => (
            <div role="listitem" key={kpi.title}>
              <b>{kpi.title}</b>
              <span>{kpi.body}</span>
            </div>
          ))}
        </div>
        <div className="cta-trust">
          {content.trust.map((item) => (
            <span key={item}>
              <Icon name="check" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
