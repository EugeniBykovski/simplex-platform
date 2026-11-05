import { cx } from "@/components/ui/cx";
import { Icon } from "@/components/ui/icon";
import type { AgentContent } from "@/content/agent";

export function AgentHow({ content }: { content: AgentContent["how"] }) {
  return (
    <section className="bg-ink section scroll-mt-[90px]" id="how" aria-labelledby="how-title">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <span className="tag self-start">{content.tag}</span>
            <h2 className="t-h2" id="how-title">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="grid-4 [--gap:16px]">
          {content.steps.map((step) => (
            <article
              className="widget widget-dark p-[26px] min-h-[300px] flex flex-col justify-between gap-[24px]"
              key={step.n}
            >
              <span className="row between">
                <span className={cx("w-app w-[40px] h-[40px] rounded-[12px]", step.tone)}>
                  <Icon name={step.icon} className="[--icon:20px]" />
                </span>
                <span className="idx">{step.n}</span>
              </span>
              <span className="stack gap-2">
                <h3 className="t-h4">{step.title}</h3>
                <p className="t-small">{step.body}</p>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
