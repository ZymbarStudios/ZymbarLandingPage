'use client';
import { useLayoutEffect } from "react";
import { PrimaryButton } from "../../components/Buttons/primaryButton";
import { GridContainer } from "../../components/GridContainer";
import ItemReason from "../../components/ItemReason";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationDelay, animationDuration, animationFadeRightType } from "@/utils";

interface SectionReasonsProps {
    onGetContact: () => void;
}

export default function SectionReasons({onGetContact}: SectionReasonsProps) {

    useLayoutEffect(() => {
        AOS.init({once: true});
    }, []);

    return (
        <section data-aos={animationFadeRightType} data-aos-duration={animationDuration} data-aos-delay={animationDelay}>
            <GridContainer classname="flex flex-col items-center">
                <h1 className="josefinSans font-bold text-5xl text-center tracking-wide leading-snug  w-3/6 mb-10">
                    Por que fazer parceria com a Zymbar?
                </h1>
                <p className="text-center text-gray-1 w-4/6 text-md">
                    Com mais de 10 anos de experiência, não apenas criamos software, mas também criamos parcerias duradouras. Nós trabalhamos com você para criar soluções inovadoras e de alta qualidade que atendam às suas necessidades exclusivas e impulsionem o sucesso do seu negócio.
                </p>
                <div className="flex flex-row gap-40 mt-20">
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
                <PrimaryButton onClick={onGetContact} classname="mt-20">
                    Contatar Já!
                </PrimaryButton>
            </GridContainer>
        </section>
    );
}