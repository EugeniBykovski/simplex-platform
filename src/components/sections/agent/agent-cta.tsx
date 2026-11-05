import { LinkButton } from "@/components/ui/button";
import type { AgentContent } from "@/content/agent";

export function AgentCta({ content }: { content: AgentContent["cta"] }) {
  return (
    <section className="bg-cta dark p-[140px_0]" aria-labelledby="agent-cta">
      <div className="wrap split items-end">
        <h2 className="t-h1" id="agent-cta">
          {content.title}
        </h2>
        <div className="stack gap-5">
          <p className="t-lead">{content.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/contact" size="lg" arrow>
              {content.primaryCta}
            </LinkButton>
            <LinkButton href="/services/ai-engineering" variant="glass" size="lg">
              {content.secondaryCta}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
