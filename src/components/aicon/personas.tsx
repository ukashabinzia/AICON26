import { Reveal } from "./reveal";
import { useInView } from "./reveal";
import { SectionLabel } from "./brand";

const STATS = [
  { value: "03", label: "Days" },
  { value: "04", label: "Modules" },
  { value: "01", label: "Tech Experience" },
];

const COMMUNITY_ORGS = [
  "NUST ACM Student Chapter",
  "GDGoC NUST",
  "NUST Entrepreneur Club",
  "NUST Hack Club",
];

export function StatsAndCommunity() {
  const { ref: statsRef, inView: statsVisible } = useInView<HTMLDivElement>();

  return (
    <>
      {/* ─── Stats band ─── */}
      <section className="bg-[var(--bone)] pt-4 pb-20 sm:pt-6 sm:pb-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <SectionLabel>The Numbers</SectionLabel>
          </Reveal>

          <div
            ref={statsRef}
            className="mt-10 grid gap-px border border-[color-mix(in_oklab,var(--ink)_14%,transparent)] bg-[color-mix(in_oklab,var(--ink)_14%,transparent)] sm:grid-cols-3"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="bg-[var(--bone)] px-8 py-10 sm:py-14 lg:py-16">
                <span
                  className="block font-display text-[clamp(4rem,14vw,10rem)] font-bold leading-none tracking-[-0.06em]"
                  style={{
                    animationDelay: `${i * 150}ms`,
                  }}
                >
                  <span
                    className={statsVisible ? "animate-count-up inline-block" : "opacity-0"}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    {s.value}
                  </span>
                </span>
                <span className="label-mono mt-3 block text-[var(--ink)]/50">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Community ─── */}
      <section className="bg-[var(--blue)] py-20 text-[var(--bone)] sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-balance-tight font-display text-[clamp(2.2rem,6.5vw,5.5rem)] font-bold uppercase">
                  Built by the
                  <br />
                  community.
                  <br />
                  <span className="text-[var(--signal)]">For the community.</span>
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:pt-6">
              <Reveal delay={100}>
                <p className="text-base leading-relaxed text-[var(--bone)]/75">
                  AICON isn&rsquo;t run by a single team. It&rsquo;s built by student communities at
                  NUST who believe technology is better when it&rsquo;s shared.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <ul className="mt-8 flex flex-col gap-4">
                  {COMMUNITY_ORGS.map((org) => (
                    <li
                      key={org}
                      className="flex items-center gap-3 border-b border-[color-mix(in_oklab,var(--bone)_18%,transparent)] pb-4"
                    >
                      <span aria-hidden className="h-2 w-2 -skew-x-[28deg] bg-[var(--signal)]" />
                      <span className="font-display text-sm font-bold tracking-wide uppercase">
                        {org}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
