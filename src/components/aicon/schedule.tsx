import { Reveal } from "./reveal";
import { SectionLabel, StatusDot } from "./brand";

/** Placeholder schedule — replace `title` / `time` when official info is confirmed. */
export const SCHEDULE = [
  { time: "09:00", title: "Opening" },
  { time: "10:00", title: "Keynote / Main Session" },
  { time: "12:00", title: "Workshops" },
  { time: "14:00", title: "Competitions" },
  { time: "16:00", title: "Community / Networking" },
  { time: "18:00", title: "Closing" },
];

export function Schedule() {
  return (
    <section id="schedule" className="relative overflow-hidden bg-[var(--blue)] py-24 text-[var(--bone)] sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-25">
        <div className="signal-grid absolute inset-0 text-[var(--bone)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel className="text-[var(--bone)]">04 / Schedule</SectionLabel>
            <h2 className="text-balance-tight mt-6 font-display text-[clamp(2.4rem,7vw,6rem)] font-bold uppercase">
              AICON&rsquo;26 Live
            </h2>
          </div>
          <StatusDot />
        </Reveal>

        <ol className="relative mt-16">
          <span
            aria-hidden
            className="absolute top-0 bottom-0 left-0 w-px bg-[color-mix(in_oklab,var(--bone)_35%,transparent)] sm:left-[9.5rem]"
          />
          {SCHEDULE.map((item, i) => (
            <li key={item.time}>
              <Reveal delay={i * 70}>
                <div className="group relative flex flex-col gap-1 border-b border-[color-mix(in_oklab,var(--bone)_22%,transparent)] py-6 pl-7 sm:flex-row sm:items-baseline sm:gap-10 sm:pl-0">
                  <span
                    aria-hidden
                    className="absolute top-8 left-0 h-3 w-3 -translate-x-1/2 -skew-x-[28deg] bg-[var(--signal)] transition-transform duration-300 group-hover:scale-150 sm:left-[9.5rem]"
                  />
                  <time className="label-mono w-32 shrink-0 text-[var(--signal)] sm:text-right">
                    {item.time}
                  </time>
                  <h3 className="font-display text-2xl font-bold tracking-tight uppercase transition-transform duration-300 group-hover:translate-x-1.5 sm:pl-10 sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="label-mono mt-8 text-[var(--bone)]/55">
          Placeholder programme &mdash; final timings to be announced.
        </p>
      </div>
    </section>
  );
}
