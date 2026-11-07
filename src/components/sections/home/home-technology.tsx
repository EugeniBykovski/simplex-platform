import { ArrowLink } from "@/components/ui/links";
import type { HomeContent } from "@/content/home";
import { HomeTechnologyPanel } from "./home-technology-panel";
import { TechMarquees } from "./illustrations";

export function HomeTechnology({ content }: { content: HomeContent["technology"] }) {
  return (
    <section
      className="bg-mist section [content-visibility:auto] [contain-intrinsic-size:auto_1375px] sx-1000:[contain-intrinsic-size:auto_1450px] sx-600:[contain-intrinsic-size:auto_1600px]"
      aria-labelledby="tech"
    >
      <div className="wrap stack gap-7">
        <div className="split [align-items:end]">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h1" id="tech">
              {content.titleStart} <span className="t-tone">{content.titleTone}</span>
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <TechMarquees />
        <HomeTechnologyPanel
          tabs={content.tabs}
          label={content.tabsLabel}
          showAll={content.showAll}
          showFewer={content.showFewer}
          directory={
            <ArrowLink href="/technologies" className="self-start">
              {content.directory}
            </ArrowLink>
          }
        />
      </div>
    </section>
  );
}
