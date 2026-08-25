import { Instagram } from "lucide-react";
import { SignalDivider, Wordmark } from "./brand";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] pt-12 pb-8 text-[var(--bone)] sm:pt-14 sm:pb-10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SignalDivider tone="bone" />

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Wordmark tone="bone" />

          <div>
            <a
              href="https://www.instagram.com/aicon.26/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="focus-visible:ring-ring group inline-flex h-11 w-11 items-center justify-center border border-[color-mix(in_oklab,var(--bone)_25%,transparent)] transition-colors duration-300 hover:border-[var(--signal)] hover:text-[var(--signal)] focus-visible:ring-2 focus-visible:outline-none"
            >
              <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[color-mix(in_oklab,var(--bone)_14%,transparent)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-[var(--bone)]/60">
            AICON&rsquo;26 &mdash; AI &middot; Code &middot; Startups &middot; Innovation
          </p>
          <p className="label-mono text-[var(--bone)]/40">
            &copy; {new Date().getFullYear()} AICON&rsquo;26. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
