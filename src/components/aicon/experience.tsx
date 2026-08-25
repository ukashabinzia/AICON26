import { Reveal } from "./reveal";
import { SectionLabel } from "./brand";

const DAYS = [
  {
    day: "01",
    title: "Learn",
    copy: "Workshops, exploration and ideas. Get oriented, meet your community, and start thinking about what you want to build.",
    accent: "var(--signal)",
  },
  {
    day: "02",
    title: "Build",
    copy: "AI sprints, coding sessions and collaboration. Hands on keyboards, models in training, prototypes taking shape.",
    accent: "var(--blue)",
  },
  {
    day: "03",
    title: "Compete",
    copy: "Pitchfest, speed programming, final demos. Present what you built. Defend it. Win it.",
    accent: "var(--deep-red)",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="grain relative overflow-hidden bg-[var(--ink)] py-20 text-[var(--bone)] sm:py-28"
    >
      {/* Subtle diagonal geometry */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="signal-grid absolute inset-0 text-[var(--bone)] opacity-[0.08]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <SectionLabel className="text-[var(--bone)]">03 / Experience</SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="text-balance-tight mt-6 font-display text-[clamp(2.4rem,7vw,6rem)] font-bold uppercase">
                The 3-Day
                <br />
                Experience
              </h2>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <span className="label-mono text-[var(--bone)]/40">Programme Preview</span>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-0">
          {DAYS.map((d, i) => (
            <Reveal key={d.day} delay={i * 120}>
              <article className="group relative flex flex-col justify-between border border-[color-mix(in_oklab,var(--bone)_12%,transparent)] p-8 transition-colors duration-500 hover:bg-[color-mix(in_oklab,var(--bone)_4%,transparent)] sm:p-10 lg:min-h-[420px]">
                {/* Day number — large background element */}
                <div>
                  <span className="block font-display text-[clamp(5rem,18vw,8rem)] font-bold leading-none tracking-[-0.06em] opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.14] lg:text-[8rem]">
                    {d.day}
                  </span>
                  <div className="mt-2">
                    <span className="label-mono text-[var(--bone)]/50">Day {d.day}</span>
                    <h3 className="mt-2 font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight uppercase">
                      {d.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-8">
                  <span
                    aria-hidden
                    className="mb-5 block h-1 w-12 origin-left -skew-x-[28deg] transition-transform duration-500 group-hover:scale-x-[2.4]"
                    style={{ backgroundColor: d.accent }}
                  />
                  <p className="text-sm leading-relaxed text-[var(--bone)]/65 sm:text-base">
                    {d.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="label-mono mt-8 text-[var(--bone)]/35">
            Conceptual programme flow &mdash; official schedule to be announced.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
