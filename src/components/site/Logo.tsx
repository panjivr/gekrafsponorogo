import { cn } from "@/lib/utils";

/**
 * GEKRAFS brand mark — faithful SVG recreation of the official "paint splat"
 * logo: a blue organic splat with the stacked GE / KRA / FS lettering in white
 * and yellow splatter dots. Crisp at any size, no external asset needed.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="GEKRAFS"
    >
      {/* yellow splatter accents */}
      <circle cx="11" cy="24" r="5" fill="#f7c600" />
      <circle cx="89" cy="69" r="4.4" fill="#f7c600" />
      <circle cx="22" cy="86" r="3" fill="#f7c600" />
      {/* blue splat blob */}
      <path
        fill="#00aeef"
        d="M50 5c11 0 15.5 9.8 26.4 10.8 10.8 1 18.4 9.7 16.2 20.4-2.1 10.7 6.2 17.3 3.2 28-3 10.7-13.9 12.4-19.8 21.4-5.9 9-17.6 5.4-26.6 6.3-9 .9-17.7 4.2-24.8-3.6-7.1-7.8-18.5-6.9-19.4-17.8-.9-10.9-7.9-18.3-2.8-28.4C7.5 32.2 4.6 21.3 14.4 15.2 24.2 9.1 34 5 50 5Z"
      />
      {/* stacked GEKRAFS lettering */}
      <g
        fill="#ffffff"
        fontFamily="Outfit, ui-sans-serif, sans-serif"
        fontWeight="800"
        textAnchor="middle"
      >
        <text x="50" y="40" fontSize="23">GE</text>
        <text x="50" y="61" fontSize="20">KRA</text>
        <text x="50" y="82" fontSize="23">FS</text>
      </g>
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
      <LogoMark className="h-11 w-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[18px] font-bold tracking-tight",
            inverted ? "text-white" : "text-[#0a1b33]"
          )}
        >
          GEKRAFS
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.24em]",
            inverted ? "text-white/70" : "text-[#0087d1]"
          )}
        >
          Ponorogo
        </span>
      </span>
    </span>
  );
}
