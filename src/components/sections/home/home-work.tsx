import { LinkButton } from "@/components/ui/button";
import { DemoTag, Tag } from "@/components/ui/feedback";
import { ArrowLink } from "@/components/ui/links";
import type { HomeContent } from "@/content/home";
import { CareMock, LedgerMock, RouteMock } from "./illustrations";
import { vars } from "./style";

const MOCKS = { fintech: <LedgerMock />, healthcare: <CareMock />, logistics: <RouteMock /> };

/** All three projects stay labelled as demonstrations until verified clients exist. */
export function HomeWork({ content }: { content: HomeContent["work"] }) {
  return (
    <section className="bg-mist section" aria-labelledby="work">
      <div className="wrap stack gap-8">
        <div className="wrap-row between gap-5" style={{ alignItems: "flex-end" }}>
          <div className="stack gap-5" style={{ maxWidth: 760 }}>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h1" id="work">
              {content.titleStart} <span className="t-tone">{content.titleTone}</span>
            </h2>
          </div>
          <div className="stack gap-3" style={{ alignItems: "flex-start" }}>
            <DemoTag>{content.demoNote}</DemoTag>
            <ArrowLink href="/work">{content.link}</ArrowLink>
          </div>
        </div>
        <div className="stack-cards" style={{ gap: 28 }}>
          {content.projects.map((project, index) => (
            <article
              className="solid panel-split stack-card"
              key={project.name}
              style={vars({
                "--i": index,
                borderRadius: 32,
                overflow: "hidden",
                minHeight: 620,
                boxShadow: "var(--shadow-2)",
                border: 0,
              })}
            >
              <div
                className="stack"
                style={{
                  padding: "clamp(28px, 4cqi, 56px)",
                  justifyContent: "space-between",
                  gap: 40,
                  background: "#EEF0F5",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 2,
                    background: "linear-gradient(90deg, #2F57F5, #3F6A93, #9DB4CC)",
                  }}
                />
                <div className="stack gap-5">
                  <div className="wrap-row gap-2">
                    <Tag>{project.industry}</Tag>
                    <DemoTag>{content.demo}</DemoTag>
                  </div>
                  <h3 className="t-h2">{project.name}</h3>
                  <p className="t-lead" style={{ color: "var(--text)" }}>
                    {project.summary}
                  </p>
                </div>
                <dl className="stack gap-4">
                  <div className="stack gap-1">
                    <dt className="t-mono" style={{ color: "var(--text-3)" }}>
                      {content.challenge}
                    </dt>
                    <dd className="t-body">{project.challenge}</dd>
                  </div>
                  <div className="stack gap-1">
                    <dt className="t-mono" style={{ color: "var(--text-3)" }}>
                      {content.solution}
                    </dt>
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
                  <LinkButton href={project.href} arrow style={{ alignSelf: "flex-start" }}>
                    {content.cta}
                  </LinkButton>
                </div>
              </div>
              <div
                className={`viz viz-${project.viz} reveal-scale`}
                style={{
                  borderRadius: 0,
                  minHeight: 420,
                  display: "grid",
                  placeItems: "center",
                  padding: "clamp(20px, 4cqi, 56px)",
                }}
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
