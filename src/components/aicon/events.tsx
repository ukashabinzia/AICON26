import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionLabel } from "./brand";

const EVENTS = [
  { no: "01", title: "Tech", copy: "Build, experiment and explore technology." },
  { no: "02", title: "Creative", copy: "Design, create and express ideas." },
  { no: "03", title: "Compete", copy: "Challenge yourself and solve problems." },
  { no: "04", title: "Connect", copy: "Meet people, collaborate and exchange ideas." },
];

export function Events() {
  return (
    <section id="events" className="bg-[var(--ink)] py-24 text-[var(--bone)] sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <SectionLabel className="text-[var(--bone)]">02 / Events</SectionLabel>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="text-balance-tight font-display text-[clamp(2.4rem,7vw,6rem)] font-bold uppercase">
              Find your
              <br />
              frequency.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-sm text-[var(--bone)]/65 sm:text-base">
              Explore the different ways to experience AICON&rsquo;26.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 border-t border-[color-mix(in_oklab,var(--bone)_16%,transparent)]">
          {EVENTS.map((e, i) => (
            <li key={e.no} className="border-b border-[color-mix(in_oklab,var(--bone)_16%,transparent)]">
              <Reveal delay={i * 80}>
                <a
                  href="#register"
                  className="group focus-visible:ring-ring relative flex flex-col gap-3 overflow-hidden px-1 py-8 transition-[padding] duration-500 hover:px-6 focus-visible:ring-2 focus-visible:outline-none sm:flex-row sm:items-center sm:gap-10 sm:py-12"
                >
                  <span
                    aria-hidden
                    className="signal-hatch absolute inset-y-0 left-0 w-0 opacity-0 transition-[width,opacity] duration-500 group-hover:w-full group-hover:opacity-[0.09]"
                  />
                  <span className="label-mono relative text-[var(--signal)]">{e.no}</span>
                  <h3 className="text-balance-tight relative font-display text-[clamp(2.2rem,7vw,4.5rem)] font-bold uppercase transition-transform duration-500 group-hover:translate-x-2">
                    {e.title}
                  </h3>
                  <p className="relative max-w-xs text-sm text-[var(--bone)]/60 sm:ml-auto">
                    {e.copy}
                  </p>
                  <ArrowUpRight className="relative h-7 w-7 shrink-0 text-[var(--bone)]/40 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--signal)]" />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
