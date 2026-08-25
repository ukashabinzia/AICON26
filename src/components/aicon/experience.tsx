import { Reveal } from "./reveal";

const WORDS = ["Connect.", "Create.", "Converge."];

export function Experience() {
  return (
    <section className="grain relative overflow-hidden bg-[var(--bone)] py-28 sm:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-signal-sweep absolute -inset-32">
          <svg className="h-full w-full" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
            <path d="M-80 560 L1280 60" stroke="var(--signal)" strokeWidth="10" />
            <path d="M-80 640 L1280 160" stroke="var(--blue)" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 className="text-balance-tight font-display text-[clamp(3rem,15vw,12rem)] font-bold uppercase">
          {WORDS.map((word, i) => (
            <Reveal
              key={word}
              as="span"
              delay={i * 160}
              className="block"
            >
              <span
                className={
                  i === 1
                    ? "text-[var(--blue)] sm:pl-[12%]"
                    : i === 2
                      ? "text-[var(--deep-red)] sm:pl-[24%]"
                      : ""
                }
              >
                {word}
              </span>
            </Reveal>
          ))}
        </h2>
      </div>
    </section>
  );
}
