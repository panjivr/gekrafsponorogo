import { Check, KeyRound } from "lucide-react";
import { membership } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Membership() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
      <SectionHeading
        eyebrow="Syarat & Hak Anggota"
        title="Apa yang dipenuhi, apa yang didapat"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#00aeef]/10 text-[#0087d1]">
                <Check className="h-5.5 w-5.5" strokeWidth={2} />
              </span>
              <h3 className="font-display text-[19px] font-semibold text-[#0a1b33]">
                Syarat Anggota
              </h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {membership.requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[14px] text-slate-600">
                  <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#00aeef]" strokeWidth={2.25} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.07}>
          <div className="h-full rounded-3xl border border-slate-200/70 bg-[#0a152d] p-8 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-[#f7c600]">
                <KeyRound className="h-5.5 w-5.5" strokeWidth={2} />
              </span>
              <h3 className="font-display text-[19px] font-semibold">Hak Anggota</h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {membership.rights.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[14px] text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f7c600]" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
