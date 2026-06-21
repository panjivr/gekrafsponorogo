import { ArrowUpRight, Globe } from "lucide-react";
import { nationalNews, org } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

/**
 * Supplementary strip showing GEKRAFS Pusat (national) updates — links out to
 * official sources to signal that local activity connects to the national movement.
 * Intentionally secondary to local Berita.
 */
export default function NationalNews() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-16">
      <Reveal>
        <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-[#00aeef] to-[#0087d1] p-7 text-white shadow-[0_30px_80px_-32px_rgba(0,135,209,0.5)] sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] backdrop-blur">
                <Globe className="h-3.5 w-3.5" />
                Terhubung dengan GEKRAFS Nasional
              </span>
              <h2 className="mt-3 font-display text-[22px] sm:text-[26px] font-medium leading-tight tracking-tight">
                Gerak kita bagian dari gerakan nasional
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/80">
                Kabar pilihan dari GEKRAFS Pusat — kegiatan Ponorogo selaras
                dengan arah ekonomi kreatif nasional.
              </p>
              <a
                href={org.official}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0087d1] transition-transform hover:scale-[1.03]"
              >
                Kunjungi gekrafs.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <ul className="flex-1 space-y-2.5 lg:max-w-md">
              {nationalNews.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur transition-colors hover:bg-white/20"
                  >
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/15">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[13.5px] font-semibold leading-snug">
                        {n.title}
                      </span>
                      <span className="mt-0.5 block text-[11px] text-white/60">
                        {n.source} · {n.date}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
