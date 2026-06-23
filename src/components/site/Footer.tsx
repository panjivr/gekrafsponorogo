import Link from "next/link";
import { Instagram, Mail, MapPin, ChevronRight } from "lucide-react";
import { org, nav } from "@/lib/content";
import { Logo } from "./Logo";
import { TikTokIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-slate-500">
              {org.description}
            </p>
            <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#0087d1]">
              {org.hashtag}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-slate-600 hover:text-[#0a1b33] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3 text-[14px] text-slate-600">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#00aeef]" />
                <a href={`mailto:${org.email}`} className="hover:text-[#0a1b33]">
                  {org.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#00aeef]" />
                {org.address}
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={org.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram GEKRAFS Ponorogo"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 hover:text-[#0a1b33] hover:border-slate-300 transition-colors"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href={org.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok GEKRAFS Ponorogo"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 hover:text-[#0a1b33] hover:border-slate-300 transition-colors"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <Link
                href="/daftar"
                className="ml-1 inline-flex items-center gap-1 rounded-full bg-gradient-to-br from-[#00aeef] to-[#0087d1] px-5 py-2.5 text-[13px] font-semibold text-white"
              >
                Daftar
                <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.25} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-7 text-[13px] text-slate-400 sm:flex-row">
          <p>
            © {year} {org.longName}.
          </p>
          <p className="flex items-center gap-3">
            <span>
              {org.domain} · {org.tagline}
            </span>
            <Link href="/admin" className="text-slate-400 hover:text-[#0a1b33]">
              Panel Admin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
