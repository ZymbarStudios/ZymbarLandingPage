'use client';
import { PrimaryButton } from "../Buttons/primaryButton";
import { SecondaryButton } from "../Buttons/secondaryButton";
import { GridContainer } from "../GridContainer";

export function SectionHero() {
    return (
        <section>
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
                    <PrimaryButton onClick={() => console.log('click')}>
                        Entre em contato
                    </PrimaryButton>
                </div>
            </GridContainer>
        </section>
    );
}