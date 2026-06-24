import type { Metadata } from "next";
import { onboarding, membership } from "@/lib/content";
import PageHero from "@/components/site/PageHero";
import RegisterForm from "@/components/forms/RegisterForm";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Daftar Anggota GEKRAFS Ponorogo",
  description:
    "Daftar jadi anggota GEKRAFS Ponorogo — gabung Gerakan Ekonomi Kreatif Nasional DPC Ponorogo. Untuk pelaku ekonomi kreatif, UMKM, dan komunitas kreatif di Ponorogo, Jawa Timur.",
};

export default function DaftarPage() {
  return (
    <>
      <PageHero
        eyebrow="Gabung GEKRAFS"
        title="Daftar jadi penggerak ekraf Ponorogo"
        description="Isi formulir di bawah untuk memulai. Empat langkah sederhana memisahkanmu dari gerakan ekonomi kreatif Ponorogo."
        breadcrumb="Daftar Anggota"
      />

      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Sidebar: steps + rights */}
          <aside className="lg:col-span-5">
            <h2 className="font-display text-[20px] font-semibold text-[#0a1b33]">
              Langkah pendaftaran
            </h2>
            <ol className="mt-6 space-y-5">
              {onboarding.map((step) => (
                <li key={step.no} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0a152d] font-stat text-[14px] font-bold text-white">
                    {step.no}
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold text-[#0a1b33]">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-slate-500">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-2xl border border-slate-200/70 bg-slate-50 p-6">
              <h3 className="font-display text-[15px] font-semibold text-[#0a1b33]">
                Yang kamu dapatkan
              </h3>
              <ul className="mt-4 space-y-2.5">
                {membership.rights.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00aeef]" strokeWidth={2.25} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm sm:p-9">
              <h2 className="font-display text-[22px] font-semibold text-[#0a1b33]">
                Formulir pendaftaran
              </h2>
              <p className="mt-1.5 text-[14px] text-slate-500">
                Kolom bertanda <span className="text-[#00aeef]">*</span> wajib diisi.
              </p>
              <div className="mt-7">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-4" />
    </>
  );
}
