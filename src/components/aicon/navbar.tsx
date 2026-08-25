import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, Wordmark } from "./brand";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll detection for navbar background styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Breakpoint watcher: auto-close menu when viewport expands to desktop (>= 768px)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setOpen(false);
      }
    };

    // If currently on desktop, ensure menu state is closed
    if (mql.matches && open) {
      setOpen(false);
    }

    mql.addEventListener("change", handleMediaChange);
    return () => mql.removeEventListener("change", handleMediaChange);
  }, [open]);

  // Robust body scroll-lock management
  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const shouldLock = open && !isDesktop;

    if (shouldLock) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  // Escape key handler to close mobile menu
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500",
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
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="focus-visible:ring-ring inline-flex h-11 w-11 items-center justify-center border border-[color-mix(in_oklab,var(--bone)_25%,transparent)] text-[var(--bone)] focus-visible:ring-2 focus-visible:outline-none md:hidden cursor-pointer"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Full-screen Mobile Overlay */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 flex h-[100dvh] w-screen flex-col justify-between bg-[var(--ink)] px-5 pb-8 text-[var(--bone)] md:hidden overflow-y-auto"
        >
          {/* Top Bar with Logo and Close X */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-[color-mix(in_oklab,var(--bone)_12%,transparent)]">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="text-[var(--bone)]"
              aria-label="AICON'26 home"
            >
              <Wordmark tone="bone" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="focus-visible:ring-ring inline-flex h-11 w-11 items-center justify-center border border-[color-mix(in_oklab,var(--bone)_25%,transparent)] text-[var(--bone)] focus-visible:ring-2 focus-visible:outline-none cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-1 flex-col justify-center py-6">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className="border-b border-[color-mix(in_oklab,var(--bone)_10%,transparent)] first:border-t"
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display flex items-center justify-between py-4 text-2xl font-bold tracking-tight transition-colors active:text-[var(--signal)]"
                >
                  <span>{link.label}</span>
                  <span className="label-mono opacity-40">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom Branding Area */}
          <div className="shrink-0 border-t border-[color-mix(in_oklab,var(--bone)_12%,transparent)] pt-6">
            <p className="label-mono text-xs text-[var(--bone)]/50">
              AICON&rsquo;26 &mdash; AI &middot; Code &middot; Startups &middot; Innovation
            </p>
            <p className="label-mono mt-1 text-[10px] text-[var(--bone)]/30">
              SEECS &middot; NUST &middot; 04 Modules &middot; 03 Days
            </p>
          </div>
        </div>
      )}
    </>
  );
}
