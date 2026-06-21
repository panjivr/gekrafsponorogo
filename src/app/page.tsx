import Hero from "@/components/hero/Hero";
import Marquee from "@/components/marquee/Marquee";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import Subsectors from "@/components/sections/Subsectors";
import Transition from "@/components/sections/Transition";
import Structure from "@/components/sections/Structure";
import Potensi from "@/components/sections/Potensi";
import Roadmap from "@/components/sections/Roadmap";
import NewsEventsPreview from "@/components/sections/NewsEventsPreview";
import Onboarding from "@/components/sections/Onboarding";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <div className="pt-6">
        <Hero />
        <Marquee />
      </div>
      <Stats />
      <About />
      <VisionMission />
      <Subsectors />
      <Transition />
      <Structure />
      <Potensi />
      <Roadmap />
      <NewsEventsPreview />
      <Onboarding />
      <CTA />
      <div className="pb-4" />
    </>
  );
}
