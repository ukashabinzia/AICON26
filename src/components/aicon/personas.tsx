import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionLabel } from "./brand";

const PERSONAS = [
  { title: "Builder", copy: "You like making things.", cta: "Explore Tech" },
  { title: "Creator", copy: "You turn ideas into experiences.", cta: "Explore Creative" },
  { title: "Connector", copy: "You bring people and ideas together.", cta: "Explore Community" },
];

export function Personas() {
  return (
    <section className="bg-[var(--bone)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <SectionLabel>03 / Identity</SectionLabel>
        </Reveal>
        <Reveal className="mt-8">
          <h2 className="text-balance-tight font-display text-[clamp(2.2rem,6.4vw,5.5rem)] font-bold uppercase">
            Who are you coming as?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-md text-sm text-[var(--ink)]/70 sm:text-base">
            There is more than one way to experience AICON.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-[color-mix(in_oklab,var(--ink)_14%,transparent)] bg-[color-mix(in_oklab,var(--ink)_14%,transparent)] lg:grid-cols-3">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} className="bg-[var(--bone)]">
              <a
                href="#events"
                className="group focus-visible:ring-ring relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden p-8 transition-colors duration-500 hover:bg-[var(--blue)] focus-visible:ring-2 focus-visible:outline-none sm:min-h-[420px]"
              >
                <span
                  aria-hidden
                  className="absolute -top-16 -right-16 h-40 w-40 -skew-x-[28deg] bg-[var(--signal)] opacity-0 transition-all duration-700 group-hover:translate-y-4 group-hover:opacity-100"
                />
                <span className="label-mono relative text-[var(--ink)]/40 transition-colors duration-500 group-hover:text-[var(--bone)]/60">
                  0{i + 1}
                </span>
                <div className="relative">
                  <h3 className="text-balance-tight font-display text-[clamp(2.2rem,6vw,3.6rem)] font-bold uppercase transition-colors duration-500 group-hover:text-[var(--bone)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--ink)]/65 transition-colors duration-500 group-hover:text-[var(--bone)]/75">
                    {p.copy}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-display text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-500 group-hover:text-[var(--signal)]">
                    {p.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
