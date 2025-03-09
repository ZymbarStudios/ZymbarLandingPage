'use client';
import { useLayoutEffect } from "react";
import { PrimaryButton } from "../Buttons/primaryButton";
import { SecondaryButton } from "../Buttons/secondaryButton";
import { GridContainer } from "../GridContainer";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SectionHeroProps {
    onGetContact: () => void;
}


export function SectionHero({onGetContact}: SectionHeroProps) {

    useLayoutEffect(() => {
            AOS.init();
        }, []);
        
    return (
        <section data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
            <GridContainer classname="flex flex-col items-center">
                <h1 className="josefinSans font-bold text-5xl text-center tracking-wide leading-snug  w-3/6 mb-10">
                    Criando soluções tecnológicas que impulsionam o seu negócio, por um preço justo.
                </h1>
                <p className="text-center text-gray-1 w-2/6 text-md">
                    Pensamos em você, pequeno e médio empreendedor, para desenvolver o que falta para melhor sua estruturação e crescimento.
                </p>

                <div className="flex flex-row mt-16 gap-6">
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