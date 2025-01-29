
import { GridContainer } from "../GridContainer";
import ItemTecSolution from "./ItemTecSolution";

export default function SectionTecExperiences() {
    return (
        <section>
            <GridContainer classname="flex flex-col items-center">
                <h1 className="josefinSans font-bold text-5xl text-center tracking-wide leading-snug  w-3/6 mb-10">
                    Nossa Experiência
                </h1>
                <div className="flex flex-row justify-center gap-40">
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