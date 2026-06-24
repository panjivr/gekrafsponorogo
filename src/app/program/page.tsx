import type { Metadata } from "next";
import { Calendar, Sparkles, Building } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Roadmap from "@/components/sections/Roadmap";
import Onboarding from "@/components/sections/Onboarding";
import CTA from "@/components/sections/CTA";
import { program, divisions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Program & Bidang Kerja GEKRAFS Ponorogo",
  description:
    "Program GEKRAFS Ponorogo berbasis event untuk menggerakkan ekonomi kreatif & UMKM Ponorogo: delapan bidang kerja standar nasional, departemen subsektor, dan roadmap aksi.",
};

export default function ProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Program"
        title="Menggerakkan ekraf lewat event & kolaborasi"
        description="Program GEKRAFS Ponorogo menjadikan event sebagai mesin penggerak — didukung delapan bidang kerja standar nasional dan departemen untuk tiap subsektor."
        breadcrumb="Program"
      />

      {/* Event engine */}
      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200/70 bg-gradient-to-br from-[#00aeef] to-[#0087d1] p-8 text-white shadow-[0_40px_100px_-30px_rgba(0,135,209,0.5)] sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#f7c600]/30 blur-3xl" />
            <div className="relative max-w-2xl">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                <Calendar className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h2 className="mt-5 font-display text-[26px] sm:text-[34px] font-medium leading-tight tracking-tight">
                {program.engine.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/85">
                {program.engine.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {program.engine.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/15 px-4 py-1.5 text-[13px] font-semibold backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 8 bidang kerja */}
      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
        <SectionHeading
          eyebrow="Standar Nasional"
          title="Delapan bidang kerja"
          subtitle="Kerangka kerja yang sama di seluruh Indonesia, memastikan organisasi bergerak terstruktur dan terukur."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {divisions.map((d, i) => (
            <Reveal key={d.no} delay={(i % 4) * 0.05}>
              <div className="group h-full rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.16)]">
                <div className="flex items-center justify-between">
                  <Sparkles className="h-5 w-5 text-[#0087d1]" />
                  <span className="font-stat text-[26px] font-bold text-slate-100 group-hover:text-[#00aeef]/20">
                    0{d.no}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[16px] font-semibold leading-snug text-[#0a1b33]">
                  {d.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Departemen subsektor */}
      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
        <SectionHeading
          eyebrow="Departemen Subsektor Ekraf"
          title="Setiap subsektor punya rumahnya"
          subtitle="Di samping delapan bidang kerja, tiap subsektor memiliki departemen tersendiri sebagai wadah teknis para pelaku."
        />
        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-2.5">
            {program.departments.map((dep) => (
              <span
                key={dep}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-4 py-2 text-[13px] font-semibold text-[#0a1b33] shadow-sm"
              >
                <Building className="h-3.5 w-3.5 text-[#00aeef]" />
                {dep}
              </span>
            ))}
            <span className="inline-flex items-center rounded-full bg-[#0a152d] px-4 py-2 text-[13px] font-semibold text-white">
              + subsektor lainnya
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {program.roles.map((r, i) => (
            <Reveal key={r.field} delay={i * 0.07}>
              <div
                className={`h-full rounded-2xl border p-6 shadow-sm ${
                  r.home
                    ? "border-[#00aeef]/30 bg-[#00aeef]/[0.06]"
                    : "border-slate-200/70 bg-white"
                }`}
              >
                {r.home && (
                  <span className="inline-block rounded-full bg-[#00aeef] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    Rumah Utama
                  </span>
                )}
                <h3 className="mt-3 font-display text-[16px] font-semibold text-[#0a1b33]">
                  {r.field}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Roadmap />
      <Onboarding />
      <CTA />
      <div className="pb-4" />
    </>
  );
}
