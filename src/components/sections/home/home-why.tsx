import type { HomeContent } from "@/content/home";

export function HomeWhy({ content }: { content: HomeContent["why"] }) {
  const [first, second, third, fourth, fifth, sixth] = content.cards;
  if (!first || !second || !third || !fourth || !fifth || !sixth) return null;

  return (
    <section className="section" aria-labelledby="why">
      <div className="wrap stack gap-8">
        <div className="split [align-items:end]">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h1 reveal" id="why">
              {content.title}
            </h2>
          </div>
          <p className="t-lead reveal">{content.lead}</p>
        </div>
        <div className="grid-12 bento [--gap:16px]">
          <article className="paper-card reveal flex flex-col justify-between col-span-7 p-[40px] min-h-[340px] gap-[40px] relative overflow-hidden">
            <div className="tex-grid absolute inset-[0px] opacity-[0.6] [mask-image:linear-gradient(90deg,transparent_30%,#000)]" />
            <span className="idx relative">{first.label}</span>
            <div className="stack gap-3 relative max-w-[480px]">
              <h3 className="t-h3">{first.title}</h3>
              <p className="t-body">{first.body}</p>
            </div>
          </article>
          <article className="dark reveal flex flex-col justify-between col-span-5 p-[40px] rounded-lg min-h-[340px] gap-[40px]">
            <span className="idx">{second.label}</span>
            <div className="stack gap-3">
              <h3 className="t-h3">{second.title}</h3>
              <p className="t-body">{second.body}</p>
            </div>
          </article>
          {[third, fourth, fifth].map((card) => (
            <article
              className="solid reveal flex flex-col justify-between col-span-4 p-[36px] min-h-[300px] gap-[32px]"
              key={card.label}
            >
              <span className="idx">{card.label}</span>
              <div className="stack gap-3">
                <h3 className="t-h4">{card.title}</h3>
                <p className="t-small">{card.body}</p>
              </div>
            </article>
          ))}
          <article className="bg-horizon reveal col-span-12 p-[clamp(28px,4cqi,56px)] min-h-[280px] rounded-lg overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-[32px] [align-items:end] [border:1px_solid_var(--line)]">
            <div className="stack gap-4">
              <span className="idx">{sixth.label}</span>
              <h3 className="t-h2">{sixth.title}</h3>
            </div>
            <p className="t-lead text-text">{sixth.body}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
