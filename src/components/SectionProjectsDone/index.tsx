import { GridContainer } from "../GridContainer";
import ItemProjectDone from "./ItemProjectDone";

export default function SectionProjectsDone() {
    return (
        <section>
            <GridContainer classname="flex flex-row items-center">
                <h1 className="josefinSans font-bold text-5xl text-center tracking-wide leading-snug  w-3/6 mb-10">
                    Projetos Realizados
                </h1>
                <div className="flex flex-col items-center gap-10 ">
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