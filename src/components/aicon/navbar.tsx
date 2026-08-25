import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, Wordmark } from "./brand";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled
          ? "border-b border-[color-mix(in_oklab,var(--bone)_15%,transparent)] bg-[color-mix(in_oklab,var(--ink)_88%,transparent)] backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:h-20"
      >
        <a href="#top" className="text-[var(--bone)]" aria-label="AICON'26 home">
          <Wordmark tone="bone" />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "link-signal label-mono text-[var(--bone)]/85 transition-colors hover:text-[var(--bone)]",
                  link.label === "Register" &&
                    "after:scale-x-100 after:origin-left px-3 py-2 text-[var(--ink)] bg-[var(--signal)] hover:text-[var(--ink)] after:hidden hover:-translate-y-0.5 transition-transform",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="focus-visible:ring-ring inline-flex h-11 w-11 items-center justify-center border border-[color-mix(in_oklab,var(--bone)_25%,transparent)] text-[var(--bone)] focus-visible:ring-2 focus-visible:outline-none md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="bg-[var(--ink)] px-5 pb-10 text-[var(--bone)] md:hidden"
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className="border-t border-[color-mix(in_oklab,var(--bone)_12%,transparent)]"
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display flex items-center justify-between py-5 text-2xl font-bold tracking-tight"
              >
                {link.label}
                <span className="label-mono opacity-40">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
