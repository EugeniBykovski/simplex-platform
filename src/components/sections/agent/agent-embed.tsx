import { LinkButton } from "@/components/ui/button";
import { DemoTag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import type { AgentContent } from "@/content/agent";
import { EmbedMock } from "./illustrations";

export function AgentEmbed({ content }: { content: AgentContent["embed"] }) {
  return (
    <section className="section" aria-labelledby="embed">
      <div className="wrap split-even items-center">
        <div className="stack gap-6">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="t-h2" id="embed">
            {content.title}
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
          <LinkButton href="/contact" arrow className="self-start">
            {content.cta}
          </LinkButton>
        </div>
        <div className="viz viz-light min-h-[560px] grid place-items-center p-[32px] sx-600:p-[56px_16px_16px]">
          <DemoTag className="absolute top-[16px] left-[16px]">{content.tag}</DemoTag>
          <EmbedMock content={content.mock} />
        </div>
      </div>
    </section>
  );
}
