import { cn } from "@/lib/utils";

/**
 * GEKRAFS Ponorogo brand mark — an organic "paint splat" blob in brand blue
 * with yellow accent dots, echoing the official logo. Pure SVG (crisp, themeable).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="GEKRAFS Ponorogo"
    >
      <path
        fill="#00aeef"
        d="M30.5 3.2c4.2-1.7 8.1 2.1 12.3 1.6 3.9-.4 8.4-3 11.6-.4 3.3 2.7 1.3 7.7 2.6 11.6 1.3 3.9 5.6 6.9 5.4 11.1-.2 4.2-4.8 6.6-6.5 10.5-1.6 3.8-.6 8.9-3.7 11.7-3 2.8-7.8 1-11.6 2.5-3.9 1.5-7 6-11.2 5.7-4.2-.3-6.4-5.1-10.2-7-3.8-1.8-9-1.4-11.6-4.7-2.6-3.3-.6-8.2-1.8-12.1C4.3 31.5.2 28.2.6 24c.4-4.2 5.2-6.2 7.2-9.9C9.7 10.4 9 5.4 12.2 2.9c3.2-2.5 7.9-.2 11.8-1.1 2.3-.5 4.4-1.7 6.5-2.6Z"
      />
      <circle cx="15" cy="14" r="3.4" fill="#f7c600" />
      <circle cx="50" cy="46" r="3" fill="#f7c600" />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="Outfit, sans-serif"
        fontWeight="700"
        fontSize="26"
        fill="#ffffff"
      >
        G
      </text>
    </svg>
  );
}

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[17px] font-semibold tracking-tight",
            inverted ? "text-white" : "text-[#0a1b33]"
          )}
        >
          GEKRAFS
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.22em]",
            inverted ? "text-white/70" : "text-[#0087d1]"
          )}
        >
          Ponorogo
        </span>
      </span>
    </span>
  );
}
