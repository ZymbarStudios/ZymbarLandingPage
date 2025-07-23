'use client';
import Footer from "@/app/Footer";
import Header from "@/app/Header";
import { SectionHero } from "@/app/SectionHero";
import SectionPartners from "@/app/SectionPartners";
import SectionProjectsDone from "@/app/SectionProjectsDone";
import SectionReasons from "@/app/SectionReasons";
import SectionTecExperiences from "@/app/SectionTecExperiences";
import { useRef } from "react";

export default function Home() {

  const mobileFooterRef = useRef<HTMLDivElement | null>(null);
  const desktopFooterRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToFooter = () => {
    const mobileFooter = mobileFooterRef.current;
    const desktopFooter = desktopFooterRef.current;
    
    if (mobileFooter && window.getComputedStyle(mobileFooter).display !== 'none') {
      mobileFooter.scrollIntoView({ behavior: "smooth" });
    } else if (desktopFooter && window.getComputedStyle(desktopFooter).display !== 'none') {
      desktopFooter.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col xl:gap-16 2xl:gap-16 gap-8">
      <Header onClick={handleScrollToFooter} />
      <SectionHero onGetContact={handleScrollToFooter} onSeeProjects={handleScrollToProjects} />
      <SectionPartners />
      <SectionReasons onGetContact={handleScrollToFooter} />
      <SectionTecExperiences />
      <SectionProjectsDone onGetContact={handleScrollToFooter} projectsRef={projectsRef}/>
      <Footer mobileFooterRef={mobileFooterRef} desktopFooterRef={desktopFooterRef} />
    </div>
  );
}