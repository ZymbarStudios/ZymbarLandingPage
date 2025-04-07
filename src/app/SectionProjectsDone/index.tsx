'use client'
import { useLayoutEffect } from "react";
import { GridContainer } from "../../components/GridContainer";
import ItemProjectDone from "../../components/ItemProjectDone";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationDelay, animationDuration, animationFadeRightType } from "@/utils";

export default function SectionProjectsDone() {

    useLayoutEffect(() => {
        AOS.init({once: true});
    }, []);

    return (
        <section data-aos={animationFadeRightType} data-aos-duration={animationDuration} data-aos-delay={animationDelay}>
            <GridContainer classname="flex flex-row justify-around items-center w-5/6">
                <h1 className="josefinSans font-bold text-5xl text-center tracking-wide leading-snug">
                    Projetos Realizados
                </h1>
                <div className="flex flex-col items-center gap-10 max-w-lg">
                    <ItemProjectDone
                        title="ERP na WEB"
                        description="Funcionalidades: ordens de serviço, gestão de colaboradores, gestão operacional, entre outros..."
                    />
                    <ItemProjectDone
                        title="App Mobile para Colaborador"
                        description="Funcionalidades: batida de ponto com foto e geoilocalização, atualização de documentos, abertura de chamdos, entre outros..."
                    />
                    <ItemProjectDone
                        title="Sistema WEB para consultório"
                        description="Funcionalidades: gestão de pacientes, gestão de agenda, gestão de procedimentos."
                    />
                </div>
            </GridContainer>
        </section>
    );
}