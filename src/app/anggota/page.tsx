import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/ui/Reveal";
import { getMembers } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Direktori Anggota",
  description: "Direktori pelaku ekonomi kreatif yang tergabung dalam GEKRAFS Ponorogo.",
};

export const revalidate = 300;

export default async function AnggotaPage() {
  const members = await getMembers();

  return (
    <>
      <PageHero
        eyebrow="Keanggotaan"
        title="Direktori Anggota"
        description="Jaringan pelaku ekonomi kreatif Ponorogo lintas subsektor. Direktori ini terus bertumbuh seiring bergabungnya anggota baru."
        breadcrumb="Anggota"
      />

      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <Reveal key={m.id} delay={(i % 3) * 0.06}>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition-all hover:border-slate-300">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#00aeef] to-[#0087d1] font-display text-[18px] font-semibold text-white">
                  {m.initials || m.name.slice(0, 2).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-[16px] font-semibold text-[#0a1b33]">
                    {m.name}
                  </h3>
                  <p className="text-[13px] text-slate-500">
                    {m.role} · {m.subsector}
                  </p>
                  <p className="mt-0.5 inline-flex items-center gap-1 text-[12px] text-slate-400">
                    <MapPin className="h-3 w-3" />
                    {m.district}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-slate-200/70 bg-slate-50 p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-[20px] font-semibold text-[#0a1b33]">
                Belum terdaftar?
              </h3>
              <p className="mt-1 text-[14px] text-slate-500">
                Bergabunglah dan tampilkan profil kreatifmu di direktori GEKRAFS Ponorogo.
              </p>
            </div>
            <Link
              href="/daftar"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-br from-[#00aeef] to-[#0087d1] px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.97]"
            >
              Daftar sekarang
              <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
            </Link>
          </div>
        </Reveal>
      </section>
      <div className="pb-4" />
    </>
  );
}
