import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PriceSection } from "@/components/sections/PriceSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { BuySection } from "@/components/sections/BuySection";
import { UtilityRoadmap } from "@/components/sections/UtilityRoadmap";
import { Transparency } from "@/components/sections/Transparency";
import { Footer } from "@/components/sections/Footer";

export default function VillageLanding() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <PriceSection />
      <ImpactSection />
      <BuySection />
      <UtilityRoadmap />
      <Transparency />
      <Footer />
    </div>
  );
}
