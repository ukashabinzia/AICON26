import logo from "@/assets/aicon-logo.png.asset.json";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
  { label: "Register", href: "#register" },
] as const;

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="AICON'26 logo"
      width={96}
      height={96}
      className={cn("block h-10 w-10 object-cover", className)}
    />
  );
}

export function Wordmark({
  className,
  tone = "inherit",
}: {
  className?: string;
  tone?: "inherit" | "bone";
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-display text-lg leading-none font-bold tracking-tight",
          tone === "bone" && "text-[var(--bone)]",
        )}
      >
        AICON
        <span className="text-[var(--signal)]">&rsquo;26</span>
      </span>
    </span>
  );
}

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span aria-hidden className="h-2.5 w-2.5 -skew-x-[28deg] bg-[var(--signal)]" />
      <span className="label-mono opacity-70">{children}</span>
    </div>
  );
}

/** Diagonal signal line used as a recurring divider motif. */
export function SignalDivider({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "bone";
}) {
  return (
    <div className={cn("relative h-px w-full overflow-visible", className)} aria-hidden>
      <div
        className={cn(
          "h-px w-full",
          tone === "ink"
            ? "bg-[color-mix(in_oklab,var(--ink)_18%,transparent)]"
            : "bg-[color-mix(in_oklab,var(--bone)_22%,transparent)]",
        )}
      />
      <div className="absolute -top-2 left-0 h-4 w-24 -skew-x-[28deg] bg-[var(--signal)]" />
    </div>
  );
}

export function StatusDot({ label = "SIGNAL ACTIVE" }: { label?: string }) {
  return (
    <span className="label-mono inline-flex items-center gap-2">
      <span className="animate-signal-pulse inline-block h-2 w-2 rounded-full bg-[var(--signal)]" />
      {label}
    </span>
  );
}
