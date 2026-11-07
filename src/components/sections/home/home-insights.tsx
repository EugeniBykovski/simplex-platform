import { cx } from "@/components/ui/cx";
import { DemoTag } from "@/components/ui/feedback";
import { ArrowLink } from "@/components/ui/links";
import type { HomeContent } from "@/content/home";

/** Sample articles, labelled as such. None is published, so the cards are not links (GAP-C07). */
export function HomeInsights({ content }: { content: HomeContent["insights"] }) {
  const minutes = (count: number) => content.minutes.replace("{count}", String(count));
  const [first, second] = content.cards;
  if (!first || !second) return null;

  return (
    <section
      className="section [content-visibility:auto] [contain-intrinsic-size:auto_1050px] sx-1000:[contain-intrinsic-size:auto_1350px] sx-600:[contain-intrinsic-size:auto_1650px]"
      aria-labelledby="ins"
    >
      <div className="wrap stack gap-7">
        <div className="wrap-row between gap-5 items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h1" id="ins">
              {content.title}
            </h2>
          </div>
          <div className="stack gap-3 items-start">
            <DemoTag>{content.sample}</DemoTag>
            <ArrowLink href="/insights">{content.link}</ArrowLink>
          </div>
        </div>
        <div className="grid-12 bento bento-md [--gap:16px]">
          <article className="solid reveal col-span-7 overflow-hidden flex flex-col">
            <div className="viz viz-enterprise rounded-[0] h-[360px] flex items-end p-[24px]">
              <span className="slice" />
              <span className="tag text-white border-[rgba(255,255,255,.3)]">
                {content.featured.tag}
              </span>
            </div>
            <div className="stack gap-3 p-[32px]">
              <h3 className="t-h3">{content.featured.title}</h3>
              <p className="t-body">{content.featured.body}</p>
              <p className="t-xs mt-[8px]">{minutes(content.featured.minutes)}</p>
            </div>
          </article>
          <div className="stack gap-4 col-span-5">
            {[
              { card: first, badge: "badge badge-soft" },
              { card: second, badge: "badge badge-graphite" },
            ].map(({ card, badge }) => (
              <article
                key={card.title}
                className="solid reveal p-[32px] flex flex-col gap-[14px] flex-1"
              >
                <span className={cx(badge, "self-start")}>{card.tag}</span>
                <h3 className="t-h4">{card.title}</h3>
                <p className="t-small">{card.body}</p>
                <p className="t-xs mt-auto">{minutes(card.minutes)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
