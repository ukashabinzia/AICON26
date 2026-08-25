import { Reveal } from "./reveal";
import { SectionLabel, SignalDivider } from "./brand";

const PILLARS = [
  { title: "AI", copy: "Build intelligent systems that solve real problems." },
  { title: "Coding", copy: "Write code under pressure. Ship what works." },
  { title: "Startups", copy: "Pitch ideas that deserve to exist." },
  { title: "Innovation", copy: "Challenge assumptions. Build what's missing." },
];

export function About() {
  return (
    <section id="about" className="bg-[var(--bone)] pt-20 pb-10 sm:pt-28 sm:pb-14">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <SectionLabel>01 / About</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="text-balance-tight font-display text-[clamp(2.5rem,7vw,6rem)] font-bold uppercase">
              Builders.
              <br />
              Thinkers.
              <br />
              Creators.
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9 lg:pt-6">
            <p className="text-base leading-relaxed text-[var(--ink)]/75">
              AICON&rsquo;26 is a three-day AI and technology experience at SEECS, NUST. It brings
              together coders, builders, designers, and problem-solvers around one shared ambition
              &mdash; to build what&rsquo;s next.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink)]/75">
              Four modules. Three days. Coding, AI, startup pitching, innovation challenges, and a
              community that shows up to make things happen.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16 sm:mt-20">
          <SignalDivider />
        </Reveal>

        <ul className="mt-12 grid gap-px border border-[color-mix(in_oklab,var(--ink)_12%,transparent)] bg-[color-mix(in_oklab,var(--ink)_12%,transparent)] sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((c, i) => (
            <li key={c.title} className="bg-[var(--bone)]">
              <Reveal
                delay={i * 90}
                className="group h-full p-7 transition-all duration-300 hover:bg-[var(--blue)] hover:-translate-y-1 cursor-default"
              >
                <span className="label-mono text-[var(--ink)]/40 transition-colors duration-300 group-hover:text-[var(--bone)]/60">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight uppercase text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--bone)]">
                  {c.title}
                </h3>
                <span
                  aria-hidden
                  className="mt-4 block h-1 w-10 origin-left -skew-x-[28deg] bg-[var(--signal)] transition-transform duration-300 group-hover:scale-x-[2.2]"
                />
                <p className="mt-4 text-sm leading-relaxed text-[var(--ink)]/65 transition-colors duration-300 group-hover:text-[var(--bone)]/80">
                  {c.copy}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
