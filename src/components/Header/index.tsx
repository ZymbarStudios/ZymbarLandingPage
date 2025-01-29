"use client";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../Buttons/primaryButton";
import { GridContainer } from "../GridContainer";

export default function Header() {
    return (
        <GridContainer classname="flex justify-between flex-row items-center">
            <Image
                src={'/logo.svg'}
                width={120}
                height={100}
                alt="Logo Zymbar"
            />
            <nav>
                <PrimaryButton onClick={() => console.log('click')} classname="text-sm py-3 px-4">
                Fale Conosco Hoje
                </PrimaryButton>
            </nav>
        </GridContainer>
    );
};
