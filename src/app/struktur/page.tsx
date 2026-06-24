import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Structure from "@/components/sections/Structure";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Struktur Organisasi GEKRAFS Ponorogo",
  description:
    "Struktur organisasi DPC GEKRAFS Ponorogo: dewan pendukung, pimpinan harian, delapan bidang kerja standar nasional, dan dasar hukum pembentukan Gerakan Ekonomi Kreatif Nasional di Ponorogo.",
};

export default function StrukturPage() {
  return (
    <>
      <PageHero
        eyebrow="Organisasi"
        title="Struktur DPC GEKRAFS Ponorogo"
        description="Menggabungkan legitimasi dewan pendukung, pimpinan harian yang menggerakkan roda organisasi, dan delapan bidang kerja standar nasional."
        breadcrumb="Struktur"
      />
      <Structure full />
      <CTA />
      <div className="pb-4" />
    </>
  );
}
