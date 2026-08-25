import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function RegisterCta() {
  return (
    <section
      id="register"
      className="grain relative overflow-hidden bg-[var(--signal)] py-28 text-[var(--ink)] sm:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 h-[520px] w-[340px] -skew-x-[28deg] bg-[var(--blue)] opacity-90" />
        <div className="absolute -right-24 -bottom-40 h-[420px] w-[260px] -skew-x-[28deg] bg-[var(--deep-red)] opacity-80" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance-tight font-display text-[clamp(2.8rem,11vw,9rem)] font-bold uppercase">
            Ready to connect?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 font-display text-sm font-bold tracking-[0.24em] uppercase">
            Your signal starts here.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a
            href="#top"
            className="group focus-visible:ring-ring relative mt-12 inline-flex items-center gap-4 overflow-hidden bg-[var(--ink)] px-10 py-6 font-display text-sm font-bold tracking-[0.18em] text-[var(--bone)] uppercase transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:text-base"
          >
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 bg-[var(--blue)] transition-transform duration-500 group-hover:scale-x-100"
            />
            <span className="relative">Register now</span>
            <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
