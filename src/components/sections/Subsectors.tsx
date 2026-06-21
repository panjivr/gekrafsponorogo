import { subsectors } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import SubsectorIcon from "@/components/ui/SubsectorIcon";
import Reveal from "@/components/ui/Reveal";

export default function Subsectors({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="subsektor" className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
      {withHeading && (
        <SectionHeading
          eyebrow="Ruang Gerak Kita"
          title="17 Subsektor Ekonomi Kreatif"
          subtitle="Setiap subsektor punya rumahnya di GEKRAFS — wadah teknis bagi para pelaku untuk tumbuh dan berkolaborasi."
        />
      )}

      <div className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
        {subsectors.map((s, i) => (
          <Reveal key={s.no} delay={(i % 4) * 0.05}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-[0_18px_44px_-22px_rgba(0,0,0,0.18)]">
              <span className="pointer-events-none absolute right-4 top-3 font-stat text-[34px] font-bold text-slate-100 transition-colors group-hover:text-[#00aeef]/15">
                {String(s.no).padStart(2, "0")}
              </span>
              <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-[#00aeef]/10 text-[#0087d1] transition-colors group-hover:bg-[#00aeef] group-hover:text-white">
                <SubsectorIcon name={s.icon} className="h-5.5 w-5.5" />
              </div>
              <h3 className="relative mt-4 font-display text-[15px] font-semibold leading-tight text-[#0a1b33]">
                {s.name}
              </h3>
              <p className="relative mt-1.5 text-[12.5px] leading-snug text-slate-500">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
