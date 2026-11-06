import { LinkButton } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/controls";
import { ArrowLink, RouteLink } from "@/components/ui/links";
import type { CareersCopy, JobCopy, JobPosition } from "@/content/careers";
import type { Locale } from "@/i18n/routing";
import { CopyLink } from "./copy-link";

/**
 * The sections of Job.dc.html, in its order, for a real vacancy. No role is live today, so none of
 * this renders. The source's form only simulates sending, so applying goes through /contact until
 * an approved route exists (GAP-F02).
 */
export function JobHero({ content, job }: { content: CareersCopy; job: JobCopy }) {
  return (
    <section className="bg-ink p-[220px_0_100px]" aria-labelledby="job-title">
      <div className="wrap stack gap-6">
        <Breadcrumbs
          label={content.breadcrumb.label}
          items={[
            { label: content.breadcrumb.home, href: "/" },
            { label: content.job.breadcrumb, href: "/careers" },
            { label: job.title },
          ]}
        />
        <h1 className="t-h1 max-w-[980px]" id="job-title">
          {job.title}
        </h1>
        <div className="wrap-row gap-2">
          {[job.team, job.location, job.type, job.salary].filter(Boolean).map((fact) => (
            <span className="chip" key={fact}>
              {fact}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JobBody({ content, job }: { content: CareersCopy["job"]; job: JobCopy }) {
  const list = (title: string, items: readonly string[]) => (
    <>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
  const facts = [
    [content.teamLabel, job.team],
    [content.locationLabel, job.location],
    [content.typeLabel, job.type],
    ...(job.salary ? [[content.salaryLabel, job.salary]] : []),
  ];
  return (
    <section className="section pt-[88px]" aria-label={job.title}>
      <div className="wrap grid grid-cols-[minmax(0,1fr)_400px] gap-[72px] items-start sx-1000:grid-cols-[minmax(0,1fr)] sx-1000:gap-[40px]">
        <article className="prose max-w-[760px]">
          <p className="t-lead text-text text-[22px]">{job.intro}</p>
          {list(content.responsibilities, job.responsibilities)}
          {list(content.requirements, job.requirements)}
          {list(content.niceToHave, job.niceToHave)}
          <h2>{content.howWeWork}</h2>
          <p>
            {job.howWeWork} <RouteLink href="/how-we-work">{content.howWeWorkLink}</RouteLink>.
          </p>
          <h2>{content.hiringProcess}</h2>
          <p>{job.hiringProcess}</p>
        </article>
        <aside className="sticky-col stack gap-4 sx-1000:relative sx-1000:top-[0]">
          <div className="glass bg-horizon stack gap-5 p-[28px] rounded-[26px] overflow-hidden border border-[var(--line)]">
            <dl className="stack gap-3">
              {facts.map(([label, value]) => (
                <div className="row between gap-3" key={label}>
                  <dt className="t-small">{label}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
            <LinkButton href="/contact" size="lg" arrow>
              {content.apply}
            </LinkButton>
            <CopyLink label={content.copy} copied={content.copied} />
          </div>
        </aside>
      </div>
    </section>
  );
}

export function JobOthers({
  content,
  others,
  locale,
}: {
  content: CareersCopy["job"];
  others: readonly JobPosition[];
  locale: Locale;
}) {
  if (others.length === 0) return null;
  return (
    <section className="bg-mist section-sm" aria-labelledby="job-others">
      <div className="wrap stack gap-6">
        <div className="wrap-row between gap-4">
          <h2 className="t-h3" id="job-others">
            {content.others}
          </h2>
          <ArrowLink href="/careers">{content.all}</ArrowLink>
        </div>
        <div className="grid-3 [--gap:16px]">
          {others.map((position) => {
            const job = position.copy[locale];
            return (
              <RouteLink
                href={`/careers/${position.slug}`}
                className="glass card-hover stack gap-3 p-[26px]"
                key={position.slug}
              >
                <span className="t-xs font-mono">{position.reference}</span>
                <b className="t-h5">{job.title}</b>
                <span className="t-small">
                  {job.team} · {job.location}
                </span>
              </RouteLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
