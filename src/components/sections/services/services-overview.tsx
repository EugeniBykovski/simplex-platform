import { LinkButton } from "@/components/ui/button";
import { ComparisonRow, ComparisonTable, Breadcrumbs } from "@/components/ui/controls";
import { cx } from "@/components/ui/cx";
import { Icon } from "@/components/ui/icon";
import { RouteLink } from "@/components/ui/links";
import { CardArrow, Surface } from "@/components/ui/surface";
import type { ServicesOverviewCopy } from "@/content/services";

/**
 * The sections of Services.dc.html, in its order. The headline has no reveal animation, so it
 * paints at once, as on the Agent page.
 */
export function ServicesHero({ content }: { content: ServicesOverviewCopy }) {
  const { hero, breadcrumb } = content;
  return (
    <section
      className="bg-horizon is-live p-[210px_0_150px] overflow-hidden"
      aria-labelledby="services-title"
    >
      <div className="wrap split items-end">
        <div className="stack gap-6">
          <Breadcrumbs
            label={breadcrumb.label}
            items={[{ label: breadcrumb.home, href: "/" }, { label: breadcrumb.current }]}
          />
          <h1 className="t-h1" id="services-title">
            <span className="block pb-[.06em]">{hero.lines[0]} </span>
            <span className="block pb-[.06em] t-grad">{hero.lines[1]}</span>
          </h1>
          <p className="t-lead max-w-[560px]">{hero.lead}</p>
        </div>
        <Surface variant="glass" className="stack gap-2 p-[12px]">
          <p className="t-mono text-text-3 p-[14px_14px_6px]">{hero.pickerTitle}</p>
          {hero.picks.map((pick) => (
            <RouteLink
              key={pick.href}
              href={pick.href}
              className="row between gap-4 card-hover p-[18px] rounded-[18px] bg-[rgba(255,255,255,.6)]"
            >
              <span className="stack">
                <b>{pick.title}</b>
                <span className="t-small">{pick.path}</span>
              </span>
              <CardArrow />
            </RouteLink>
          ))}
        </Surface>
      </div>
    </section>
  );
}

const GROUND = {
  mist: { section: "bg-mist", card: "glass", icon: "text-[#2F57F5]" },
  ink: { section: "bg-ink", card: "glass-dark", icon: "text-[#9DB4CC]" },
  white: { section: undefined, card: "solid", icon: "text-[#070B2B]" },
} as const;

export function ServicesGroups({ groups }: { groups: ServicesOverviewCopy["groups"] }) {
  return groups.map((group) => {
    const ground = GROUND[group.ground];
    return (
      <section className={cx(ground.section, "section")} aria-label={group.title} key={group.n}>
        <div className="wrap split-wide">
          <div className="sticky-col stack gap-5">
            <span className="t-mono opacity-[.7]">{group.n} / 04</span>
            <h2 className="t-h2">{group.title}</h2>
            <p className="t-body max-w-[420px]">{group.body}</p>
          </div>
          <div className="grid-2 [--gap:16px]">
            {group.items.map((item) => (
              <RouteLink
                key={item.title}
                href={item.href}
                pendingLook="card"
                className={cx(
                  ground.card,
                  "card-hover reveal p-[32px] min-h-[330px] flex flex-col justify-between gap-[28px]",
                )}
              >
                <span className="row between">
                  <Icon name={item.icon} className={ground.icon} />
                  <CardArrow />
                </span>
                <span className="stack gap-3">
                  <span className="t-h4">{item.title}</span>
                  <span className="t-small text-[inherit] opacity-[.8]">{item.body}</span>
                </span>
                <span className="wrap-row gap-2">
                  {item.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </span>
              </RouteLink>
            ))}
          </div>
        </div>
      </section>
    );
  });
}

const CELL = {
  L: "bg-[#2F57F5]",
  S: "bg-[#B9C6FB]",
  O: "bg-[rgba(7,11,43,.06)]",
} as const;

export function ServicesMatrix({ content }: { content: ServicesOverviewCopy["matrix"] }) {
  const roleLabel = { L: content.lead_role, S: content.support_role, O: content.no_role };
  return (
    <section className="section" aria-labelledby="matrix">
      <div className="wrap stack gap-7">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h2" id="matrix">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div
          className="solid rounded-[24px] overflow-x-auto"
          role="region"
          aria-label={content.label}
          tabIndex={0}
        >
          <div className="min-w-[760px]">
            <div className="grid-12 [--gap:0px] p-[16px_24px] border-b border-line bg-paper">
              <span className="t-mono col-span-4 text-text-3">{content.service}</span>
              {content.stages.map((stage) => (
                <span
                  className="t-mono col-span-1 text-text-3 text-center whitespace-nowrap text-[10.5px]"
                  key={stage}
                >
                  {stage}
                </span>
              ))}
              <span className="col-span-3" />
            </div>
            {content.rows.map((row) => (
              <RouteLink
                key={row.href}
                href={row.href}
                className="grid-12 [--gap:0px] p-[14px_24px] border-b border-line items-center transition-colors duration-[var(--dur-2)] hover:bg-paper"
              >
                <span className="col-span-4 font-[500]">{row.title}</span>
                {row.cells.map((cell, index) => (
                  <span className="col-span-1 grid place-items-center" key={content.stages[index]}>
                    <span
                      className={cx(
                        "w-[14px] h-[14px] rounded-[4px] [transform:skewX(-18deg)]",
                        CELL[cell],
                      )}
                    />
                    <span className="sr-only">
                      {content.stages[index]}: {roleLabel[cell]}
                    </span>
                  </span>
                ))}
                <span className="col-span-3 text-right t-small" aria-hidden="true">
                  {content.view}
                </span>
              </RouteLink>
            ))}
          </div>
        </div>
        <div className="row gap-5 t-small">
          <span className="row gap-2">
            <span className="w-[12px] h-[12px] rounded-[3px] bg-[#2F57F5]" />
            {content.lead_role}
          </span>
          <span className="row gap-2">
            <span className="w-[12px] h-[12px] rounded-[3px] bg-[#B9C6FB]" />
            {content.support_role}
          </span>
        </div>
      </div>
    </section>
  );
}

/** Replaces the source's rule keyed to its inline style, which Tailwind classes cannot match. */
const COMPARE_COLUMNS =
  "grid-cols-[200px_repeat(4,minmax(0,1fr))] sx-860:grid-cols-[130px_repeat(4,minmax(120px,1fr))] sx-860:min-w-[640px]";

export function ServicesCompare({ content }: { content: ServicesOverviewCopy["compare"] }) {
  return (
    <section className="paper section" aria-labelledby="vs">
      <div className="wrap stack gap-7">
        <div className="gx-head">
          <div className="stack gap-4">
            <span className="gx-tag">{content.tag}</span>
            <h2 className="t-h1" id="vs">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <ComparisonTable label={content.label} className="overflow-x-auto">
          <ComparisonRow className={cx("head", COMPARE_COLUMNS)}>
            <span />
            <span>{content.heads[0]}</span>
            <span>{content.heads[1]}</span>
            <span>{content.heads[2]}</span>
            <span className="hl">{content.heads[3]}</span>
          </ComparisonRow>
          {content.rows.map((row) => (
            <ComparisonRow className={COMPARE_COLUMNS} key={row.key}>
              <span>{row.key}</span>
              <span>{row.values[0]}</span>
              <span>{row.values[1]}</span>
              <span>{row.values[2]}</span>
              <span className="hl">
                <b>{row.values[3]}</b>
              </span>
            </ComparisonRow>
          ))}
        </ComparisonTable>
        <p className="t-xs">{content.note}</p>
      </div>
    </section>
  );
}

export function ServicesCta({ content }: { content: ServicesOverviewCopy["cta"] }) {
  return (
    <section className="bg-cta dark p-[140px_0]" aria-labelledby="services-cta">
      <div className="wrap split items-end">
        <h2 className="t-h1" id="services-cta">
          {content.title}
        </h2>
        <div className="stack gap-5">
          <p className="t-lead">{content.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/contact" size="lg" arrow>
              {content.primary}
            </LinkButton>
            <LinkButton href="/how-we-work" variant="glass" size="lg">
              {content.secondary}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
