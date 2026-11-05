import { LinkButton } from "@/components/ui/button";
import { Badge, DemoTag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import type { HomeContent } from "@/content/home";
import { AgentWidgets } from "./illustrations";

export function HomeAgent({ content }: { content: HomeContent["agent"] }) {
  return (
    <section className="bg-mist section" aria-labelledby="agent" style={{ overflow: "hidden" }}>
      <div className="orbs" aria-hidden="true">
        <span
          className="orb orb-b"
          style={{ width: 640, height: 640, right: "4%", top: "6%", opacity: 0.45 }}
        />
        <span
          className="orb orb-m"
          style={{ width: 560, height: 560, right: "28%", bottom: "-10%", opacity: 0.55 }}
        />
        <span
          className="orb orb-t"
          style={{ width: 420, height: 420, left: -120, top: "30%", opacity: 0.3 }}
        />
      </div>
      <div className="wrap split lift" style={{ alignItems: "center" }}>
        <div className="stack gap-6">
          <span className="wrap-row gap-3">
            <Badge isNew>{content.isNew}</Badge>
            <span className="eyebrow">{content.eyebrow}</span>
            <DemoTag>{content.illustrative}</DemoTag>
          </span>
          <h2 className="t-h1" id="agent">
            {content.titleStart} <span className="t-grad">{content.titleAccent}</span>
          </h2>
          <p className="t-lead">{content.lead}</p>
          <ul className="checks">
            {content.checks.map((check) => (
              <li key={check}>
                <Icon name="check" />
                {check}
              </li>
            ))}
          </ul>
          <div className="wrap-row gap-3">
            <LinkButton href="/agent" size="lg" arrow>
              {content.primaryCta}
            </LinkButton>
            <LinkButton href="/contact" variant="glass" size="lg">
              {content.secondaryCta}
            </LinkButton>
          </div>
        </div>
        <AgentWidgets />
      </div>
    </section>
  );
}
