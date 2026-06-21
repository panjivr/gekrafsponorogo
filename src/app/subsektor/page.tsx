import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Subsectors from "@/components/sections/Subsectors";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "17 Subsektor Ekraf",
  description:
    "Tujuh belas subsektor ekonomi kreatif yang dinaungi GEKRAFS Ponorogo — dari kuliner hingga periklanan.",
};

export default function SubsektorPage() {
  return (
    <>
      <PageHero
        eyebrow="Ruang Gerak Kita"
        title="17 Subsektor Ekonomi Kreatif"
        description="Setiap subsektor punya rumahnya di GEKRAFS — wadah teknis para pelaku untuk berkembang, berkolaborasi, dan naik kelas."
        breadcrumb="17 Subsektor"
      />
      <Subsectors withHeading={false} />
      <CTA />
      <div className="pb-4" />
    </>
  );
}
