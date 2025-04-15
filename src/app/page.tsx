'use client';
import Footer from "@/app/Footer";
import Header from "@/app/Header";
import { SectionHero } from "@/app/SectionHero";
import SectionPartners from "@/app/SectionPartners";
import SectionProjectsDone from "@/app/SectionProjectsDone";
import SectionReasons from "@/app/SectionReasons";
import SectionTecExperiences from "@/app/SectionTecExperiences";
import { useRef } from "react";

export default function Home({stars}: {stars: number}) {  

  const footerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToFooter = () => {  
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col xl:gap-16 2xl:gap-16 gap-8">
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