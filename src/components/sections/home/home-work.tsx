import { cx } from "@/components/ui/cx";
import { LinkButton } from "@/components/ui/button";
import { DemoTag, Tag } from "@/components/ui/feedback";
import { ArrowLink } from "@/components/ui/links";
import type { HomeContent } from "@/content/home";
import { CareMock, LedgerMock, RouteMock } from "./illustrations";
import { stackIndex } from "./style";

const MOCKS = { fintech: <LedgerMock />, healthcare: <CareMock />, logistics: <RouteMock /> };

/** All three projects stay labelled as demonstrations until verified clients exist. */
export function HomeWork({ content }: { content: HomeContent["work"] }) {
  return (
    <section
      className="bg-mist section [content-visibility:auto] [contain-intrinsic-size:auto_2650px] sx-1000:[contain-intrinsic-size:auto_3500px] sx-600:[contain-intrinsic-size:auto_3900px]"
      aria-labelledby="work"
    >
      <div className="wrap stack gap-8">
        <div className="wrap-row between gap-5 items-end">
          <div className="stack gap-5 max-w-[760px]">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h1" id="work">
              {content.titleStart} <span className="t-tone">{content.titleTone}</span>
            </h2>
          </div>
          <div className="stack gap-3 items-start">
            <DemoTag>{content.demoNote}</DemoTag>
            <ArrowLink href="/work">{content.link}</ArrowLink>
          </div>
        </div>
        <div className="stack-cards gap-[28px]">
          {content.projects.map((project, index) => (
            <article
              className={cx(
                cx("solid panel-split stack-card", stackIndex[index]),
                "rounded-[32px] overflow-hidden min-h-[620px] [box-shadow:var(--shadow-2)] border-0",
              )}
              key={project.name}
            >
              <div className="stack p-[clamp(28px,4cqi,56px)] justify-between gap-[40px] [background:#EEF0F5] relative">
                <span className="absolute left-[0px] right-[0px] top-[0px] h-[2px] [background:linear-gradient(90deg,#2F57F5,#3F6A93,#9DB4CC)]" />
                <div className="stack gap-5">
                  <div className="wrap-row gap-2">
                    <Tag>{project.industry}</Tag>
                    <DemoTag>{content.demo}</DemoTag>
                  </div>
                  <h3 className="t-h2">{project.name}</h3>
                  <p className="t-lead text-text">{project.summary}</p>
                </div>
                <dl className="stack gap-4">
                  <div className="stack gap-1">
                    <dt className="t-mono text-text-3">{content.challenge}</dt>
                    <dd className="t-body">{project.challenge}</dd>
                  </div>
                  <div className="stack gap-1">
                    <dt className="t-mono text-text-3">{content.solution}</dt>
                    <dd className="t-body">{project.solution}</dd>
                  </div>
                </dl>
                <div className="stack gap-5">
                  <div className="wrap-row gap-2">
                    {project.tags.map((tag) => (
                      <span className="chip chip-outline" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <LinkButton href={project.href} arrow className="self-start">
                    {content.cta}
                  </LinkButton>
                </div>
              </div>
              <div
                className={`viz viz-${project.viz} reveal-scale rounded-[0] min-h-[420px] grid place-items-center p-[clamp(20px,4cqi,56px)]`}
              >
                <span className="slice" />
                {MOCKS[project.viz]}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
