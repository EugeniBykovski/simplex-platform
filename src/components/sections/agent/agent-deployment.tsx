import { cx } from "@/components/ui/cx";
import { DemoTag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import type { AgentContent } from "@/content/agent";

export function AgentDeployment({ content }: { content: AgentContent["deployment"] }) {
  return (
    <section className="bg-ink section" aria-labelledby="dep">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <span className="wrap-row gap-3">
              <span className="tag">{content.tag}</span>
              <DemoTag>{content.demoTag}</DemoTag>
            </span>
            <h2 className="t-h2" id="dep">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="grid-3 [--gap:16px]">
          {content.models.map((model) => (
            <article
              className={cx("glass-dark model-card min-h-[0]", model.featured && "is-featured")}
              key={model.n}
            >
              <span className="row between">
                <span className="idx">{model.n}</span>
                <Icon name={model.icon} className="text-[#9DB4CC] [--icon:36px]" />
              </span>
              <div className="stack gap-3">
                <h3 className="t-h3">{model.title}</h3>
                <p className="t-body">{model.body}</p>
              </div>
              <ul className="checks">
                {model.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="glass-dark p-[28px] rounded-[26px] grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-[20px]">
          {content.governance.map((item) => (
            <div className="stack gap-2" key={item.title}>
              <span className="t-mono text-[#9DB4CC]">{item.title}</span>
              <span className="t-small">{item.body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
