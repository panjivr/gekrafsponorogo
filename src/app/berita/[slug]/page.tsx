import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getNews, getNewsBySlug } from "@/lib/queries";
import { formatDateID } from "@/lib/format";
import NewsCard from "@/components/cards/NewsCard";

export const revalidate = 300;

export async function generateStaticParams() {
  const news = await getNews();
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);
  if (!news) return { title: "Berita tidak ditemukan" };
  return { title: news.title, description: news.excerpt };
}

export default async function BeritaDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);
  if (!news) notFound();

  const related = (await getNews()).filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-5 sm:px-8 pt-14">
      <Link
        href="/berita"
        className="inline-flex items-center gap-1 text-[13px] font-semibold text-slate-500 hover:text-[#0a1b33]"
      >
        <ChevronLeft className="h-4 w-4" />
        Kembali ke Berita
      </Link>

      <div className="mt-6 flex items-center gap-3">
        <span
          className="rounded-full px-3 py-1 text-[11px] font-semibold text-white"
          style={{ background: news.cover_color }}
        >
          {news.category}
        </span>
        <time className="text-[13px] text-slate-400">{formatDateID(news.published_at)}</time>
      </div>

      <h1 className="mt-4 font-display text-[30px] sm:text-[40px] font-medium leading-[1.1] tracking-tight text-[#0a1b33]">
        {news.title}
      </h1>
      <p className="mt-3 text-[13px] font-medium text-slate-500">Oleh {news.author}</p>

      <div
        className="mt-8 h-56 w-full overflow-hidden rounded-3xl"
        style={{ background: `linear-gradient(135deg, ${news.cover_color}, ${news.cover_color}cc)` }}
      />

      <div className="prose prose-slate mt-8 max-w-none">
        <p className="text-[16px] font-medium leading-relaxed text-[#0a1b33]">{news.excerpt}</p>
        <p className="mt-5 text-[15px] leading-relaxed text-slate-600">{news.content}</p>
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-slate-200/70 pt-10">
          <h2 className="font-display text-[22px] font-medium tracking-tight text-[#0a1b33]">
            Berita lainnya
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((n) => (
              <NewsCard key={n.id} news={n} />
            ))}
          </div>
        </div>
      )}
      <div className="pb-4" />
    </article>
  );
}
