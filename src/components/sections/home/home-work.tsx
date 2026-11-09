import { LinkButton } from "@/components/ui/button";
import { cx } from "@/components/ui/cx";
import { Tag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import { ArrowLink } from "@/components/ui/links";
import { SectorGround } from "@/components/ui/surface";
import type { WorkSlug } from "@/config/routes";
import type { HomeContent } from "@/content/home";
import { getProject } from "@/content/work";
import type { Locale } from "@/i18n/routing";
import { stackIndex } from "./style";

/** Three of the approved projects. Each page states what is built and what is still planned. */
const FEATURED: readonly WorkSlug[] = ["simplefit-boxing", "financialpress", "hobworks"];

export function HomeWork({ content, locale }: { content: HomeContent["work"]; locale: Locale }) {
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
          <ArrowLink href="/work">{content.link}</ArrowLink>
        </div>
        <div className="stack-cards gap-[28px]">
          {FEATURED.map((slug, index) => {
            const project = getProject(slug);
            const words = project.words[locale];
            return (
              <article
                className={cx(
                  cx("solid panel-split stack-card", stackIndex[index]),
                  "rounded-[32px] overflow-hidden min-h-[620px] [box-shadow:var(--shadow-2)] border-0",
                )}
                key={slug}
              >
                <div className="stack p-[clamp(28px,4cqi,56px)] justify-between gap-[40px] [background:#EEF0F5] relative">
                  <span className="absolute left-[0px] right-[0px] top-[0px] h-[2px] [background:linear-gradient(90deg,#2F57F5,#3F6A93,#9DB4CC)]" />
                  <div className="stack gap-5">
                    <div className="wrap-row gap-2">
                      <Tag>{words.category}</Tag>
                      <Tag>{words.status}</Tag>
                    </div>
                    <h3 className="t-h2">{project.name}</h3>
                    <p className="t-lead text-text">{words.tagline}</p>
                  </div>
                  <dl className="stack gap-4">
                    <div className="stack gap-1">
                      <dt className="t-mono text-text-3">{content.role}</dt>
                      <dd className="t-body">{words.role}</dd>
                    </div>
                    <div className="stack gap-1">
                      <dt className="t-mono text-text-3">{content.built}</dt>
                      <dd className="t-body">{words.built.slice(0, 2).join(". ")}.</dd>
                    </div>
                  </dl>
                  <div className="stack gap-5">
                    <div className="wrap-row gap-2">
                      {project.stack.slice(0, 4).map((tag) => (
                        <span className="chip chip-outline" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <LinkButton href={`/work/${slug}`} arrow className="self-start">
                      {content.cta}
                      <span className="sr-only">: {project.name}</span>
                    </LinkButton>
                  </div>
                </div>
                <SectorGround
                  sector={project.ground}
                  className="reveal-scale rounded-[0] min-h-[420px] grid place-items-center p-[clamp(20px,4cqi,56px)]"
                  aria-hidden="true"
                >
                  <span className="slice" />
                  <span className="glass-dark relative stack gap-5 p-[28px] rounded-[26px] w-full max-w-[420px] text-white">
                    <Icon name={project.icon} className="[--icon:56px] text-white" />
                    <span className="t-h2 text-white">{project.name}</span>
                    <span className="wrap-row gap-2">
                      {project.stack.slice(4, 9).map((tag) => (
                        <span
                          className="chip text-white border-[rgba(255,255,255,.28)] bg-[rgba(255,255,255,.08)]"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  </span>
                </SectorGround>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
