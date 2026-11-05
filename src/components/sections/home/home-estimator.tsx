import { LinkButton } from "@/components/ui/button";
import type { EstimatorContent } from "@/content/home/types";
import { HomeEstimatorPanel } from "./home-estimator-panel";

export function HomeEstimator({ content }: { content: EstimatorContent }) {
  return (
    <section className="paper section" aria-labelledby="est">
      <div className="wrap stack gap-7">
        <div className="gx-head">
          <div className="stack gap-4">
            <span className="gx-tag">{content.tag}</span>
            <h2 className="t-h1" id="est">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <HomeEstimatorPanel
          content={content}
          cta={
            <LinkButton href="/contact" variant="light" arrow>
              {content.result.cta}
            </LinkButton>
          }
        />
      </div>
    </section>
  );
}
