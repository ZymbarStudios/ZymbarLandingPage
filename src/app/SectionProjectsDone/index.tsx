'use client'
import { useLayoutEffect } from "react";
import { GridContainer } from "../../components/GridContainer";
import ItemProjectDone from "../../components/ItemProjectDone";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationDelay, animationDuration, animationFadeRightType } from "@/utils";
import ItemReason from "@/components/ItemReason";

export default function SectionProjectsDone() {

    useLayoutEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section data-aos={animationFadeRightType} data-aos-duration={animationDuration} data-aos-delay={animationDelay}>
            <GridContainer classname="flex flex-col justify-around items-center gap-4">
                <h1 className="josefinSans font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-center tracking-wide leading-snug">
                    Projetos Realizados
                </h1>
                <div className="flex flex-col gap-12 border-b border-yellow-50 lg:flex-row xl:flex-row 2xl:flex-row lg:gap-28 xl:gap-40 2xl:gap-40 lg:mt-12 xl:mt-20 2xl:mt-20">
                    <ItemReason
                        title="ERP na WEB"
                        description="Funcionalidades: ordens de serviço, gestão de colaboradores, gestão operacional, entre outros..."
                    />
                    <ItemReason
                        title="App Mobile para Colaborador"
                        description="Funcionalidades: batida de ponto com foto e geoilocalização, atualização de documentos, abertura de chamdos, entre outros..."
                    />
                    <ItemReason
                        title="Sistema WEB para consultório"
                        description="Funcionalidades: gestão de pacientes, gestão de agenda, gestão de procedimentos."
                    />
                </div>

            </GridContainer>
        </section>
    );
}