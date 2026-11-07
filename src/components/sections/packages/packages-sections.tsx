import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import type { ReactNode } from "react";
import { AnchorButton, LinkButton } from "@/components/ui/button";
import { Accordion, ComparisonTable } from "@/components/ui/controls";
import { cx } from "@/components/ui/cx";
import { Badge, DemoTag } from "@/components/ui/feedback";
import { Icon, type GlyphName } from "@/components/ui/icon";
import { ArrowLink } from "@/components/ui/links";
import { SxMark } from "@/components/ui/logo";
import {
  defaultTrack,
  packageCatalog,
  packageIds,
  trackIds,
  type PackageId,
  type PackagesContent,
  type Role,
} from "@/content/packages";
import {
  AdminLaptop,
  DesktopCardVisual,
  DesktopWindow,
  FullCycleCardVisual,
  HeroPhones,
  PodCardVisual,
  PodStage,
} from "./packages-visuals";
import { PodTracks } from "./pod-tracks";

/** The sections of Packages.dc.html, in its order. The headline has no reveal, for LCP. */
export function PackagesHero({ content }: { content: PackagesContent }) {
  const { hero, breadcrumb, mock } = content;
  return (
    <section
      className="bg-ink relative overflow-hidden p-[200px_0_0] sx-600:pt-[150px]"
      aria-labelledby="pk-title"
    >
      <div className="orbs" aria-hidden="true">
        <span className="orb orb-c w-[720px] h-[720px] left-[50%] ml-[-360px] top-[260px] opacity-[.8]" />
        <span className="orb orb-g w-[420px] h-[420px] left-[6%] top-[120px] opacity-[.4]" />
        <span className="orb orb-b w-[420px] h-[420px] right-[4%] top-[80px] opacity-[.45]" />
      </div>
      <div className="wrap lift stack gap-7">
        <SeoBreadcrumbs
          path="/packages"
          label={breadcrumb.label}
          items={[
            { label: breadcrumb.home, href: "/" },
            { label: breadcrumb.services, href: "/services" },
            { label: breadcrumb.current },
          ]}
        />
        <div className="split items-end">
          <div className="stack gap-5">
            <span className="g-chip on-dark self-start">
              <Badge isNew>{hero.isNew}</Badge>
              {hero.chip}
            </span>
            <h1 className="t-h1 text-[length:clamp(44px,6.2cqi,96px)]" id="pk-title">
              {hero.title}
            </h1>
          </div>
          <div className="stack gap-5">
            <p className="t-lead">{hero.lead}</p>
            <div className="wrap-row gap-3">
              <LinkButton href="/contact" variant="light" size="lg" arrow>
                {hero.primary}
              </LinkButton>
              <AnchorButton
                href="#compare"
                variant="ghost"
                size="lg"
                className="text-white border-[rgba(255,255,255,.24)]"
              >
                {hero.secondary}
              </AnchorButton>
            </div>
          </div>
        </div>
      </div>
      <HeroPhones mock={mock} />
    </section>
  );
}

const CARD_DESIGN: Record<
  PackageId,
  {
    surface: string;
    avatars: readonly (readonly [string, string?])[];
    label: string;
    labelRow?: string;
    title?: string;
    body?: string;
    link?: string;
  }
> = {
  "mobile-pod": {
    surface: "lg",
    avatars: [["iOS"], ["BE", "c"]],
    label: "text-text-2",
  },
  desktop: {
    surface: "lg",
    avatars: [["DT"], ["QA", "s"]],
    label: "text-text-2",
  },
  "full-cycle": {
    surface: "lg-dark lg-graphite glow-steel",
    avatars: [["PM"], ["BE", "c"], ["FE", "s"], ["MB"]],
    label: "text-on-dark-2",
    // Four avatars and a label do not fit one line in a narrow card.
    labelRow: "flex-wrap gap-y-[8px]",
    title: "text-white",
    body: "text-on-dark-2",
    link: "text-white",
  },
};

export function PackagesSelection({ content }: { content: PackagesContent }) {
  const { selection, mock } = content;
  const visuals: Record<PackageId, ReactNode> = {
    "mobile-pod": <PodCardVisual mock={mock} />,
    desktop: <DesktopCardVisual mock={mock} />,
    "full-cycle": <FullCycleCardVisual mock={mock} />,
  };
  return (
    <section className="mesh-light section relative overflow-hidden" aria-labelledby="pk-three">
      <div className="orbs" aria-hidden="true">
        <span className="orb orb-c w-[520px] h-[520px] left-[-6%] top-[10%] opacity-[.45]" />
        <span className="orb orb-s w-[520px] h-[520px] right-[-6%] bottom-[-10%] opacity-[.55]" />
      </div>
      <div className="wrap lift stack gap-7">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{selection.eyebrow}</p>
            <h2 className="t-h1" id="pk-three">
              {selection.title}
            </h2>
          </div>
          <p className="t-lead">{selection.lead}</p>
        </div>
        <div className="grid-3 [--gap:16px] items-stretch">
          {packageIds.map((id) => {
            const card = selection.cards[id];
            const design = CARD_DESIGN[id];
            return (
              <a
                className={cx(design.surface, "pkg-card card-hover")}
                href={packageCatalog[id].anchor}
                key={id}
              >
                {visuals[id]}
                <span className={cx("row between", design.labelRow)}>
                  <span className={cx("t-mono", design.label)}>{card.label}</span>
                  <span className="pkg-team">
                    <span className="avatar-stack" aria-hidden="true">
                      {design.avatars.map(([label, variant]) => (
                        <span className={cx("avatar", variant)} key={label}>
                          {label}
                        </span>
                      ))}
                    </span>
                    <b className="text-[13px]">{card.team}</b>
                  </span>
                </span>
                <span className="stack gap-2">
                  <b className={cx("t-h3", design.title)}>{card.title}</b>
                  <span className={cx("t-body", design.body)}>{card.body}</span>
                </span>
                <span className={cx("link-arrow mt-auto", design.link)}>
                  {card.link}
                  <Icon name="arrow" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RoleCard({ role, avatar }: { role: Role; avatar?: string | undefined }) {
  return (
    <div className="solid flex gap-[14px] items-center p-[16px_18px] rounded-[20px]">
      <span className={cx("avatar", avatar)} aria-hidden="true">
        {role.initials}
      </span>
      <span>
        <b className="block text-[15px]">{role.name}</b>
        <span className="t-xs block">{role.note}</span>
      </span>
    </div>
  );
}

function Checks({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={cx("checks", className)}>
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          {item}
        </li>
      ))}
    </ul>
  );
}

const TRACK_CHIPS = "flex gap-[10px] flex-wrap";

export function PackagesPod({ content }: { content: PackagesContent }) {
  const { pod, mock } = content;
  const items = trackIds.map((id) => {
    const track = pod.tracks[id];
    return {
      id,
      label: track.label,
      panel: (
        <div className="lg grain p-[24px] rounded-[24px] flex flex-col gap-[16px] bg-[#F4F6FB]">
          <div className="row between gap-4">
            <b className="t-h4">{track.title}</b>
            <span className="badge badge-graphite">{track.stores}</span>
          </div>
          <p className="t-body">{track.description}</p>
          <div className={TRACK_CHIPS}>
            {track.stack.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="grid-2 [--gap:10px]">
            <RoleCard role={track.lead} />
            <RoleCard role={track.support} avatar="c" />
          </div>
        </div>
      ),
      stage: <PodStage mock={mock} android={id === "android"} release={track.release} />,
    };
  });
  return (
    <section className="section" id="mobile-pod" aria-labelledby="pod-title">
      <PodTracks
        label={pod.tracksLabel}
        items={items}
        defaultId={defaultTrack}
        intro={
          <>
            <p className="eyebrow">{pod.eyebrow}</p>
            <h2 className="t-h1" id="pod-title">
              {pod.title}
            </h2>
            <p className="t-lead">{pod.lead}</p>
          </>
        }
        outro={
          <>
            <Checks items={pod.checks} />
            <p className="t-xs">{pod.note}</p>
          </>
        }
      />
    </section>
  );
}

const DESKTOP_FEATURES: readonly { icon: GlyphName; tint?: string }[] = [
  { icon: "fintech" },
  { icon: "logistics", tint: "g" },
  { icon: "commerce", tint: "k" },
  { icon: "legacy" },
];

function DesktopPanel({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("lg-dark p-[22px] rounded-[22px]", className)}>
      <p className="t-mono text-on-dark-3">{title}</p>
      {children}
    </div>
  );
}

function GlassChips({ items }: { items: readonly string[] }) {
  return (
    <div className="wrap-row gap-2 mt-[12px]">
      {items.map((item) => (
        <span className="g-chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

/** Replaces the source's .pk-2col rule, which targets a class this code does not need. */
const TWO_COLUMNS_COLLAPSE = "sx-860:grid-cols-[minmax(0,1fr)]";

export function PackagesDesktop({ content }: { content: PackagesContent }) {
  const { desktop, mock } = content;
  return (
    <section
      className="mesh-graphite section relative overflow-hidden text-white"
      id="desktop"
      aria-labelledby="desk-title"
    >
      <div className="orbs" aria-hidden="true">
        <span className="orb orb-c w-[600px] h-[600px] right-[10%] top-[10%] opacity-[.7]" />
        <span className="orb orb-g w-[420px] h-[420px] left-[0] bottom-[-10%] opacity-[.5]" />
      </div>
      <div className="wrap lift stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow text-on-dark-2">{desktop.eyebrow}</p>
            <h2 className="t-h1" id="desk-title">
              {desktop.title}
            </h2>
          </div>
          <p className="t-lead text-on-dark-2">{desktop.lead}</p>
        </div>
        <div
          className={cx(
            "grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-[24px] items-stretch",
            TWO_COLUMNS_COLLAPSE,
          )}
        >
          <DesktopWindow mock={mock} />
          <div className="stack gap-3">
            <DesktopPanel title={desktop.platformsTitle}>
              <GlassChips items={desktop.platforms} />
            </DesktopPanel>
            <DesktopPanel title={desktop.technologyTitle}>
              <GlassChips items={desktop.technology} />
            </DesktopPanel>
            <DesktopPanel title={desktop.builtInTitle} className="flex-1">
              <Checks items={desktop.builtIn} className="mt-[12px]" />
            </DesktopPanel>
          </div>
        </div>
        <div className="grid-4 [--gap:12px]">
          {desktop.features.map((feature, index) => {
            const design = DESKTOP_FEATURES[index];
            return (
              <div className="lg-dark g-feature min-h-[0]" key={feature.title}>
                <span className={cx("w-app", design?.tint)}>
                  <Icon name={design?.icon ?? "desktop"} />
                </span>
                <b>{feature.title}</b>
                <span className="t-small text-on-dark-2">{feature.body}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** The eight nodes around the core. The core takes the middle of the grid, after the fourth. */
const ECO_NODES: readonly { icon: GlyphName; tint?: string }[] = [
  { icon: "cloud" },
  { icon: "web", tint: "k" },
  { icon: "design", tint: "g" },
  { icon: "architecture", tint: "g" },
  { icon: "mobile" },
  { icon: "mobile", tint: "k" },
  { icon: "quality", tint: "g" },
  { icon: "cloud", tint: "k" },
];
const SQUAD_AVATARS = [undefined, "s", "c", undefined, "s"] as const;

export function PackagesFullCycle({ content }: { content: PackagesContent }) {
  const { fullCycle, mock } = content;
  const node = (item: PackagesContent["fullCycle"]["nodes"][number], index: number) => {
    const design = ECO_NODES[index];
    return (
      <div className="lg eco-node" key={item.title}>
        <span className={cx("w-app", design?.tint)}>
          <Icon name={design?.icon ?? "cloud"} />
        </span>
        <b className="t-h4">{item.title}</b>
        <span className="t-small">{item.body}</span>
        <span className={cx(TRACK_CHIPS, "mt-auto")}>
          {item.chips.map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </span>
      </div>
    );
  };
  return (
    <section className="section" id="full-cycle" aria-labelledby="fc-title">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{fullCycle.eyebrow}</p>
            <h2 className="t-h1" id="fc-title">
              {fullCycle.title}
            </h2>
          </div>
          <p className="t-lead">{fullCycle.lead}</p>
        </div>
        <div className="mesh-light relative rounded-[40px] p-[clamp(20px,3cqi,40px)] overflow-hidden">
          <div className="orbs" aria-hidden="true">
            <span className="orb orb-c w-[520px] h-[520px] left-[30%] top-[20%] opacity-[.45]" />
            <span className="orb orb-s w-[420px] h-[420px] right-[0] top-[0] opacity-[.5]" />
          </div>
          <div className="eco lift">
            {fullCycle.nodes.slice(0, 4).map((item, index) => node(item, index))}
            <div className="lg-dark lg-graphite eco-core glow-steel">
              <SxMark className="[--m:56px]" />
              <b className="t-h3 text-white">{fullCycle.coreTitle}</b>
              <span className="t-small text-on-dark-2">{fullCycle.coreBody}</span>
            </div>
            {fullCycle.nodes.slice(4).map((item, index) => node(item, index + 4))}
          </div>
        </div>
        <div
          className={cx(
            "grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-[24px] items-end",
            TWO_COLUMNS_COLLAPSE,
          )}
        >
          <AdminLaptop mock={mock} />
          <div className="stack gap-5">
            <b className="t-h3">{fullCycle.squadTitle}</b>
            <div className="stack gap-2">
              {fullCycle.squad.map((role, index) => (
                <RoleCard role={role} avatar={SQUAD_AVATARS[index]} key={role.name} />
              ))}
            </div>
            <p className="t-xs">{fullCycle.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * The source's availability block keeps its place and layout, but it shows no dates, capacity bars
 * or live indicator, as none exist. See GAP-F04.
 */
export function PackagesStarts({ content }: { content: PackagesContent["starts"] }) {
  return (
    <section className="section" aria-labelledby="avail">
      <div className="wrap grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-[32px] items-center sx-1000:grid-cols-[minmax(0,1fr)]">
        <div className="stack gap-5">
          <span className="gx-tag">{content.tag}</span>
          <h2 className="t-h1" id="avail">
            {content.title}
          </h2>
          <p className="t-lead">{content.lead}</p>
          <LinkButton href="/contact" size="lg" arrow className="self-start">
            {content.action}
          </LinkButton>
        </div>
        <div className="gx-dark stack gap-2 p-[28px]">
          <div className="row between pb-[8px]">
            <span className="gx-label">{content.panelTitle}</span>
            <span className="t-xs">{content.panelStatus}</span>
          </div>
          {content.rows.map((row) => (
            <div className="gx-row grid grid-cols-[1.2fr_1fr_1.3fr] gap-[16px]" key={row.name}>
              <span className="stack">
                <b>{row.name}</b>
                <span className="t-xs">{row.team}</span>
              </span>
              <b>{row.start}</b>
              <span className="t-xs">{row.depends}</span>
            </div>
          ))}
          <p className="t-xs pt-[10px]">{content.note}</p>
        </div>
      </div>
    </section>
  );
}

/**
 * A real table, so the headers reach assistive technology. .cmp-row is a grid in the design
 * stylesheet, and a grid row loses its table role, so these utilities put back table display and
 * the columns are fixed to the same widths. Top alignment matches the source's stretched grid cells.
 */
const ROW = "cmp-row table-row";
const ROW_HEADER = "table-cell align-middle text-left font-[400]";
const CELL = "table-cell align-top text-left [&:lang(ru)]:hyphens-auto";

export function PackagesCompare({ content }: { content: PackagesContent }) {
  const { compare, faq } = content;
  const hl = (id: PackageId) => (packageCatalog[id].highlighted ? "hl" : undefined);
  return (
    <section className="paper section" id="compare" aria-labelledby="cmp-title">
      <div className="wrap stack gap-7">
        <div className="wrap-row between gap-5 items-end">
          <h2 className="t-h2" id="cmp-title">
            {compare.title}
          </h2>
          <DemoTag>{compare.tag}</DemoTag>
        </div>
        <ComparisonTable label={compare.label}>
          <table className="w-full table-fixed sx-600:min-w-[560px]">
            <caption className="sr-only">{compare.label}</caption>
            <colgroup>
              <col className="w-[220px] sx-860:w-[140px]" />
              {packageIds.map((id) => (
                <col key={id} />
              ))}
            </colgroup>
            <thead>
              <tr className={cx(ROW, "head")}>
                <td className={ROW_HEADER} />
                {packageIds.map((id) => (
                  <th scope="col" className={cx(CELL, hl(id))} key={id}>
                    {compare.columns[id]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.rows.map((row) => (
                <tr className={ROW} key={row.label}>
                  <th scope="row" className={ROW_HEADER}>
                    {row.label}
                  </th>
                  {packageIds.map((id) => (
                    <td className={cx(CELL, hl(id))} key={id}>
                      {row.values[id]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className={ROW}>
                <th scope="row" className={ROW_HEADER}>
                  <span className="sr-only">{compare.actionsLabel}</span>
                </th>
                {packageIds.map((id) => {
                  const { href, look } = packageCatalog[id].action;
                  return (
                    <td className={cx(CELL, hl(id))} key={id}>
                      {look === "button" ? (
                        <LinkButton
                          href={href}
                          size="sm"
                          arrow
                          className="h-auto min-h-[40px] py-[8px] whitespace-normal"
                        >
                          {compare.actions[id]}
                        </LinkButton>
                      ) : (
                        <ArrowLink href={href}>{compare.actions[id]}</ArrowLink>
                      )}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </ComparisonTable>
        <div className="grid-2 [--gap:16px] items-start">
          {faq.map((item, index) => (
            <Accordion key={item.question} summary={item.question} defaultOpen={index === 0}>
              {item.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PackagesCta({ content }: { content: PackagesContent["cta"] }) {
  return (
    <section className="bg-cta dark p-[140px_0]" aria-labelledby="pk-cta">
      <div className="wrap stack gap-6 items-center text-center">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 className="t-display max-w-[980px]" id="pk-cta">
          {content.title}
        </h2>
        <p className="t-lead max-w-[620px]">{content.lead}</p>
        <div className="wrap-row gap-3 justify-center">
          <LinkButton href="/contact" size="lg" arrow>
            {content.primary}
          </LinkButton>
          <LinkButton href="/agent" variant="glass" size="lg">
            {content.secondary}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
