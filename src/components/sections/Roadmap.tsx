import { roadmap } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Roadmap() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
      <SectionHeading
        eyebrow="Roadmap Pembentukan & Aksi"
        title="Empat langkah menuju gerak"
        subtitle="DPC Ponorogo resmi terbentuk dan langsung bergerak lewat event perdana."
      />

      <div className="relative mt-14">
        {/* connector line */}
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.08}>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-stat text-[18px] font-bold text-[#0a1b33] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.18)] ring-1 ring-slate-200">
                  {step.no}
                </div>
                <h3 className="mt-5 font-display text-[18px] font-semibold text-[#0a1b33]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
