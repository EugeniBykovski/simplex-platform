import { cx } from "@/components/ui/cx";
import { Icon } from "@/components/ui/icon";
import { SectorGround } from "@/components/ui/surface";
import type { Project } from "@/content/work";

/**
 * The neutral picture for a project: its sector ground, its glyph and part of its stack. No
 * project has approved screenshots, so nothing here imitates the product's interface.
 */
export function ProjectVisual({
  project,
  caption,
  className,
  stackCount = 4,
}: {
  project: Project;
  caption: string;
  className?: string;
  stackCount?: number;
}) {
  return (
    <SectorGround
      sector={project.ground}
      className={cx("rounded-[0] grid place-items-center p-[clamp(20px,4cqi,40px)]", className)}
      aria-hidden="true"
    >
      <span className="slice" />
      <span className="glass-dark relative stack gap-4 p-[24px] rounded-[24px] w-full max-w-[380px] text-white">
        <span className="row between gap-4">
          <Icon name={project.icon} className="[--icon:44px] text-white" />
          <span className="t-mono text-[rgba(255,255,255,.72)] text-right">{caption}</span>
        </span>
        <span className="t-h3 text-white">{project.name}</span>
        <span className="wrap-row gap-2">
          {project.stack.slice(0, stackCount).map((item) => (
            <span
              className="chip text-white border-[rgba(255,255,255,.28)] bg-[rgba(255,255,255,.08)]"
              key={item}
            >
              {item}
            </span>
          ))}
        </span>
      </span>
    </SectorGround>
  );
}
