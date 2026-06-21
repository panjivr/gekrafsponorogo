import { Target, Compass, Zap, Handshake, Flame } from "lucide-react";
import { about } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const principleIcons = [Zap, Handshake, Flame];

export default function VisionMission() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
      <SectionHeading
        eyebrow="Arah & Cara Kita Bergerak"
        title="Visi, Misi & Prinsip"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#00aeef]/10 text-[#0087d1]">
              <Target className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Visi
            </h3>
            <p className="mt-2 font-display text-[22px] font-medium leading-snug text-[#0a1b33]">
              {about.vision}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.07}>
          <div className="h-full rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f7c600]/15 text-[#9a7b00]">
              <Compass className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Misi
            </h3>
            <p className="mt-2 font-display text-[22px] font-medium leading-snug text-[#0a1b33]">
              {about.mission}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {about.principles.map((p, i) => {
          const Icon = principleIcons[i] ?? Zap;
          return (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="group h-full rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all hover:border-slate-300 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0a152d] text-[#f7c600]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-[19px] font-semibold text-[#0a1b33]">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
