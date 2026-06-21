import { marqueeLogos } from "@/lib/content";

/**
 * Seamless, GPU-friendly marquee. Pure CSS keyframes (translateX 0 -> -50%),
 * pauses on hover, with edge mask gradient. The list is rendered twice inline
 * to create the infinite loop. Each card matches the hero "Get in touch" button.
 */
export default function Marquee() {
  const items = [...marqueeLogos, ...marqueeLogos];

  return (
    <div className="mt-10 marquee-group marquee-mask w-full max-w-[1400px] mx-auto overflow-hidden px-4 sm:px-6">
      <div className="marquee-track flex w-max gap-5">
        {items.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden"
          >
            <div
              className="absolute inset-0 scale-150 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
              style={{ background: `linear-gradient(135deg, ${logo.from}, ${logo.to})` }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="relative z-10 h-8 w-auto max-w-[80px] object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
