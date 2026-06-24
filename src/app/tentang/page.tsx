import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import Transition from "@/components/sections/Transition";
import Membership from "@/components/sections/Membership";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Tentang GEKRAFS Ponorogo",
  description:
    "Tentang GEKRAFS Ponorogo — sejarah, legalitas, visi, misi, dan prinsip Gerakan Ekonomi Kreatif Nasional DPC Ponorogo, wadah resmi pelaku ekonomi kreatif & UMKM di Ponorogo, Jawa Timur.",
};

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang"
        title="Wadah resmi pegiat ekonomi kreatif Ponorogo"
        description="GEKRAFS adalah perkumpulan berbadan hukum yang menghimpun dan membina pegiat ekonomi kreatif nasional — independen dan non-partai sejak 2019."
        breadcrumb="Tentang"
      />
      <About />
      <VisionMission />
      <Transition />
      <Membership />
      <CTA />
      <div className="pb-4" />
    </>
  );
}
