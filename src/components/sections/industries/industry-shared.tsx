import type { ComplianceTile, IndustryViz } from "@/content/industries";

/** Listed whole, so the class names reach the stylesheet. */
/**
 * The background each sector ground uses in simplex.css. The industry hero's ground is its LCP
 * element, found late because it's a CSS background, so the page preloads it.
 */
export const VIZ_IMAGE: Record<string, string> = {
  fintech: "trading",
  healthcare: "office",
  ecommerce: "city",
  saas: "code",
  enterprise: "tower",
  logistics: "server",
};

export const VIZ_CLASS: Record<IndustryViz, string> = {
  fintech: "viz-fintech",
  healthcare: "viz-healthcare",
  ecommerce: "viz-ecommerce",
  saas: "viz-saas",
  enterprise: "viz-enterprise",
  logistics: "viz-logistics",
};

/** The design's compliance block, on the overview with eight tiles and on each industry with four. */
export function ComplianceGrid({
  tag,
  title,
  lead,
  tiles,
  note,
}: {
  tag: string;
  title: string;
  lead: string;
  tiles: readonly ComplianceTile[];
  note: string;
}) {
  return (
    <section className="photo photo-trading section" aria-labelledby="comp">
      <div className="wrap stack gap-7">
        <div className="gx-head">
          <div className="stack gap-4">
            <span className="gx-tag">{tag}</span>
            <h2 className="t-h1 text-white [&:lang(ru)]:hyphens-auto" id="comp">
              {title}
            </h2>
          </div>
          <p className="t-lead text-on-dark-2">{lead}</p>
        </div>
        <div className="comp-grid">
          {tiles.map((tile) => (
            <div className="comp-tile" key={tile.name}>
              <span className="seal" aria-hidden="true">
                {tile.seal}
              </span>
              <b>{tile.name}</b>
              <span className="t-small text-on-dark-2">{tile.note}</span>
            </div>
          ))}
        </div>
        <p className="t-xs text-on-dark-3">{note}</p>
      </div>
    </section>
  );
}
