'use client';
import { useLayoutEffect } from "react";
import { PrimaryButton } from "../../components/Buttons/primaryButton";
import { GridContainer } from "../../components/GridContainer";
import ItemReason from "../../components/ItemReason";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationDelay, animationDuration, animationFadeRightType } from "@/lib/utils";

interface SectionReasonsProps {
    onGetContact: () => void;
}

export default function SectionReasons({onGetContact}: SectionReasonsProps) {

    useLayoutEffect(() => {
        AOS.init({once: true});
    }, []);

    return (
        <section data-aos={animationFadeRightType} data-aos-duration={animationDuration} data-aos-delay={animationDelay}>
            <GridContainer classname="flex flex-col items-center gap-6 2xl:gap-0 xl:gap-0">
                <h1 className="josefinSans font-bold text-center tracking-wide leading-snug 2xl:mb-10 xl:mb-10 text-2xl 2xl:w-3/6 2xl:text-5xl xl:w-4/6 xl:text-5xl">
                    Por que fazer parceria com a Zymbar?
                </h1>
                <p className="text-center text-gray-1 px-6 2xl:w-4/6 xl:w-4/6 text-sm 2xl:text-lg xl:text-lg">
                    Com mais de 10 anos de experiência, não apenas criamos software, mas também criamos parcerias duradouras. Nós trabalhamos com você para criar soluções inovadoras e de alta qualidade que atendam às suas necessidades exclusivas e impulsionem o sucesso do seu negócio.
                </p>
                <div className="flex flex-col gap-12 border-b border-yellow-50 2xl:flex-row xl:flex-row 2xl:gap-40 xl:gap-40 2xl:mt-20 xl:mt-20">
                    <ItemReason
                        title="Desenvolvimento ágil"
                        description="Processo de desenvolvimento rápido, flexível e adaptável."
                    />
                    <ItemReason
                        title="Soluções Personalizadas"
                        description="Criamos software desenvolvido em torno dos seus objetivos de negócios"
                    />
                    <ItemReason
                        title="Escalável e à prova do futuro"
                        description="Tecnologia projetada para crescer com você."
                    />
                </div>
                <PrimaryButton onClick={onGetContact} classname="hidden 2xl:mt-20 xl:mt-20 lg:block xl:block 2xl:block">
                    Contatar Já!
                </PrimaryButton>
            </GridContainer>
        </section>
    );
}