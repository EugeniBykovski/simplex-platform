import { Icon } from "@/components/ui/icon";
import type { AgentContent } from "@/content/agent";
import { SparkBars } from "./illustrations";

const tile = "widget min-h-[220px] flex flex-col justify-between";

export function AgentCapabilities({ content }: { content: AgentContent["capabilities"] }) {
  const { feature, tests, infrastructure, migrations, docs, observability } = content;
  return (
    <section className="bg-mist section overflow-hidden" aria-labelledby="caps">
      <div className="orbs" aria-hidden="true">
        <span className="orb orb-t w-[600px] h-[600px] left-[30%] top-[20%] opacity-[.35]" />
        <span className="orb orb-c w-[500px] h-[500px] left-[-100px] bottom-[-100px] opacity-[.3]" />
      </div>
      <div className="wrap stack gap-8 lift">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h2" id="caps">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="grid-4 widget-grid [--gap:16px]">
          <div className={`${tile} wspan2 col-span-2`}>
            <span className="w-head">
              <span className="w-app">
                <Icon name="custom" />
              </span>
              {feature.head}
            </span>
            <span className="t-h4">{feature.title}</span>
            <SparkBars />
          </div>
          <div className={tile}>
            <span className="w-head">
              <span className="w-app t">
                <Icon name="quality" />
              </span>
              {tests.head}
            </span>
            <div className="ring [--p:100] [--c:#0C2A45]">
              <b className="text-[15px]">{tests.ring}</b>
            </div>
            <span className="w-sub">{tests.note}</span>
          </div>
          <div className={tile}>
            <span className="w-head">
              <span className="w-app m">
                <Icon name="cloud" />
              </span>
              {infrastructure.head}
            </span>
            <span className="w-big">{infrastructure.big}</span>
            <span className="w-sub">{infrastructure.note}</span>
          </div>
          <div className={tile}>
            <span className="w-head">
              <span className="w-app k">
                <Icon name="legacy" />
              </span>
              {migrations.head}
            </span>
            <span className="t-h5">{migrations.title}</span>
            <span className="w-sub">{migrations.note}</span>
          </div>
          <div className={tile}>
            <span className="w-head">
              <span className="w-app">
                <Icon name="architecture" />
              </span>
              {docs.head}
            </span>
            <span className="t-h5">{docs.title}</span>
            <span className="w-sub">{docs.note}</span>
          </div>
          <div
            className={`${tile} widget-dark wspan2 col-span-2 bg-[linear-gradient(160deg,#141B55,#070B2B)]`}
          >
            <span className="w-head">
              <span className="w-app t">
                <Icon name="ai" />
              </span>
              {observability.head}
            </span>
            <div className="w-list">
              {observability.items.map((item) => (
                <span className="w-item" key={item}>
                  <span className="pulse" />
                  {item}
                  <span className="st">{observability.state}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
