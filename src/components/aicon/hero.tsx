import { ArrowDown, ArrowRight } from "lucide-react";
import logo from "@/assets/aicon-logo.png";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[var(--ink)] pt-28 pb-10 text-[var(--bone)]"
    >
      {/* Background geometry */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="signal-grid absolute inset-0 text-[var(--bone)] opacity-[0.35]" />
        <div className="animate-signal-sweep absolute -inset-40 opacity-60">
          <svg
            className="h-full w-full"
            viewBox="0 0 1200 800"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M-100 720 L1300 90"
              stroke="var(--signal)"
              strokeWidth="3"
              className="animate-signal-draw"
            />
            <path d="M-100 810 L1300 200" stroke="var(--blue)" strokeWidth="28" opacity="0.22" />
          </svg>
        </div>
        <div className="absolute -right-24 -bottom-32 hidden h-[340px] w-[340px] -skew-x-[28deg] bg-[var(--deep-red)] opacity-20 sm:block" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        {/* Logo + identity cluster */}
        <div className="flex items-end gap-6 sm:gap-10">
          <img
            src={logo}
            alt="AICON'26 logo"
            width={160}
            height={160}
            className="h-20 w-20 object-cover sm:h-28 sm:w-28 lg:h-36 lg:w-36"
          />
          <div>
            <span className="label-mono text-[var(--signal)]">
              AI &middot; CODE &middot; STARTUPS &middot; INNOVATION
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-balance-tight mt-8 font-display text-[clamp(2.6rem,11vw,9rem)] font-bold uppercase">
          <span className="block animate-[fade-in_0.8s_cubic-bezier(0.22,1,0.36,1)_both]">
            AICON&rsquo;26
          </span>
          <span className="block animate-[fade-in_0.8s_cubic-bezier(0.22,1,0.36,1)_0.12s_both] text-[var(--signal)]">
            Build What&rsquo;s
            <br className="sm:hidden" /> Next.
          </span>
        </h1>

        {/* Bottom bar: description + stats + CTAs */}
        <div className="mt-10 grid gap-10 border-t border-[color-mix(in_oklab,var(--bone)_18%,transparent)] pt-8 lg:grid-cols-[1fr_auto_auto] lg:items-end">
          {/* Description */}
          <div className="max-w-lg">
            <p className="text-sm leading-relaxed text-[var(--bone)]/70 sm:text-base">
              A community-powered AI and technology experience bringing builders, problem-solvers,
              creators and innovators together at SEECS, NUST.
            </p>
            <p className="label-mono mt-5 text-[var(--bone)]/50">
              03 Days &middot; 04 Modules &middot; One Tech Experience
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <a
              href="#about"
              className="group focus-visible:ring-ring inline-flex h-[56px] w-full items-center justify-center gap-3 border border-[color-mix(in_oklab,var(--bone)_35%,transparent)] px-7 font-display text-sm font-bold tracking-[0.16em] uppercase transition-colors duration-300 hover:border-[var(--signal)] hover:text-[var(--signal)] focus-visible:ring-2 focus-visible:outline-none sm:w-[220px]"
            >
              Explore AICON
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
            <a
              href="#register"
              className="group focus-visible:ring-ring inline-flex h-[56px] w-full items-center justify-center gap-3 bg-[var(--signal)] px-7 font-display text-sm font-bold tracking-[0.16em] text-[var(--ink)] uppercase transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:outline-none sm:w-[220px]"
            >
              Register now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
