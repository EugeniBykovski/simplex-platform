import type { ReactNode } from "react";
import { cx } from "@/components/ui/cx";
import { Icon, type GlyphName } from "@/components/ui/icon";
import type { PackagesContent } from "@/content/packages";

type Mock = PackagesContent["mock"];

/**
 * The device mock-ups in Packages.dc.html. All are decorative and hidden from assistive technology.
 * The source's bracketed figures are placeholders, so they read "Sample" or "—" and carry no data.
 */
function Phone({
  className,
  dark,
  children,
  below,
}: {
  className?: string;
  dark?: boolean;
  children: ReactNode;
  below?: ReactNode;
}) {
  return (
    <div className={cx("phone", className)}>
      <div className={cx("phone-screen", dark && "dark")}>
        <span className="phone-island" />
        <div className="phone-status">
          <span>9:41</span>
          <i />
        </div>
        {children}
        {below}
      </div>
    </div>
  );
}

function TabBar({ active }: { active: 0 | 1 | 2 | 3 }) {
  return (
    <>
      <div className="ph-tabbar">
        {[0, 1, 2, 3].map((index) => (
          <span className={index === active ? "on" : undefined} key={index} />
        ))}
      </div>
      <span className="phone-home mt-[8px]" />
    </>
  );
}

const HERO_BARS = [
  "h-[40%]",
  "h-[64%]",
  "h-[52%]",
  "h-[80%]",
  "h-[70%]",
  "h-[92%]",
  "h-[76%]",
] as const;

const HERO_PHONE_SIDE =
  "[--pw:240px] [transform:translateY(60px)] sx-860:[--pw:170px] sx-600:[--pw:96px] sx-600:[transform:translateY(40px)]";
const HERO_PHONE_MID = "[--pw:270px] z-[2] sx-860:[--pw:190px] sx-600:[--pw:116px]";

export function HeroPhones({ mock }: { mock: Mock }) {
  const between = "ph-row justify-between";
  return (
    <div
      className="lift relative flex justify-center items-start gap-[28px] mt-[80px] p-[8px_0_120px] sx-860:gap-[12px] sx-860:pb-[90px] sx-600:mt-[48px] sx-600:pb-[64px] sx-600:gap-[8px]"
      aria-hidden="true"
    >
      <Phone
        dark
        className={cx("phone-tilt-l", HERO_PHONE_SIDE)}
        below={<span className="phone-home" />}
      >
        <div className="phone-body justify-between pt-[18%]">
          <span className="stack gap-2">
            <span className="ph-sm tracking-[.1em] uppercase">{mock.welcome}</span>
            <span className="ph-big text-[2.4em]">{mock.welcomeTitle}</span>
          </span>
          <span className="stack gap-2">
            <span className="ph-btn bg-white text-[#070B2B]">{mock.getStarted}</span>
            <span className="ph-sm text-center">{mock.haveAccount}</span>
          </span>
        </div>
      </Phone>
      <Phone className={HERO_PHONE_MID} below={<TabBar active={0} />}>
        <div className="phone-body">
          <span className={between}>
            <span className="stack">
              <span className="ph-sm">{mock.greeting}</span>
              <span className="ph-h">{mock.person}</span>
            </span>
            <span className="ph-av" />
          </span>
          <div className="ph-card [background:linear-gradient(150deg,#0C2A45,#070B2B)] text-white">
            <span className="ph-sm opacity-[.7]">{mock.thisWeek}</span>
            <div className="ph-big m-[.2em_0_.5em]">{mock.sample}</div>
            <div className="ph-bars">
              {HERO_BARS.map((height) => (
                <i className={height} key={height} />
              ))}
            </div>
          </div>
          <div className="ph-card ph-row">
            <span className="ph-av rounded-[.7em] [background:linear-gradient(140deg,#3B8CFF,#2F57F5)]" />
            <span className="stack flex-1">
              <b className="text-[.95em]">{mock.order}</b>
              <span className="ph-sm">{mock.orderStatus}</span>
            </span>
            <span className="ph-sm">2m</span>
          </div>
          <div className="ph-card ph-row">
            <span className="ph-av rounded-[.7em]" />
            <span className="stack flex-1">
              <b className="text-[.95em]">{mock.report}</b>
              <span className="ph-sm">{mock.reportStatus}</span>
            </span>
            <span className="ph-sm">1h</span>
          </div>
        </div>
      </Phone>
      <Phone
        className={cx("android phone-tilt-r", HERO_PHONE_SIDE)}
        below={<span className="phone-home" />}
      >
        <div className="phone-body">
          <span className="ph-h">{mock.checkout}</span>
          <div className="ph-card stack gap-2">
            <span className={between}>
              <span>{mock.plan}</span>
              <b>{mock.sample}</b>
            </span>
            <span className={between}>
              <span className="ph-sm">{mock.seats}</span>
              <span className="ph-sm">{mock.monthly}</span>
            </span>
          </div>
          <div className="ph-card stack gap-2">
            <span className="ph-sm">{mock.payWith}</span>
            <span className="ph-row">
              <span className="ph-av w-[2.6em] h-[1.7em] rounded-[.35em] [background:linear-gradient(140deg,#3F6A93,#08192B)]" />
              <b className="text-[.95em]">•••• 4242</b>
            </span>
          </div>
          <span className="flex-1" />
          <span className="ph-btn">{mock.pay}</span>
        </div>
      </Phone>
    </div>
  );
}

export function PodCardVisual({ mock }: { mock: Mock }) {
  return (
    <div className="pkg-vis mesh-graphite items-center" aria-hidden="true">
      <Phone dark className="[--pw:100px] [transform:rotate(-6deg)] mr-[-12px]">
        <div className="phone-body">
          <span className="ph-h">{mock.hello}</span>
          <div className="ph-card h-[3em]" />
          <div className="ph-card h-[2em]" />
        </div>
      </Phone>
      <Phone className="android [--pw:100px] [transform:rotate(5deg)]">
        <div className="phone-body">
          <div className="ph-card h-[4em] [background:linear-gradient(150deg,#2F57F5,#070B2B)]" />
          <div className="ph-card h-[2em]" />
        </div>
      </Phone>
    </div>
  );
}

export function DesktopCardVisual({ mock }: { mock: Mock }) {
  const tile = (label: string, value: string) => (
    <div className="win-tile sx-1000:p-[8px]">
      <span className="block truncate opacity-[.6] text-[11px]">{label}</span>
      <b>{value}</b>
    </div>
  );
  return (
    <div className="pkg-vis mesh-light items-center p-[18px]" aria-hidden="true">
      <div className="desk-win dark w-full">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="ttl">{mock.opsConsole}</span>
        </div>
        <div className="p-[12px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[8px]">
          {tile(mock.queue, "—")}
          {tile(mock.devices, "—")}
          {tile(mock.sync, mock.syncOk)}
        </div>
      </div>
    </div>
  );
}

export function FullCycleCardVisual({ mock }: { mock: Mock }) {
  return (
    <div
      className="pkg-vis [background:linear-gradient(150deg,#1E4268,#08192B)] items-center p-[18px] gap-[10px]"
      aria-hidden="true"
    >
      <div className="browser flex-1">
        <div className="browser-bar">
          <span className="url">{mock.adminUrl}</span>
        </div>
        <div className="p-[10px] grid gap-[6px]">
          <div className="mock-line w-[50%] h-[8px] bg-[#070B2B]" />
          <div className="mock-line w-[90%]" />
          <div className="mock-line w-[70%]" />
          <div className="mock-line w-[80%]" />
        </div>
      </div>
      <Phone className="[--pw:86px]">
        <div className="phone-body">
          <div className="ph-card h-[3em] [background:linear-gradient(150deg,#2F57F5,#070B2B)]" />
          <div className="ph-card h-[2em]" />
        </div>
      </Phone>
    </div>
  );
}

const STAGE_BARS = [
  "h-[30%] [background:rgba(255,255,255,.5)]",
  "h-[50%] [background:rgba(255,255,255,.6)]",
  "h-[44%] [background:rgba(255,255,255,.6)]",
  "h-[70%] [background:rgba(255,255,255,.75)]",
  "h-[64%] [background:rgba(255,255,255,.75)]",
  "h-[92%] [background:#fff]",
] as const;

/** The three phones beside the track card. Only Android changes their frame. */
export function PodStage({
  mock,
  android,
  release,
}: {
  mock: Mock;
  android: boolean;
  release: string;
}) {
  const frame = android ? "android" : undefined;
  const between = "ph-row justify-between";
  const toggle = "toggle [transform:scale(.6)] origin-right";
  return (
    <div className="phone-stage lift">
      <Phone className={cx(frame, "phone-tilt-l [--pw:196px]")} below={<TabBar active={1} />}>
        <div className="phone-body">
          <span className="ph-h">{mock.bookings}</span>
          <div className="ph-card stack gap-2">
            <span className={between}>
              <b className="text-[.95em]">{mock.today}</b>
              <span className="ph-sm">{mock.slots}</span>
            </span>
            <span className="ph-row">
              <span className="ph-av" />
              <span className="stack flex-1">
                <b className="text-[.9em]">{mock.review}</b>
                <span className="ph-sm">{mock.room}</span>
              </span>
            </span>
            <span className="ph-row">
              <span className="ph-av [background:linear-gradient(140deg,#3B8CFF,#2F57F5)]" />
              <span className="stack flex-1">
                <b className="text-[.9em]">{mock.demo}</b>
                <span className="ph-sm">{mock.online}</span>
              </span>
            </span>
          </div>
          <div className="ph-card">
            <span className="ph-sm">{mock.synced}</span>
            <div className="g-progress [--v:82%] mt-[.6em] h-[8px]">
              <i />
            </div>
          </div>
        </div>
      </Phone>
      <Phone dark className={cx(frame, "[--pw:236px] z-[2]")} below={<TabBar active={0} />}>
        <div className="phone-body">
          <span className={between}>
            <span className="ph-h">{mock.appName}</span>
            <span className="ph-av" />
          </span>
          <div className="ph-card [background:linear-gradient(150deg,rgba(47,87,245,.9),rgba(26,44,140,.8))]">
            <span className="ph-sm opacity-[.8]">{mock.goal}</span>
            <div className="ph-big m-[.25em_0_.5em]">{mock.sample}</div>
            <div className="ph-bars">
              {STAGE_BARS.map((bar) => (
                <i className={bar} key={bar} />
              ))}
            </div>
          </div>
          <div className="ph-card ph-row">
            <span className="ph-av rounded-[.7em] [background:linear-gradient(140deg,#9DB4CC,#3F6A93)]" />
            <span className="stack flex-1">
              <b className="text-[.9em]">{mock.push}</b>
              <span className="ph-sm">
                {mock.releaseLabel} {release}
              </span>
            </span>
          </div>
        </div>
      </Phone>
      <Phone className={cx(frame, "phone-tilt-r [--pw:196px]")} below={<TabBar active={3} />}>
        <div className="phone-body">
          <span className="ph-h">{mock.profile}</span>
          <div className="ph-card ph-row">
            <span className="ph-av w-[3em] h-[3em]" />
            <span className="stack">
              <b>{mock.personFull}</b>
              <span className="ph-sm">{mock.teamPlan}</span>
            </span>
          </div>
          <div className="ph-card stack gap-2">
            <span className={between}>
              <span>{mock.biometric}</span>
              <span className={cx(toggle, "is-on")} />
            </span>
            <span className={between}>
              <span>{mock.notifications}</span>
              <span className={cx(toggle, "is-on")} />
            </span>
            <span className={between}>
              <span>{mock.offline}</span>
              <span className={toggle} />
            </span>
          </div>
        </div>
      </Phone>
    </div>
  );
}

const WINDOW_ICONS: readonly GlyphName[] = ["building", "logistics", "mobile", "quality", "cloud"];
const SPARK = [
  "h-[30%]",
  "h-[44%]",
  "h-[38%]",
  "h-[60%]",
  "h-[56%]",
  "h-[72%]",
  "h-[68%]",
  "h-[90%]",
  "h-[78%]",
  "h-[84%]",
] as const;

export function DesktopWindow({ mock }: { mock: Mock }) {
  const tile = (label: string) => (
    <div className="win-tile">
      <span className="opacity-[.6]">{label}</span>
      <b>—</b>
    </div>
  );
  return (
    <div className="desk-win dark" aria-hidden="true">
      <div className="win-bar">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span className="ttl">{mock.fieldOps}</span>
        <span className="badge-new">{mock.offlineBadge}</span>
      </div>
      <div className="win-body min-h-[420px]">
        <div className="win-side">
          {mock.nav.map((item, index) => (
            <span className={index === 0 ? "on" : undefined} key={item}>
              <Icon name={WINDOW_ICONS[index] ?? "building"} />
              {item}
            </span>
          ))}
          <span className="mt-auto">
            <Icon name="alert" />
            {mock.settings}
          </span>
        </div>
        <div className="win-main">
          <div className="row between">
            <b className="text-[18px]">{mock.overview}</b>
            <span className="row gap-2">
              <span className="kbd">⌘K</span>
              <span className="g-chip on-dark h-[28px] text-[12px]">
                <span className="pulse" />
                {mock.localDb}
              </span>
            </span>
          </div>
          <div className="grid-3 [--gap:10px]">
            {tile(mock.openJobs)}
            {tile(mock.devicesOnline)}
            {tile(mock.pendingSync)}
          </div>
          <div className="win-tile flex-1">
            <span className="opacity-[.6]">{mock.throughput}</span>
            <div className="spark h-[120px] mt-[12px]">
              {SPARK.map((height) => (
                <i className={height} key={height} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The base overhangs by 3%, not the source's 6%, which covered the start of the note beside it. */
export function AdminLaptop({ mock }: { mock: Mock }) {
  const kpi = (label: string) => (
    <div className="mock-kpi sx-600:p-[6px] sx-600:[&_b]:text-[13px]">
      <span>{label}</span>
      <b>—</b>
    </div>
  );
  const sideLine = "mock-line bg-[rgba(255,255,255,.25)]";
  return (
    <div className="laptop" aria-hidden="true">
      <div className="laptop-screen">
        <div>
          <div className="browser-bar">
            <span className="url">{mock.adminUrlSample}</span>
          </div>
          <div className="grid grid-cols-[140px_minmax(0,1fr)] min-h-[300px] sx-600:grid-cols-[44px_minmax(0,1fr)]">
            <div className="bg-[#070B2B] p-[14px] grid gap-[8px] content-start">
              <div className="mock-line w-[70%] h-[10px] bg-white" />
              <div className={cx(sideLine, "w-[80%]")} />
              <div className={cx(sideLine, "w-[60%]")} />
              <div className={cx(sideLine, "w-[75%]")} />
            </div>
            <div className="p-[16px] grid gap-[10px] content-start">
              <div className="grid-3 [--gap:8px] sx-600:grid-cols-[repeat(3,minmax(0,1fr))]">
                {kpi(mock.users)}
                {kpi(mock.orders)}
                {kpi(mock.revenue)}
              </div>
              <div className="mock-row">
                <span>{mock.orderPaid}</span>
                <span className="badge badge-graphite">{mock.ship}</span>
              </div>
              <div className="mock-row">
                <span>{mock.orderRefund}</span>
                <span className="badge badge-soft">{mock.reviewBadge}</span>
              </div>
              <div className="mock-row">
                <span>{mock.newRole}</span>
                <span className="badge">{mock.audit}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="laptop-base mx-[-3%]" />
    </div>
  );
}
