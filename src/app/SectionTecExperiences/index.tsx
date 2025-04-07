'use client'
import { useLayoutEffect } from "react";
import { GridContainer } from "../../components/GridContainer";
import ItemTecSolution from "../../components/ItemTecSolution";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationDelay, animationDuration, animationFadeRightType } from "@/utils";

export default function SectionTecExperiences() {

    useLayoutEffect(() => {
        AOS.init({once: true});
    }, []);

    return (
        <section data-aos={animationFadeRightType} data-aos-duration={animationDuration} data-aos-delay={animationDelay}>
            <GridContainer classname="flex flex-col items-center gap-6">
                <h1 className="josefinSans font-bold text-5xl text-center tracking-wide leading-snug  w-3/6 mb-10">
                    Nossa Experiência
                </h1>
                <div className="flex flex-row justify-center 2xl:gap-40 xl:gap-20">
                    <ItemTecSolution
                        title="Apps Mobile"
                        description="Para empresas que precisam de um app para aparelhos móveis como : celulares e tablets."
                    />
                    <ItemTecSolution
                        title="Apps Web"
                        description="Sistema que executa em páginas web. Podendo ser utilizados em dispositivos mobile ou computador."
                    />
                    <ItemTecSolution
                        title="Apps Desktop"
                        description="Solução de sistema para utilização no computador."
                    />
                </div>
            </GridContainer>
        </section>
    );
}