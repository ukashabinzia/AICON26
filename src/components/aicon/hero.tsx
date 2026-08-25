import { ArrowDown, ArrowRight } from "lucide-react";
import logo from "@/assets/aicon-logo.png.asset.json";
import { StatusDot } from "./brand";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[var(--ink)] pt-28 pb-10 text-[var(--bone)]"
    >
      {/* Signal field */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="signal-grid absolute inset-0 text-[var(--bone)] opacity-[0.35]" />
        <div className="animate-signal-sweep absolute -inset-40 opacity-90">
          <svg
            className="h-full w-full"
            viewBox="0 0 1200 800"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M-100 720 L1300 90"
              stroke="var(--signal)"
              strokeWidth="6"
              className="animate-signal-draw"
            />
            <path
              d="M-100 810 L1300 200"
              stroke="var(--blue)"
              strokeWidth="60"
              opacity="0.55"
            />
          </svg>
        </div>
        <div className="absolute -right-24 -bottom-32 h-[420px] w-[420px] -skew-x-[28deg] bg-[var(--deep-red)] opacity-40" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="label-mono text-[var(--bone)]/70">AICON&rsquo;26 / SIGNAL DETECTED</span>
          <StatusDot />
        </div>

        <h1 className="text-balance-tight mt-8 font-display text-[clamp(3.4rem,15.5vw,13rem)] font-bold uppercase">
          <span className="block animate-[fade-in_0.8s_cubic-bezier(0.22,1,0.36,1)_both]">
            The Signal
          </span>
          <span className="block animate-[fade-in_0.8s_cubic-bezier(0.22,1,0.36,1)_0.12s_both]">
            Is{" "}
            <span className="relative inline-block text-[var(--signal)]">
              Live.
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 border-t border-[color-mix(in_oklab,var(--bone)_18%,transparent)] pt-8 lg:grid-cols-[auto_1fr_auto] lg:items-end">
          <img
            src={logo.url}
            alt="AICON'26 logo"
            width={160}
            height={160}
            className="h-24 w-24 object-cover sm:h-32 sm:w-32"
          />

          <div className="max-w-xl">
            <p className="font-display text-xl font-bold tracking-[0.18em] uppercase sm:text-2xl">
              Connect. Create. Converge.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--bone)]/70 sm:text-base">
              AICON&rsquo;26 brings together technology, creativity, innovation and community in one
              immersive experience.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <a
              href="#register"
              className="group focus-visible:ring-ring inline-flex items-center justify-center gap-3 bg-[var(--signal)] px-7 py-4 font-display text-sm font-bold tracking-[0.16em] text-[var(--ink)] uppercase transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:outline-none"
            >
              Register now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="group focus-visible:ring-ring inline-flex items-center justify-center gap-3 border border-[color-mix(in_oklab,var(--bone)_35%,transparent)] px-7 py-4 font-display text-sm font-bold tracking-[0.16em] uppercase transition-colors duration-300 hover:border-[var(--signal)] hover:text-[var(--signal)] focus-visible:ring-2 focus-visible:outline-none"
            >
              Explore AICON
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
