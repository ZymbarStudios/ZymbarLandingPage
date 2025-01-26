"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import { GridContainer } from "../GridContainer";

export default function Header() {
    return (
        <GridContainer classname="flex justify-between flex-row items-center">
            <Image
                src={'/logo.svg'}
                width={100}
                height={100}
                alt="Logo Zymbar"
            />
            <nav>
                <Button onClick={() => console.log('click')} classname="text-sm">
                    Contato
                </Button>
            </nav>
        </GridContainer>
    );
};
