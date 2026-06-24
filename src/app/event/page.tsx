import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/ui/Reveal";
import EventCard from "@/components/cards/EventCard";
import { getEvents } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Event & Kegiatan",
  description: "Kalender event & agenda kegiatan GEKRAFS Ponorogo — panggung pelaku kreatif, UMKM, kuliner, kriya, dan musik di Kabupaten Ponorogo, Jawa Timur.",
};

export const revalidate = 300;

export default async function EventPage() {
  const events = await getEvents();
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Event & Kegiatan"
        description="Setiap event adalah panggung bagi pelaku kreatif Ponorogo. Ikuti agenda terdekat dan jadilah bagian dari gerakan."
        breadcrumb="Event"
      />

      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-16">
        <h2 className="font-display text-[22px] font-medium tracking-tight text-[#0a1b33]">
          Akan datang
        </h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {upcoming.map((e, i) => (
            <Reveal key={e.id} delay={(i % 2) * 0.07}>
              <EventCard event={e} />
            </Reveal>
          ))}
          {upcoming.length === 0 && (
            <p className="text-[14px] text-slate-500">Belum ada agenda mendatang.</p>
          )}
        </div>

        {past.length > 0 && (
          <>
            <h2 className="mt-16 font-display text-[22px] font-medium tracking-tight text-[#0a1b33]">
              Telah berlangsung
            </h2>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {past.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </>
        )}
      </section>
      <div className="pb-4" />
    </>
  );
}
