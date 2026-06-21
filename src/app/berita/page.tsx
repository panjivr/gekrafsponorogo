import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/ui/Reveal";
import NewsCard from "@/components/cards/NewsCard";
import { getNews } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Berita",
  description: "Kabar terkini, press release, dan pengumuman dari GEKRAFS Ponorogo.",
};

export const revalidate = 300;

export default async function BeritaPage() {
  const news = await getNews();
  return (
    <>
      <PageHero
        eyebrow="Media Center"
        title="Berita & Pengumuman"
        description="Kabar terkini dari gerakan ekonomi kreatif Ponorogo — kegiatan, program, dan kolaborasi."
        breadcrumb="Berita"
      />
      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n, i) => (
            <Reveal key={n.id} delay={(i % 3) * 0.07}>
              <NewsCard news={n} />
            </Reveal>
          ))}
        </div>
      </section>
      <div className="pb-4" />
    </>
  );
}
