import { stats, network } from "@/lib/content";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

export default function Stats() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-20">
      <div className="relative overflow-hidden rounded-[36px] border border-slate-200/60 bg-[#0a152d] px-6 py-12 sm:px-12 sm:py-14 text-white shadow-[0_40px_100px_-30px_rgba(10,21,45,0.5)]">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle,#00aeef,transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle,#f7c600,transparent 70%)" }}
        />
        <Reveal className="relative">
          <h2 className="font-display text-[24px] sm:text-[30px] font-medium tracking-tight">
            {network.title}
          </h2>
          <p className="mt-2 text-[14px] text-white/60">{network.subtitle}</p>
        </Reveal>

        <div className="relative mt-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="border-l border-white/10 pl-4 sm:pl-6">
                <div className="font-stat text-[40px] sm:text-[52px] font-bold leading-none text-white">
                  <Counter value={s.value} display={s.display} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-[13px] leading-snug text-white/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
