import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getNews, getEvents } from "@/lib/queries";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import NewsCard from "@/components/cards/NewsCard";
import EventCard from "@/components/cards/EventCard";

export default async function NewsEventsPreview() {
  const [news, events] = await Promise.all([getNews(3), getEvents(3)]);

  return (
    <section id="berita" className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Media Center"
          title="Berita & Kegiatan Terbaru"
          subtitle="Kabar terkini dari gerakan ekonomi kreatif Ponorogo."
        />
        <Reveal>
          <Link
            href="/berita"
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0a1b33] shadow-sm transition-all hover:border-slate-300"
          >
            Semua berita
            <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {news.map((n, i) => (
          <Reveal key={n.id} delay={i * 0.07}>
            <NewsCard news={n} />
          </Reveal>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <h3 className="font-display text-[24px] font-medium tracking-tight text-[#0a1b33]">
            Agenda mendatang
          </h3>
        </Reveal>
        <Reveal>
          <Link
            href="/event"
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0a1b33] shadow-sm transition-all hover:border-slate-300"
          >
            Semua event
            <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
          </Link>
        </Reveal>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {events.map((e, i) => (
          <Reveal key={e.id} delay={i * 0.07}>
            <EventCard event={e} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
