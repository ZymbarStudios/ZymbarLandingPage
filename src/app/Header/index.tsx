"use client";
import Image from "next/image";
import { PrimaryButton } from "../../components/Buttons/primaryButton";
import { GridContainer } from "../../components/GridContainer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLayoutEffect, useRef } from "react";
import { TbMenu } from "react-icons/tb";

interface HeaderProps {
    onClick: () => void;
}

export default function Header({ onClick }: HeaderProps) {

    useLayoutEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <GridContainer
            classname="flex justify-between flex-row items-center 2xl:px-8"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="300">
            <div className="relative w-32 h-24 right-6">
                <Image
                    src={'/logo.svg'}
                    alt="Logo Zymbar"
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full"
                />
            </div>

            <PrimaryButton onClick={onClick} classname="text-sm py-3 px-4 ">
                Fale Conosco Hoje
            </PrimaryButton>

            <div>
                <TbMenu className="size-5 2xl:hidden xl:"/>
            </div>
        </GridContainer>
    );
};

const imageStyle = ` bg-yellow-500 relative top-0 w-32 h-24 sm:w-auto sm:h-84`;