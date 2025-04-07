'use client';
import { useLayoutEffect } from "react";
import { PrimaryButton } from "../../components/Buttons/primaryButton";
import { SecondaryButton } from "../../components/Buttons/secondaryButton";
import { GridContainer } from "../../components/GridContainer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationDelay, animationDuration, animationFadeUpType } from "@/utils";

interface SectionHeroProps {
    onGetContact: () => void;
}


export function SectionHero({ onGetContact }: SectionHeroProps) {

    useLayoutEffect(() => {
        AOS.init({once: true});
    }, []);

    return (
        <section data-aos={animationFadeUpType} data-aos-duration={animationDuration} data-aos-delay={animationDelay}>
            <GridContainer classname="flex flex-col items-center gap-7">
                <h1 className="josefinSans font-bold text-5xl text-center tracking-wide leading-snug 2xl:w-3/6 xl:w-4/6">
                    Criando soluções tecnológicas que impulsionam o seu negócio, por um preço justo.
                </h1>
                <p className="text-center text-gray-1 w-2/6 text-md">
                    Pensamos em você, pequeno e médio empreendedor, para desenvolver o que falta para melhor sua estruturação e crescimento.
                </p>

                <div className="flex flex-row gap-6">
                    <SecondaryButton onClick={() => console.log('click')}>
                        Veja nosso trabalho
                    </SecondaryButton>
                    <PrimaryButton onClick={onGetContact}>
                        Entre em contato
                    </PrimaryButton>
                </div>
            </GridContainer>
        </section>
    );
}

const h1Style = `
    josefinSans
    font-bold 
    text-5xl 
    text-center 

    sm:text-6xl

    tracking-wide 
    leading-snug 
    w-3/6 
    mb-10
`;