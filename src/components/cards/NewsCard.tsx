import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { News } from "@/lib/types";
import { formatDateID } from "@/lib/format";

export default function NewsCard({ news }: { news: News }) {
  return (
    <Link
      href={`/berita/${news.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm transition-all hover:border-slate-300 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.2)]"
    >
      <div
        className="relative h-40 w-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${news.cover_color}, ${news.cover_color}cc)`,
        }}
      >
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,#fff_0,transparent_40%),radial-gradient(circle_at_80%_60%,#fff_0,transparent_35%)]" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#0a1b33] backdrop-blur">
          {news.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time className="text-[12px] font-medium text-slate-400">
          {formatDateID(news.published_at)}
        </time>
        <h3 className="mt-2 font-display text-[17px] font-semibold leading-snug text-[#0a1b33] group-hover:text-[#0087d1]">
          {news.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-[13.5px] leading-relaxed text-slate-500">
          {news.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0a1b33]">
          Baca selengkapnya
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
