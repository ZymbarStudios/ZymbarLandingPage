"use client";
import Image from "next/image";
import { PrimaryButton } from "../Buttons/primaryButton";
import { GridContainer } from "../GridContainer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLayoutEffect, useRef } from "react";

interface HeaderProps {
    onClick: () => void;
}

export default function Header({onClick}: HeaderProps) {

    useLayoutEffect(() => {
        AOS.init();
    }, []);

    return (
        <GridContainer 
            classname="flex justify-between flex-row items-center" 
            data-aos="fade-down" 
            data-aos-duration="500" 
            data-aos-delay="300">
            <Image
                src={'/logo.svg'}
                width={120}
                height={100}
                alt="Logo Zymbar"
            />
            <nav>
                <PrimaryButton onClick={onClick} classname="text-sm py-3 px-4">
                Fale Conosco Hoje
                </PrimaryButton>
            </nav>
        </GridContainer>
    );
};
