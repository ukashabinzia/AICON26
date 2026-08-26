import { Reveal } from "./reveal";
import { SectionLabel } from "./brand";
import { cn } from "@/lib/utils";

interface Stage {
  step: string;
  name: string;
  description: string;
}

const STAGES: Stage[] = [
  {
    step: "01",
    name: "THINK",
    description: "Ideas, problems, possibilities.",
  },
  {
    step: "02",
    name: "MAKE",
    description: "Code, prototypes, AI.",
  },
  {
    step: "03",
    name: "TEST",
    description: "Competition, feedback, iteration.",
  },
  {
    step: "04",
    name: "SHIP",
    description: "Pitch it. Demo it. Make it real.",
  },
];

export function WhyAicon() {
  return (
    <section
      id="why-aicon"
      aria-label="Why AICON"
      className="relative overflow-hidden bg-[var(--bone)] py-20 sm:py-28 lg:py-32"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Section Header */}
        <Reveal>
          <SectionLabel>WHY AICON?</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-8">
            <h2 className="text-balance-tight font-display text-[clamp(2.5rem,7vw,5.75rem)] font-bold uppercase tracking-[-0.04em] text-[var(--ink)]">
              Ideas don&rsquo;t
              <br />
              build themselves.
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:self-end">
            <div className="border-l-2 border-[var(--signal)] pl-6">
              <p className="text-base leading-relaxed text-[var(--ink)]/80 sm:text-lg">
                AICON brings together the people, problems and technology needed to turn ideas into
                something real &mdash; from writing code and building AI systems to pitching ideas
                and solving challenges inspired by industry.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Continuous Horizontal Progression Track */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* Desktop & Tablet Progression Grid */}
          <ul className="hidden md:grid md:grid-cols-4 gap-px border border-[color-mix(in_oklab,var(--ink)_12%,transparent)] bg-[color-mix(in_oklab,var(--ink)_12%,transparent)]">
            {STAGES.map((stage, idx) => (
              <li key={stage.name} className="bg-[var(--bone)]">
                <Reveal
                  delay={idx * 80}
                  className="group relative h-full cursor-default p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--blue)]"
                >
                  {/* Top Row: Step Number + Process Flow Connector */}
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-[var(--ink)]/40 transition-colors duration-300 group-hover:text-[var(--bone)]/60">
                      {stage.step}
                    </span>
                    {idx < STAGES.length - 1 ? (
                      <span
                        aria-hidden
                        className="font-display text-lg font-light text-[var(--ink)]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--bone)]/70"
                      >
                        &rarr;
                      </span>
                    ) : (
                      <span
                        aria-hidden
                        className="h-2 w-2 -skew-x-[28deg] bg-[var(--ink)]/25 transition-colors duration-300 group-hover:bg-[var(--signal)]"
                      />
                    )}
                  </div>

                  {/* Stage Headline */}
                  <h3 className="mt-8 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold uppercase tracking-tight text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--bone)]">
                    {stage.name}
                  </h3>

                  {/* Signal Yellow Accent Bar (replicates About cards) */}
                  <span
                    aria-hidden
                    className="mt-4 block h-1 w-10 origin-left -skew-x-[28deg] bg-[var(--signal)] transition-transform duration-300 group-hover:scale-x-[2.2]"
                  />

                  {/* Stage Supporting Copy */}
                  <p className="mt-6 text-sm leading-relaxed text-[var(--ink)]/65 transition-colors duration-300 group-hover:text-[var(--bone)]/85">
                    {stage.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>

          {/* Mobile Vertical Progression Sequence */}
          <ul className="grid gap-px border border-[color-mix(in_oklab,var(--ink)_12%,transparent)] bg-[color-mix(in_oklab,var(--ink)_12%,transparent)] md:hidden">
            {STAGES.map((stage, idx) => (
              <li key={stage.name} className="bg-[var(--bone)]">
                <Reveal
                  delay={idx * 70}
                  className="group relative cursor-default p-6 transition-all duration-300 hover:bg-[var(--blue)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-[var(--ink)]/40 transition-colors duration-300 group-hover:text-[var(--bone)]/60">
                      {stage.step}
                    </span>
                    {idx < STAGES.length - 1 && (
                      <span
                        aria-hidden
                        className="font-display text-sm text-[var(--ink)]/30 transition-all duration-300 group-hover:text-[var(--bone)]/70"
                      >
                        &darr;
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--bone)]">
                    {stage.name}
                  </h3>

                  <span
                    aria-hidden
                    className="mt-3 block h-1 w-8 origin-left -skew-x-[28deg] bg-[var(--signal)] transition-transform duration-300 group-hover:scale-x-[2]"
                  />

                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/65 transition-colors duration-300 group-hover:text-[var(--bone)]/85">
                    {stage.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
