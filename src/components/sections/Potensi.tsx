import { Drama, CalendarHeart, ShoppingBag, Rocket, type LucideIcon } from "lucide-react";
import { potensi } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const icons: LucideIcon[] = [Drama, CalendarHeart, ShoppingBag, Rocket];

export default function Potensi() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
      <SectionHeading
        eyebrow="Potensi Ekraf Ponorogo"
        title="Modal yang sudah kita miliki"
        subtitle="Ponorogo punya aset budaya dan kreatif yang kuat — fondasi nyata untuk menggerakkan ekonomi kreatif daerah."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {potensi.map((p, i) => {
          const Icon = icons[i] ?? Rocket;
          return (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-[#0a152d] p-7 text-white shadow-sm">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: i % 2 ? "#f7c600" : "#00aeef" }}
                />
                <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[#f7c600]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <span className="relative mt-5 inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#00aeef]">
                  {p.tag}
                </span>
                <h3 className="relative mt-1 font-display text-[19px] font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="relative mt-2 text-[13px] leading-relaxed text-white/60">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
