
import { GridContainer } from "../GridContainer";
import ItemTecSolution from "../ItemTecSolution";

export default function SectionTecSolutions() {
    return (
        <section className="mt-20">
            <GridContainer classname="flex flex-row justify-around">
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
            </GridContainer>
        </section>
    );
}