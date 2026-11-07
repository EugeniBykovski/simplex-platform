import { LinkButton } from "@/components/ui/button";
import { cx } from "@/components/ui/cx";
import { DemoTag, Tag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import { SectorGround } from "@/components/ui/surface";
import type { CarepathCopy, CaseCopy, RoutewiseCopy, WorkSharedCopy } from "@/content/work";
import { ArchLayers, CaseCrumbs, CaseMockCard, DOT, MockRows } from "./case-shared";

/** Every case's facts and labels are unique data, but each layout is its own art direction. */
const index = (position: number) => String(position + 1).padStart(2, "0");

function Checks({ items }: { items: readonly string[] }) {
  return (
    <ul className="checks">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Layout A: editorial long-form. Ledgerline. */
export function CaseLayoutA({ page, shared }: { page: CaseCopy; shared: WorkSharedCopy }) {
  const { labels } = shared;
  return (
    <>
      <section className="bg-ink p-[220px_0_0] overflow-hidden" aria-labelledby="case-title">
        <div className="wrap stack gap-7">
          <CaseCrumbs shared={shared} name={page.name} path="/work/ledgerline" />
          <div className="wrap-row gap-2">
            <Tag>{page.industry}</Tag>
            <DemoTag>{shared.demoLong}</DemoTag>
          </div>
          <h1 className="t-display max-w-[1100px]" id="case-title">
            {page.name}
          </h1>
          <p className="t-h3 max-w-[860px] font-[500] text-on-dark-2">{page.tagline}</p>
          <div className="grid-4 [--gap:12px] mt-[24px]">
            {page.facts.map((fact) => (
              <div className="glass-dark p-[20px] rounded-[18px]" key={fact.key}>
                <p className="t-mono text-[#9DB4CC]">{fact.key}</p>
                <p className="mt-[6px]">{fact.value}</p>
              </div>
            ))}
          </div>
          <SectorGround
            sector="fintech"
            className="rounded-[32px_32px_0_0] p-[clamp(24px,5cqi,72px)_clamp(16px,5cqi,72px)_0] mt-[32px] grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-[20px] items-end"
          >
            <span className="slice" />
            {page.mocks.map((mock) => (
              <CaseMockCard mock={mock} className="rounded-[20px_20px_0_0]" key={mock.title} />
            ))}
          </SectorGround>
        </div>
      </section>
      <section className="section" aria-labelledby="case-overview">
        <div className="wrap-narrow stack gap-9">
          <div className="stack gap-4">
            <h2 className="eyebrow" id="case-overview">
              {labels.overview}
            </h2>
            <p className="t-h3 font-[500]">{page.overview}</p>
          </div>
          <div className="stack gap-4">
            <h2 className="eyebrow">{labels.context}</h2>
            <p className="t-lead text-text">{page.context}</p>
          </div>
          <div className="stack gap-5">
            <h2 className="eyebrow">{labels.challenges}</h2>
            <ol className="stack">
              {page.challenges.map((challenge, position) => (
                <li
                  className="row gap-5 reveal items-start p-[22px_0] border-t border-t-[var(--line)]"
                  key={challenge}
                >
                  <span className="idx pt-[4px] w-[32px] flex-none">{index(position)}</span>
                  <p className="t-lead text-text">{challenge}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="stack gap-5">
            <h2 className="eyebrow">{labels.approach}</h2>
            <ol className="stack gap-4">
              {page.approach.map((step) => (
                <li
                  className="paper-card reveal p-[26px_28px] grid grid-cols-[140px_minmax(0,1fr)] gap-[20px] [@container_sx_(max-width:380px)]:grid-cols-[minmax(0,1fr)] [@container_sx_(max-width:380px)]:gap-[8px]"
                  key={step.title}
                >
                  <span className="t-mono text-text-3 pt-[3px]">{step.when}</span>
                  <span className="stack gap-1">
                    <b className="t-h5">{step.title}</b>
                    <span className="t-body">{step.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="stack gap-5">
            <h2 className="eyebrow">{labels.solution}</h2>
            <p className="t-lead text-text">{page.solution}</p>
            <Checks items={page.bullets} />
          </div>
        </div>
      </section>
      <section className="bg-ink section" aria-labelledby="case-arch">
        <div className="wrap stack gap-7">
          <div className="split items-end">
            <div className="stack gap-4">
              <Tag className="self-start">{shared.architecture.tag}</Tag>
              <h2 className="t-h2" id="case-arch">
                {shared.architecture.title}
              </h2>
            </div>
            <p className="t-lead">{shared.architecture.lead}</p>
          </div>
          <ArchLayers
            layers={page.arch}
            className="glass-dark p-[clamp(18px,3cqi,36px)] rounded-[28px]"
          />
        </div>
      </section>
      <section className="section" aria-labelledby="case-outcomes">
        <div className="wrap stack gap-7">
          <div className="wrap-row between gap-4 items-end">
            <div className="stack gap-4">
              <p className="eyebrow">{shared.outcomes.eyebrow}</p>
              <h2 className="t-h2" id="case-outcomes">
                {shared.outcomes.title}
              </h2>
            </div>
            <DemoTag>{shared.outcomes.tag}</DemoTag>
          </div>
          <div className="grid-4 [--gap:16px]">
            {page.outcomes.map((outcome) => (
              <div
                className="paper-card reveal p-[30px] min-h-[220px] flex flex-col justify-between gap-[20px]"
                key={outcome.label}
              >
                <span className="stat-num t-grad">{outcome.value}</span>
                <span className="t-small">{outcome.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const TOC_LINK =
  "flex items-center gap-[10px] min-h-[38px] text-[14.5px] text-text-2 border-l-[2px] border-l-[var(--line)] pl-[14px] hover:text-text hover:border-l-[var(--signal)]";
const ANCHORED = "stack gap-5 scroll-mt-[100px]";

/** Layout B: sticky sidebar. Carepath. */
export function CaseLayoutB({ page, shared }: { page: CarepathCopy; shared: WorkSharedCopy }) {
  const { labels } = shared;
  const { intake } = page;
  const firstMock = page.mocks[0];
  const toc = [
    ["b-ctx", labels.context],
    ["b-ch", labels.challenges],
    ["b-ap", labels.approach],
    ["b-so", labels.solution],
    ["b-ar", labels.architecture],
    ["b-ui", labels.interface],
    ["b-out", labels.outcomes],
  ] as const;
  const dots = ["dot-b", "dot-m", undefined, "dot-o"] as const;
  return (
    <>
      <section
        className="bg-horizon is-live p-[210px_0_120px] overflow-hidden"
        aria-labelledby="case-title"
      >
        <div className="wrap split items-center">
          <div className="stack gap-6">
            <CaseCrumbs shared={shared} name={page.name} path="/work/carepath" />
            <div className="wrap-row gap-2">
              <Tag>{page.industry}</Tag>
              <DemoTag>{shared.demoShort}</DemoTag>
            </div>
            <h1 className="t-h1" id="case-title">
              {page.name}
            </h1>
            <p className="t-lead text-text">{page.tagline}</p>
          </div>
          <div className="row gap-4 justify-center items-end" aria-hidden="true">
            <div className="mock w-[250px] rounded-[32px] p-[10px]">
              <div className="rounded-[24px] bg-[#F4F6FB] p-[20px_16px] grid gap-[12px]">
                <span className="t-xs font-mono">{intake.step}</span>
                <b className="text-[19px] tracking-[-.02em] leading-[1.2]">{intake.question}</b>
                {intake.options.map((option, position) => (
                  <div
                    className={cx("mock-row", position === 0 && "border-[#2F57F5]")}
                    key={option}
                  >
                    <span className={cx("dot", dots[position])} />
                    {option}
                  </div>
                ))}
                <div className="h-[44px] rounded-[12px] bg-[#070B2B] text-white grid place-items-center text-[13px]">
                  {intake.next}
                </div>
              </div>
            </div>
            {firstMock ? (
              <div className="mock hide-sm w-[320px]">
                <div className="mock-bar">
                  <b>{firstMock.title}</b>
                  <span className="badge badge-soft">{firstMock.tag}</span>
                </div>
                <div className="mock-body gap-[8px]">
                  <MockRows rows={firstMock.rows} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <section className="section pt-[96px]" aria-label={shared.labels.caseDetails}>
        <div className="wrap grid grid-cols-[300px_minmax(0,1fr)] gap-[72px] items-start sx-1000:grid-cols-[minmax(0,1fr)] sx-1000:gap-[40px]">
          <aside className="sticky top-[120px] flex flex-col gap-[20px] sx-1000:relative sx-1000:top-[0]">
            <dl className="paper-card stack gap-4 p-[24px]">
              {page.facts.map((fact) => (
                <div className="stack gap-1" key={fact.key}>
                  <dt className="t-mono text-text-3">{fact.key}</dt>
                  <dd className="text-[15px]">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <nav className="stack" aria-label={labels.onThisPage}>
              {toc.map(([id, label]) => (
                <a className={TOC_LINK} href={`#${id}`} key={id}>
                  {label}
                </a>
              ))}
            </nav>
            <LinkButton href="/contact">{shared.discuss}</LinkButton>
          </aside>
          <div className="stack gap-9 min-w-[0]">
            <div className="stack gap-4">
              <h2 className="eyebrow">{labels.overview}</h2>
              <p className="t-h3 font-[500]">{page.overview}</p>
            </div>
            <div className="stack gap-4 scroll-mt-[100px]" id="b-ctx">
              <h2 className="eyebrow">{labels.context}</h2>
              <p className="t-lead text-text">{page.context}</p>
            </div>
            <div className={ANCHORED} id="b-ch">
              <h2 className="eyebrow">{labels.challenges}</h2>
              <div className="grid-2 [--gap:12px]">
                {page.challenges.map((challenge, position) => (
                  <div className="paper-card reveal p-[24px]" key={challenge}>
                    <span className="idx">{index(position)}</span>
                    <p className="mt-[14px] text-[17px] leading-[1.5]">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={ANCHORED} id="b-ap">
              <h2 className="eyebrow">{labels.approach}</h2>
              <ol className="process grid-cols-[repeat(4,minmax(0,1fr))]">
                {page.approach.map((step) => (
                  <li
                    className="stack gap-3 pr-[20px] border-t-[2px] border-t-[var(--ink)] pt-[18px]"
                    key={step.title}
                  >
                    <span className="t-mono text-text-3">{step.when}</span>
                    <b className="t-h5 [&:lang(ru)]:hyphens-auto">{step.title}</b>
                    <span className="t-small">{step.body}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className={ANCHORED} id="b-so">
              <h2 className="eyebrow">{labels.solution}</h2>
              <p className="t-lead text-text">{page.solution}</p>
              <Checks items={page.bullets} />
            </div>
            <div className={ANCHORED} id="b-ar">
              <h2 className="eyebrow">{labels.architecture}</h2>
              <ArchLayers
                layers={page.arch}
                className="dark p-[clamp(18px,3cqi,32px)] rounded-[26px]"
              />
            </div>
            <div className={ANCHORED} id="b-ui">
              <h2 className="eyebrow">{labels.interface}</h2>
              <SectorGround
                sector="healthcare"
                className="p-[28px] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-[16px]"
              >
                <span className="slice" />
                {page.mocks.map((mock) => (
                  <CaseMockCard mock={mock} key={mock.title} />
                ))}
              </SectorGround>
            </div>
            <div className={ANCHORED} id="b-out">
              <div className="wrap-row between gap-3">
                <h2 className="eyebrow">{labels.outcomes}</h2>
                <DemoTag>{shared.outcomes.tagShort}</DemoTag>
              </div>
              <div className="grid-2 [--gap:12px]">
                {page.outcomes.map((outcome) => (
                  <div className="paper-card p-[28px]" key={outcome.label}>
                    <span className="stat-num t-grad">{outcome.value}</span>
                    <p className="t-small mt-[12px]">{outcome.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const BAND =
  "grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[64px] items-center sx-1000:grid-cols-[minmax(0,1fr)] sx-1000:gap-[32px]";

/** The illustrative dispatch map. It shows no real route. */
function DispatchMap() {
  return (
    <svg
      viewBox="0 0 600 320"
      preserveAspectRatio="none"
      className="absolute inset-[0] w-full h-full"
    >
      <path
        d="M0 240 L160 170 L280 210 L410 90 L600 130"
        fill="none"
        stroke="#D5DCEC"
        strokeWidth="12"
      />
      <path
        d="M60 30 L200 120 L330 60 L450 190 L580 270"
        fill="none"
        stroke="#D5DCEC"
        strokeWidth="12"
      />
      <path
        d="M40 270 C140 210 180 120 270 140 S390 230 460 130 S540 60 570 70"
        fill="none"
        stroke="#2F57F5"
        strokeWidth="3.5"
      />
      <path
        d="M80 50 C170 90 220 220 320 225 S450 245 540 170"
        fill="none"
        stroke="#3F6A93"
        strokeWidth="3.5"
        strokeDasharray="7 7"
      />
      <circle cx="40" cy="270" r="8" fill="#070B2B" />
      <circle cx="270" cy="140" r="7" fill="#2F57F5" />
      <circle cx="460" cy="130" r="7" fill="#2F57F5" />
      <circle cx="570" cy="70" r="9" fill="#9DB4CC" stroke="#070B2B" strokeWidth="2" />
      <circle cx="320" cy="225" r="7" fill="#3F6A93" />
      <circle cx="540" cy="170" r="9" fill="#9DB4CC" stroke="#070B2B" strokeWidth="2" />
    </svg>
  );
}

/** Layout C: visual-first bands. Routewise. */
export function CaseLayoutC({ page, shared }: { page: RoutewiseCopy; shared: WorkSharedCopy }) {
  const { labels } = shared;
  return (
    <>
      <section
        className="viz viz-logistics rounded-[0] min-h-[900px] p-[200px_0_72px] text-white flex flex-col justify-between gap-[64px]"
        aria-labelledby="case-title"
      >
        <span className="slice top-[40%]" />
        <div className="wrap grid place-items-center">
          <div className="mock w-full max-w-[860px]" aria-hidden="true">
            <div className="mock-bar">
              <b>{page.dispatch.title}</b>
              <span className="row gap-2">
                <span className="dot" />
                <span className="t-xs">{page.dispatch.live}</span>
              </span>
            </div>
            <div className="grid grid-cols-[220px_minmax(0,1fr)]">
              <div className="mock-body gap-[8px] border-r border-r-[var(--line)]">
                {page.dispatch.routes.map((route) => (
                  <div className="mock-row" key={route.name}>
                    <span className={cx("dot", DOT[route.dot])} />
                    <span className="flex-1">{route.name}</span>
                    <span className="t-xs">{route.note}</span>
                  </div>
                ))}
              </div>
              <div className="relative min-h-[320px] bg-[#EEF2FA]">
                <DispatchMap />
              </div>
            </div>
          </div>
        </div>
        <div className="wrap stack gap-5">
          <CaseCrumbs
            shared={shared}
            name={page.name}
            path="/work/routewise"
            className="on-dark text-[#E6EAF7] [&_a]:text-white"
          />
          <div className="wrap-row between gap-5 items-end">
            <div className="stack gap-3">
              <div className="wrap-row gap-2">
                <Tag className="text-white border-[rgba(255,255,255,.3)]">{page.industry}</Tag>
                <DemoTag>{shared.demoShort}</DemoTag>
              </div>
              <h1 className="t-display" id="case-title">
                {page.name}
              </h1>
            </div>
            <p className="t-h4 max-w-[460px] font-[500] text-[#D3D8EE]">{page.tagline}</p>
          </div>
        </div>
      </section>
      <section className="section" aria-label={shared.labels.caseDetails}>
        <div className="wrap stack gap-9">
          <div className="grid-4 [--gap:0px] border-y border-y-[var(--line-2)]">
            {page.facts.map((fact) => (
              <div className="p-[24px_20px_24px_0]" key={fact.key}>
                <p className="t-mono text-text-3">{fact.key}</p>
                <p className="mt-[6px]">{fact.value}</p>
              </div>
            ))}
          </div>
          <div className={BAND}>
            <div className="stack gap-5">
              <p className="eyebrow">{labels.overviewContext}</p>
              <h2 className="t-h2 [&:lang(ru)]:hyphens-auto">{page.overview}</h2>
              <p className="t-lead">{page.context}</p>
            </div>
            <SectorGround sector="light" className="min-h-[420px] p-[32px] grid place-items-center">
              <div className="grid-2 [--gap:12px] w-full">
                {page.challenges.map((challenge, position) => (
                  <div className="glass p-[20px] rounded-[18px]" key={challenge}>
                    <span className="idx">
                      {labels.challenge} {index(position)}
                    </span>
                    <p className="mt-[10px] text-[15px] leading-[1.5]">{challenge}</p>
                  </div>
                ))}
              </div>
            </SectorGround>
          </div>
          <div
            className={cx(BAND, "[&>:first-child]:[order:2] sx-1000:[&>:first-child]:[order:0]")}
          >
            <div className="stack gap-5">
              <p className="eyebrow">{labels.approach}</p>
              <h2 className="t-h2 [&:lang(ru)]:hyphens-auto">{page.approachTitle}</h2>
              <ol className="stack gap-4">
                {page.approach.map((step) => (
                  <li className="row gap-4 items-start" key={step.title}>
                    <span className="t-mono text-text-3 w-[110px] flex-none pt-[3px]">
                      {step.when}
                    </span>
                    <span className="stack gap-1">
                      <b>{step.title}</b>
                      <span className="t-small">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-ink rounded-[26px] p-[32px] min-h-[420px] flex flex-col justify-center gap-[14px]">
              <p className="t-mono text-[#9DB4CC]">{page.bench.title}</p>
              {page.bench.rows.map((row) => (
                <div className="stack gap-2" key={row.name}>
                  <div className="row between gap-3">
                    <span>{row.name}</span>
                    <span className="t-xs">{row.value}</span>
                  </div>
                  <div className="h-[8px] rounded-[4px] bg-[rgba(255,255,255,.08)]" />
                </div>
              ))}
              <p className="t-xs">{page.bench.note}</p>
            </div>
          </div>
          <div className={BAND}>
            <div className="stack gap-5">
              <p className="eyebrow">{labels.solution}</p>
              <h2 className="t-h2 [&:lang(ru)]:hyphens-auto">{page.solutionTitle}</h2>
              <p className="t-lead">{page.solution}</p>
              <Checks items={page.bullets} />
            </div>
            <SectorGround
              sector="logistics"
              className="min-h-[520px] grid place-items-center p-[32px]"
            >
              <span className="slice" />
              <div className="mock w-[240px] rounded-[32px] p-[10px]" aria-hidden="true">
                <div className="rounded-[24px] bg-[#F4F6FB] p-[18px_14px] grid gap-[10px]">
                  <span className="t-xs font-mono">{page.driver.stop}</span>
                  <b className="text-[18px] tracking-[-.02em]">{page.driver.address}</b>
                  <div className="mock-row">
                    <span className="dot dot-b" />
                    {page.driver.parcels}
                  </div>
                  <div className="mock-row">
                    <span className="dot dot-m" />
                    {page.driver.eta}
                  </div>
                  <div className="h-[120px] rounded-[12px] bg-[#E1E7F3]" />
                  <div className="h-[44px] rounded-[12px] bg-[#070B2B] text-white grid place-items-center text-[13px]">
                    {page.driver.complete}
                  </div>
                </div>
              </div>
            </SectorGround>
          </div>
        </div>
      </section>
      <section className="bg-ink section" aria-labelledby="case-arch">
        <div className="wrap split">
          <div className="stack gap-5 sticky-col">
            <Tag className="self-start">{shared.architecture.tag}</Tag>
            <h2 className="t-h2" id="case-arch">
              {page.archTitle}
            </h2>
            <p className="t-body">{page.archBody}</p>
          </div>
          <ArchLayers
            layers={page.arch}
            className="glass-dark p-[clamp(18px,3cqi,32px)] rounded-[28px]"
          />
        </div>
      </section>
      <section className="bg-spectrum section" aria-labelledby="case-outcomes">
        <div className="wrap stack gap-7">
          <div className="wrap-row between gap-4 items-end">
            <h2 className="t-h1" id="case-outcomes">
              {shared.outcomes.title}
            </h2>
            <DemoTag>{shared.outcomes.tag}</DemoTag>
          </div>
          <div className="grid-4 [--gap:16px]">
            {page.outcomes.map((outcome) => (
              <div
                className="glass-frost p-[28px] rounded-[24px] min-h-[200px] flex flex-col justify-between gap-[18px]"
                key={outcome.label}
              >
                <span className="stat-num">{outcome.value}</span>
                <span className="t-small text-text-2">{outcome.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
