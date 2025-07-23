'use client';
import { useLayoutEffect } from "react";
import { PrimaryButton } from "../../components/Buttons/primaryButton";
import { SecondaryButton } from "../../components/Buttons/secondaryButton";
import { GridContainer } from "../../components/GridContainer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationDelay, animationDuration, animationFadeUpType } from "@/lib/utils";

interface SectionHeroProps {
    onGetContact: () => void;
    onSeeProjects: () => void;
}


export function SectionHero({ onGetContact, onSeeProjects }: SectionHeroProps) {

    useLayoutEffect(() => {
        AOS.init({once: true});
    }, []);

    return (
        <section data-aos={animationFadeUpType} data-aos-duration={animationDuration} data-aos-delay={animationDelay}>
            <GridContainer classname="flex flex-col items-center gap-5 2xl:gap-7 xl:gap-7">
                <h1 className="josefinSans font-bold text-[2rem] text-center tracking-wide leading-snug 2xl:w-3/6 2xl:text-5xl xl:w-4/6 xl:text-5xl">
                    Criando soluções tecnológicas que impulsionam o seu negócio.
                </h1>
                <p className="text-center text-gray-1 px-4 2xl:w-2/6 xl:w-3/6 text-sm 2xl:text-lg xl:text-lg">
                    Pensamos em você, pequeno e médio empreendedor, para desenvolver o que falta para melhor sua estruturação e crescimento.
                </p>

                <div className="flex flex-row gap-6">
                    <SecondaryButton onClick={onSeeProjects} classname="hidden xd:block lg:block xl:block 2xl:block">
                        Veja nosso trabalho
                    </SecondaryButton>
                    <PrimaryButton onClick={onGetContact}>
                        Vamos construir algo ótimo!
                    </PrimaryButton>
                </div>
            </GridContainer>
        </section>
    );
}