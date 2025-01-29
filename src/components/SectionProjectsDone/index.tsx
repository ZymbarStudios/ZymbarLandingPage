import { GridContainer } from "../GridContainer";

export default function SectionProjectsDone() {
    return (
        <section>
            <GridContainer classname="flex flex-row justify-center">
                <h1 className="josefinSans font-bold text-5xl text-center tracking-wide leading-snug  w-3/6 mb-10">
                    Exemplos de Projetos Realizados.
                </h1>
                <div className="flex flex-col gap-20">
                    <div>
                        <h2>
                            Title
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis in dolorem consequatur magni quisquam reprehenderit, aut adipisci? Earum eos provident ipsum, non iste facilis sint modi dolores numquam! Repudiandae?
                        </p>
                        
                    </div>
                </div>
            </GridContainer>
        </section>
    );
}