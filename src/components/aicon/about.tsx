import { Reveal } from "./reveal";
import { SectionLabel, SignalDivider } from "./brand";

const CONCEPTS = [
  { title: "Technology", copy: "Explore and build." },
  { title: "Creativity", copy: "Turn ideas into experiences." },
  { title: "Community", copy: "Meet people and collaborate." },
  { title: "Innovation", copy: "Challenge what is possible." },
];

export function About() {
  return (
    <section id="about" className="bg-[var(--bone)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <SectionLabel>01 / About AICON</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="text-balance-tight font-display text-[clamp(2.5rem,7vw,6rem)] font-bold uppercase">
              A place for people
              <br />
              with ideas.
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9 lg:pt-6">
            <p className="text-base leading-relaxed text-[var(--ink)]/75">
              AICON&rsquo;26 is a platform where students, technologists, designers and makers meet.
              It exists to put ideas in front of people who can build them &mdash; and to put people
              in front of ideas they have not met yet.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink)]/75">
              One event, many frequencies: technology, creativity, innovation and community.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <SignalDivider />
        </Reveal>

        <ul className="mt-12 grid gap-px border border-[color-mix(in_oklab,var(--ink)_12%,transparent)] bg-[color-mix(in_oklab,var(--ink)_12%,transparent)] sm:grid-cols-2 lg:grid-cols-4">
          {CONCEPTS.map((c, i) => (
            <li key={c.title} className="bg-[var(--bone)]">
              <Reveal delay={i * 90} className="group h-full p-7 transition-colors duration-300 hover:bg-[var(--card)]">
                <span className="label-mono text-[var(--ink)]/40">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight uppercase">
                  {c.title}
                </h3>
                <span
                  aria-hidden
                  className="mt-4 block h-1 w-10 origin-left -skew-x-[28deg] bg-[var(--signal)] transition-transform duration-500 group-hover:scale-x-[2.6]"
                />
                <p className="mt-4 text-sm text-[var(--ink)]/65">{c.copy}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
