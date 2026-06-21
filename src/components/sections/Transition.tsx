import { ArrowRight, Sparkles } from "lucide-react";
import { transition } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function Transition() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0087d1]">
            <Sparkles className="h-4 w-4 text-[#f7c600]" />
            Kenapa Pemuda Grebeg Suro
          </span>
          <h2 className="mt-3 font-display text-[28px] sm:text-[36px] font-medium tracking-tight leading-[1.1] text-[#0a1b33]">
            {transition.title}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
            {transition.body}
          </p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0a152d] px-4 py-2 text-[13px] font-semibold text-white">
            Dari panitia acara
            <ArrowRight className="h-4 w-4 text-[#f7c600]" />
            penggerak ekraf
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {transition.reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
                  <span className="font-stat text-[15px] font-bold text-[#00aeef]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-[16px] font-semibold leading-snug text-[#0a1b33]">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
