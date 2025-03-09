'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SectionHero } from "@/components/SectionHero";
import SectionPartners from "@/components/SectionPartners";
import SectionProjectsDone from "@/components/SectionProjectsDone";
import SectionReasons from "@/components/SectionReasons";
import SectionTecExperiences from "@/components/SectionTecExperiences";
import { useRef } from "react";

export default function Home({stars}: {stars: number}) {  

  const footerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToFooter = () => {  
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-16">
      <Header onClick={handleScrollToFooter}/>
      <SectionHero onGetContact={handleScrollToFooter}/>
      <SectionPartners/>
      <SectionReasons onGetContact={handleScrollToFooter}/>
      <SectionTecExperiences/>
      <SectionProjectsDone/>
      <Footer footerRef={footerRef}/>
    </div>
  );
}