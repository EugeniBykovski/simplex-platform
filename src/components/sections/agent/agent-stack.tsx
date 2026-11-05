import { cx } from "@/components/ui/cx";
import { Icon } from "@/components/ui/icon";
import { Tabs } from "@/components/ui/tabs";
import type { AgentContent } from "@/content/agent";

/** The stack picker. Panels render on the server, so only the tab selection reaches the browser. */
export function AgentStack({ content }: { content: AgentContent["stack"] }) {
  return (
    <section className="bg-mist section overflow-hidden" aria-labelledby="stack">
      <div className="orbs" aria-hidden="true">
        <span className="orb orb-b w-[520px] h-[520px] left-[-160px] top-[120px] opacity-[.35]" />
        <span className="orb orb-m w-[520px] h-[520px] right-[-120px] bottom-[-120px] opacity-[.45]" />
      </div>
      <div className="wrap stack gap-7 lift">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h2" id="stack">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <Tabs
          className="stack gap-7"
          listClassName="self-start max-w-full"
          label={content.tabsLabel}
          items={content.stacks.map((stack) => ({
            id: stack.id,
            label: stack.label,
            panel: (
              <div className="glass p-[clamp(20px,3cqi,36px)] rounded-[32px]">
                <div className="row between gap-4 stack-sm mb-[22px]">
                  <span className="row gap-3">
                    <b>{content.detected}</b>
                    <span className="wrap-row gap-2">
                      {stack.detected.map((item) => (
                        <span className="chip bg-[rgba(255,255,255,.7)]" key={item}>
                          {item}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="t-xs font-mono">
                    {content.blueprint} · {stack.label}
                  </span>
                </div>
                <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[12px] sx-1100:grid-cols-[repeat(2,minmax(0,1fr))] sx-600:grid-cols-[minmax(0,1fr)]">
                  {stack.blocks.map((block) => (
                    <div
                      className="widget min-h-[210px] flex flex-col gap-[14px]"
                      key={block.title}
                    >
                      <span className="w-head">
                        <span className={cx("w-app", block.tone)}>
                          <Icon name={block.icon} />
                        </span>
                        {block.title}
                      </span>
                      <div className="w-list">
                        {block.items.map((item) => (
                          <span className="w-item" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="t-xs mt-[18px]">{content.note}</p>
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}
