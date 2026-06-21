import { CheckCircle2, ShieldCheck } from "lucide-react";
import { about } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="tentang" className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
      <SectionHeading
        eyebrow="Tentang GEKRAFS"
        title={about.what.title}
        subtitle={about.what.body}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {about.what.points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <div className="group h-full rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all hover:border-slate-300 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#00aeef]/10 text-[#0087d1]">
                <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-[18px] font-semibold text-[#0a1b33]">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Legality */}
      <Reveal className="mt-8">
        <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f7c600]/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a7b00]">
                <ShieldCheck className="h-4 w-4" />
                {about.legality.title}
              </div>
              <h3 className="mt-4 font-display text-[26px] sm:text-[30px] font-medium tracking-tight text-[#0a1b33]">
                {about.legality.subtitle}
              </h3>
            </div>
            <dl className="grid flex-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:max-w-xl">
              {about.legality.items.map((item) => (
                <div key={item.label} className="border-l-2 border-[#00aeef]/30 pl-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-[14px] font-medium text-[#0a1b33]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
