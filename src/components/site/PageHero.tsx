import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 bg-white">
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle,#00aeef,transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full opacity-[0.1] blur-3xl"
        style={{ background: "radial-gradient(circle,#f7c600,transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-20">
        <Reveal>
          <nav className="flex items-center gap-1.5 text-[12px] font-medium text-slate-400">
            <Link href="/" className="hover:text-[#0a1b33]">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#0a1b33]">{breadcrumb ?? title}</span>
          </nav>
          {eyebrow && (
            <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0087d1]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f7c600]" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 max-w-3xl font-display text-[34px] sm:text-[46px] font-medium tracking-tight leading-[1.05] text-[#0a1b33]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-500">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
