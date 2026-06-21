import { Users, Crown, Gavel, ChevronRight } from "lucide-react";
import { structure, divisions } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Structure({ full = false }: { full?: boolean }) {
  return (
    <section id="struktur" className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
      <SectionHeading
        eyebrow="Struktur DPC Ponorogo"
        title="Legitimasi, kepemimpinan & bidang kerja"
        subtitle="Struktur yang menggabungkan dewan pendukung strategis, pimpinan harian, dan delapan bidang kerja standar nasional."
      />

      {/* Dewan Pendukung */}
      <Reveal className="mt-12">
        <div className="flex items-center gap-2.5">
          <Users className="h-5 w-5 text-[#0087d1]" />
          <h3 className="font-display text-[18px] font-semibold text-[#0a1b33]">
            {structure.support.title}
          </h3>
          <span className="text-[13px] text-slate-400">— {structure.support.subtitle}</span>
        </div>
      </Reveal>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {structure.support.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <span className="font-stat text-[13px] font-bold text-[#00aeef]">0{i + 1}</span>
              <h4 className="mt-2 font-display text-[16px] font-semibold text-[#0a1b33]">
                {item.title}
              </h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Pimpinan Harian */}
      <Reveal className="mt-12">
        <div className="flex items-center gap-2.5">
          <Crown className="h-5 w-5 text-[#9a7b00]" />
          <h3 className="font-display text-[18px] font-semibold text-[#0a1b33]">
            {structure.daily.title}
          </h3>
          <span className="text-[13px] text-slate-400">— {structure.daily.subtitle}</span>
        </div>
      </Reveal>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {structure.daily.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
              <h4 className="font-display text-[16px] font-semibold text-[#0a1b33]">
                {item.title}
              </h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* 8 bidang kerja */}
      <Reveal className="mt-12">
        <h3 className="font-display text-[18px] font-semibold text-[#0a1b33]">
          Delapan bidang kerja standar nasional
        </h3>
      </Reveal>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {divisions.map((d, i) => (
          <Reveal key={d.no} delay={(i % 4) * 0.05}>
            <div className="group flex h-full items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition-all hover:border-slate-300">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#0a152d] font-stat text-[13px] font-bold text-white">
                {d.no}
              </span>
              <span className="text-[14px] font-medium leading-snug text-[#0a1b33]">
                {d.title}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      {full && (
        <>
          <Reveal className="mt-12">
            <div className="flex items-center gap-2.5">
              <Gavel className="h-5 w-5 text-[#0087d1]" />
              <h3 className="font-display text-[18px] font-semibold text-[#0a1b33]">
                {structure.legalBasis.title}
              </h3>
              <span className="text-[13px] text-slate-400">
                — {structure.legalBasis.subtitle}
              </span>
            </div>
          </Reveal>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {structure.legalBasis.steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-[#0a1b33]">
                    <span className="font-display text-[17px] font-semibold">{s.step}</span>
                    {i < structure.legalBasis.steps.length - 1 && (
                      <ChevronRight className="h-4 w-4 text-slate-300" />
                    )}
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
