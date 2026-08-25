import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionLabel } from "./brand";
import { cn } from "@/lib/utils";

const MODULES = [
  {
    no: "01",
    title: "Pitchfest",
    tagline: "90 SECONDS. ONE IDEA.",
    copy: "Take the stage with one idea and ninety seconds on the clock. A live panel decides in the room — no second chances, no safety nets. If your idea deserves to exist, this is where you prove it.",
    themes: ["Pitching", "Ideas", "Startups", "Live Panel"],
  },
  {
    no: "02",
    title: "Competitive Speed Programming",
    tagline: "RANKED. TIMED. LIVE.",
    copy: "Ranked rounds on the clock. The leaderboard rewrites itself live — solve fast, solve clean, or watch someone else take your spot. Pure competitive programming at speed.",
    themes: ["Programming", "Speed", "Competition", "Rankings"],
  },
  {
    no: "03",
    title: "AI RapidSprint",
    tagline: "BUILD. DEMO. DEFEND.",
    copy: "Build a working AI model in one sitting. No slideware, no vaporware — ship it, demo it, defend it in front of people who know the difference. Rapid prototyping meets real accountability.",
    themes: ["AI", "Prototyping", "Demos", "Teams"],
  },
  {
    no: "04",
    title: "Sponsor Innovation Challenge",
    tagline: "REAL BRIEFS. REAL INDUSTRY.",
    copy: "Real problem briefs from industry partners. Present your solution to the people who own the problem. This is where student innovation meets the real world.",
    themes: ["Industry", "Innovation", "Real-World", "Sponsors"],
  },
];

export function Modules() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="modules" className="bg-[var(--ink)] py-24 text-[var(--bone)] sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <SectionLabel className="text-[var(--bone)]">02 / Modules</SectionLabel>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="text-balance-tight font-display text-[clamp(2.4rem,7vw,6rem)] font-bold uppercase">
              Four ways
              <br />
              to build.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-sm text-[var(--bone)]/65 sm:text-base">
              Each module is a different way to prove what you can do. Pick your challenge.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 border-t border-[color-mix(in_oklab,var(--bone)_16%,transparent)]">
          {MODULES.map((m, i) => {
            const isOpen = active === m.no;
            return (
              <li
                key={m.no}
                className="border-b border-[color-mix(in_oklab,var(--bone)_16%,transparent)]"
              >
                <Reveal delay={i * 80}>
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? null : m.no)}
                    aria-expanded={isOpen}
                    className={cn(
                      "module-expand group focus-visible:ring-ring relative flex w-full cursor-pointer flex-col gap-3 overflow-hidden px-1 py-8 text-left transition-[padding] duration-500 hover:px-6 focus-visible:ring-2 focus-visible:outline-none sm:py-12",
                      isOpen && "bg-[var(--blue)]/10 px-6",
                    )}
                  >
                    {/* Hatch background on hover */}
                    <span
                      aria-hidden
                      className={cn(
                        "signal-hatch absolute inset-y-0 left-0 w-0 opacity-0 transition-[width,opacity] duration-500",
                        isOpen
                          ? "w-full opacity-[0.06]"
                          : "group-hover:w-full group-hover:opacity-[0.06]",
                      )}
                    />

                    {/* Top row: number + title + tagline + arrow */}
                    <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-10">
                      <span
                        className={cn(
                          "label-mono transition-colors duration-300",
                          isOpen ? "text-[var(--signal)]" : "text-[var(--signal)]",
                        )}
                      >
                        {m.no}
                      </span>
                      <h3
                        className={cn(
                          "text-balance-tight relative font-display text-[clamp(1.8rem,5vw,3.5rem)] font-bold uppercase transition-transform duration-500",
                          isOpen ? "translate-x-0" : "group-hover:translate-x-2",
                        )}
                      >
                        {m.title}
                      </h3>
                      <span className="label-mono relative hidden text-[var(--bone)]/40 sm:ml-auto sm:block">
                        {m.tagline}
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "relative h-7 w-7 shrink-0 transition-all duration-500",
                          isOpen
                            ? "rotate-90 text-[var(--signal)]"
                            : "text-[var(--bone)]/40 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--signal)]",
                        )}
                      />
                    </div>

                    {/* Expanded content */}
                    <div
                      className={cn(
                        "relative grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-4 pb-2 sm:pl-[calc(2.5rem+2rem)]">
                          <p className="label-mono mb-3 text-[var(--signal)] sm:hidden">
                            {m.tagline}
                          </p>
                          <p className="max-w-2xl text-sm leading-relaxed text-[var(--bone)]/70 sm:text-base">
                            {m.copy}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {m.themes.map((tag) => (
                              <span
                                key={tag}
                                className="label-mono border border-[color-mix(in_oklab,var(--bone)_20%,transparent)] px-3 py-1.5 text-[var(--bone)]/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
