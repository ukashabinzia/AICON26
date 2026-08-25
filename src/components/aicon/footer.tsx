import { Instagram } from "lucide-react";
import { NAV_LINKS, SignalDivider, Wordmark } from "./brand";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/aicon.26/",
    Icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] pt-16 pb-10 text-[var(--bone)]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SignalDivider tone="bone" />

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <Wordmark tone="bone" />

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-signal label-mono text-[var(--bone)]/70 hover:text-[var(--bone)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="focus-visible:ring-ring inline-flex h-11 w-11 items-center justify-center border border-[color-mix(in_oklab,var(--bone)_25%,transparent)] transition-colors duration-300 hover:border-[var(--signal)] hover:text-[var(--signal)] focus-visible:ring-2 focus-visible:outline-none"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[color-mix(in_oklab,var(--bone)_14%,transparent)] pt-6 sm:flex-row sm:items-center sm:justify-between">
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
