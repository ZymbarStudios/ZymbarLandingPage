import { GridContainer } from "@/components/GridContainer";
import Header from "@/components/Header";
import { SectionHero } from "@/components/SectionHero";
import SectionTecSolutions from "@/components/SectionTecSolutions";

export default function Home() {
  return (
    <GridContainer >
      <Header />
      <SectionHero/>
      <SectionTecSolutions/>
    </GridContainer>
  );
}