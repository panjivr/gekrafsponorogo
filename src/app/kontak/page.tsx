import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Instagram, MessageCircle, ChevronRight } from "lucide-react";
import { org } from "@/lib/content";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/ui/Reveal";
import { TikTokIcon } from "@/components/site/icons";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi GEKRAFS Ponorogo untuk kemitraan, kolaborasi, dan informasi keanggotaan.",
};

const channels = [
  { icon: Mail, label: "Email", value: org.email, href: `mailto:${org.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: org.whatsapp, href: "https://wa.me/6281200000000" },
  { icon: MapPin, label: "Lokasi", value: org.address, href: undefined },
];

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Hubungi Kami"
        title="Mari berkolaborasi"
        description="Untuk kemitraan, sponsorship, kolaborasi event, atau pertanyaan keanggotaan — tim GEKRAFS Ponorogo siap terhubung denganmu."
        breadcrumb="Kontak"
      />

      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {channels.map((c, i) => {
            const Icon = c.icon;
            const inner = (
              <div className="h-full rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all hover:border-slate-300 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.16)]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#00aeef]/10 text-[#0087d1]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {c.label}
                </h3>
                <p className="mt-1.5 font-display text-[17px] font-semibold text-[#0a1b33]">
                  {c.value}
                </p>
              </div>
            );
            return (
              <Reveal key={c.label} delay={i * 0.07}>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <div className="relative overflow-hidden rounded-[36px] bg-[#0a152d] p-8 text-white sm:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle,#00aeef,transparent 70%)" }}
            />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-[24px] sm:text-[30px] font-medium tracking-tight">
                  Ikuti gerakan kami
                </h2>
                <p className="mt-2 text-[14px] text-white/60">
                  Dapatkan kabar terbaru kegiatan dan program ekraf Ponorogo.
                </p>
                <div className="mt-5 flex items-center gap-2.5">
                  <a
                    href={org.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={org.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <TikTokIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <Link
                href="/daftar"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0a152d] transition-transform hover:scale-[1.03] active:scale-[0.97]"
              >
                Gabung GEKRAFS
                <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
      <div className="pb-4" />
    </>
  );
}
