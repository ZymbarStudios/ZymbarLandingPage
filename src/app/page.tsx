import { GridContainer } from "@/components/GridContainer";
import Header from "@/components/Header";
import { SectionHero } from "@/components/SectionHero";
import SectionPartners from "@/components/SectionPartners";
import SectionReasons from "@/components/SectionReasons";
import SectionTecExperiences from "@/components/SectionTecExperiences";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Header />
      <SectionHero/>
      <SectionPartners/>
      <SectionReasons/>
      <SectionTecExperiences/>
    </div>
  );
}