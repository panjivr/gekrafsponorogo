import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { org, about } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[40px] bg-[#0a152d] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle,#00aeef,transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle,#f7c600,transparent 70%)" }}
          />
          <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00aeef]">
            Saatnya Bergerak Bersama
          </p>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-[32px] font-medium leading-[1.1] tracking-tight sm:text-[44px]">
            Dari volunteer menjadi penggerak ekonomi kreatif.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[15px] text-white/60">
            Ponorogo kreatif dimulai dari kita.
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/daftar"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#0a152d] transition-transform hover:scale-[1.03] active:scale-[0.97]"
            >
              Gabung GEKRAFS Ponorogo
              <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
            </Link>
            <Link
              href="/program"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Lihat Program
            </Link>
          </div>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-white/70">
            {about.principles.map((p) => (
              <span key={p.title} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f7c600]" />
                {p.title}
              </span>
            ))}
          </div>
          <p className="relative mt-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#00aeef]">
            {org.hashtag}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
