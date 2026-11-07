import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { LinkButton } from "@/components/ui/button";
import { cx } from "@/components/ui/cx";
import { Icon } from "@/components/ui/icon";
import { RouteLink } from "@/components/ui/links";
import { CardArrow } from "@/components/ui/surface";
import type { WorkSlug } from "@/config/routes";
import type { ArchLayer, CaseCopy, CaseMock, DotTone, WorkSharedCopy } from "@/content/work";
import { BeforeAfter } from "./before-after";

export const DOT: Record<DotTone, string | undefined> = {
  m: "dot-m",
  o: "dot-o",
  b: "dot-b",
  none: undefined,
};

export function CaseCrumbs({
  shared,
  name,
  path,
  className,
}: {
  shared: WorkSharedCopy;
  name: string;
  path: string;
  className?: string;
}) {
  const { breadcrumb } = shared;
  return (
    <SeoBreadcrumbs
      path={path}
      {...(className ? { className } : {})}
      label={breadcrumb.label}
      items={[
        { label: breadcrumb.home, href: "/" },
        { label: breadcrumb.work, href: "/work" },
        { label: name },
      ]}
    />
  );
}

export function MockRows({ rows }: { rows: CaseMock["rows"] }) {
  return rows.map((row) => (
    <div className="mock-row" key={row.text}>
      <span className={cx("dot", DOT[row.dot])} />
      <span className="flex-1 min-w-[0] [overflow-wrap:anywhere]">{row.text}</span>
      <span className="badge">{row.badge}</span>
    </div>
  ));
}

/** An interface mock-up, always decorative. */
export function CaseMockCard({ mock, className }: { mock: CaseMock; className?: string }) {
  return (
    <div className={cx("mock", className)} aria-hidden="true">
      <div className="mock-bar">
        <b className="truncate">{mock.title}</b>
        <span className="badge badge-soft">{mock.tag}</span>
      </div>
      <div className="mock-body">
        <div className="grid-3 [--gap:8px]">
          {mock.kpis.map((kpi) => (
            <div className="mock-kpi" key={kpi.label}>
              <span>{kpi.label}</span>
              <b>{kpi.value}</b>
            </div>
          ))}
        </div>
        <MockRows rows={mock.rows} />
      </div>
    </div>
  );
}

export function ArchLayers({
  layers,
  className,
}: {
  layers: readonly ArchLayer[];
  className: string;
}) {
  return (
    <div className={cx("arch", className)}>
      {layers.map((layer) => (
        <div className="arch-layer" key={layer.label}>
          <span className="arch-label">{layer.label}</span>
          <div className="arch-nodes">
            {layer.nodes.map((node) => (
              <span className={cx("arch-node", node.highlight && "hl")} key={node.name}>
                {node.name}
                <small>{node.note}</small>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** The source's before-and-after block, without its figures. See GAP-D26. */
export function CaseShift({ shared, name }: { shared: WorkSharedCopy; name: string }) {
  const { shift } = shared;
  return (
    <section className="section" aria-labelledby="ba">
      <div className="wrap stack gap-7">
        <div className="gx-head">
          <div className="stack gap-4">
            <span className="gx-tag">{shift.tag}</span>
            <h2 className="t-h1 [&:lang(ru)]:hyphens-auto" id="ba">
              {shift.title(name)}
            </h2>
          </div>
          <p className="t-lead">{shift.lead}</p>
        </div>
        <BeforeAfter label={shift.slider}>
          <div className="ba-pane ba-before">
            <span className="gx-tag ba-chip">{shift.before.chip}</span>
            <b className="t-h3">{shift.before.title}</b>
            <ul className="checks">
              {shift.before.items.map((item) => (
                <li key={item}>
                  <Icon name="alert" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="ba-pane ba-after pl-[calc(28px+var(--cut))]">
            <span className="gx-tag ba-chip text-[#DCE6FF] bg-[rgba(255,255,255,.1)]">
              {shift.after.chip}
            </span>
            <b className="t-h3 text-white">{shift.after.title}</b>
            <ul className="checks">
              {shift.after.items.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </BeforeAfter>
      </div>
    </section>
  );
}

export function CaseNext({
  shared,
  slug,
  next,
}: {
  shared: WorkSharedCopy;
  slug: WorkSlug;
  next: CaseCopy;
}) {
  return (
    <section className="paper p-[0]" aria-label={shared.next.label}>
      <RouteLink
        href={`/work/${slug}`}
        className="wrap row between gap-6 card-hover flex [padding-block:72px]"
      >
        <span className="stack gap-3">
          <span className="t-mono text-text-3">
            {shared.next.label} · {next.industry}
          </span>
          <span className="t-h1">{next.name}</span>
          <span className="t-body">{next.tagline}</span>
        </span>
        <CardArrow />
      </RouteLink>
    </section>
  );
}

export function CaseCta({ shared }: { shared: WorkSharedCopy }) {
  const { cta } = shared;
  return (
    <section className="bg-ink p-[120px_0]" aria-labelledby="case-cta">
      <div className="wrap split items-end">
        <h2 className="t-h1 [&:lang(ru)]:hyphens-auto" id="case-cta">
          {cta.title}
        </h2>
        <div className="stack gap-5">
          <p className="t-lead">{cta.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/contact" variant="light" size="lg" arrow>
              {cta.primary}
            </LinkButton>
            <LinkButton href="/work" variant="ghost" size="lg">
              {cta.secondary}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
