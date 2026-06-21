import Link from "next/link";
import { ClipboardList, UserPen, GraduationCap, Rocket, ChevronRight, type LucideIcon } from "lucide-react";
import { onboarding } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const icons: LucideIcon[] = [ClipboardList, UserPen, GraduationCap, Rocket];

export default function Onboarding() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
      <SectionHeading
        eyebrow="Cara Bergabung"
        title="Empat langkah untuk mulai"
        subtitle="Dari volunteer menjadi penggerak ekonomi kreatif — prosesnya sederhana dan jelas."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {onboarding.map((step, i) => {
          const Icon = icons[i] ?? Rocket;
          return (
            <Reveal key={step.no} delay={i * 0.07}>
              <div className="group h-full rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all hover:border-slate-300 hover:shadow-[0_20px_50px_-22px_rgba(0,0,0,0.14)]">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#00aeef]/10 text-[#0087d1] transition-colors group-hover:bg-[#00aeef] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="font-stat text-[28px] font-bold text-slate-100">
                    0{step.no}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[17px] font-semibold text-[#0a1b33]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-8">
        <Link
          href="/daftar"
          className="inline-flex items-center gap-2 rounded-full bg-[#0a152d] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(10,21,45,0.25)] transition-transform hover:scale-[1.03] active:scale-[0.97]"
        >
          Mulai pendaftaran
          <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
        </Link>
      </Reveal>
    </section>
  );
}
