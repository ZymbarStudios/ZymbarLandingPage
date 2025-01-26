'use client';
import { Button } from "../Button";
import { GridContainer } from "../GridContainer";

export function SectionHero() {
    return (
        <section className="mt-20">
            <GridContainer classname="flex flex-col items-center">
                <h1 className="josefinSans font-bold text-5xl text-center tracking-wide leading-snug  w-3/6 mb-10" >Faça sua aplicação com a segurança do melhor, com o melhor preço</h1>
                <p className="text-center text-gray-1 w-2/6 text-sm">Se você é um pequeno ou médio empreendedor, e precisa de uma solução tecnológica de baixo custo e alta qualidade, nós podemos te ajudar!</p>
                <Button onClick={() => console.log('click')} classname="mt-16 px-9 py-3">Entre em contato</Button>
            </GridContainer>
        </section>
    );
}