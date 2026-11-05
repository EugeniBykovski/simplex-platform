import { LinkButton } from "@/components/ui/button";
import type { AgentContent } from "@/content/agent";
import type { Locale } from "@/i18n/routing";
import { AgentRoiPanel } from "./agent-roi-panel";

export function AgentRoi({ content, locale }: { content: AgentContent["roi"]; locale: Locale }) {
  return (
    <section className="paper section" aria-labelledby="roi">
      <div className="wrap stack gap-7">
        <div className="gx-head">
          <div className="stack gap-4">
            <span className="gx-tag">{content.tag}</span>
            <h2 className="t-h1" id="roi">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <AgentRoiPanel
          copy={content.copy}
          locale={locale}
          cta={
            <LinkButton href="/contact" variant="light" arrow className="self-start mt-auto">
              {content.cta}
            </LinkButton>
          }
        />
      </div>
    </section>
  );
}
