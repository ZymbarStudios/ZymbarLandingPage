"use client";
import Image from "next/image";
import { PrimaryButton } from "../../components/Buttons/primaryButton";
import { GridContainer } from "../../components/GridContainer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLayoutEffect } from "react";
import { TbMenu2 } from "react-icons/tb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";

interface HeaderProps {
    onClick: () => void;
}

export default function Header({ onClick }: HeaderProps) {

    useLayoutEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div
            className="flex justify-between flex-row items-center px-4 2xl:px-8"
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

            <PrimaryButton onClick={onClick} classname="text-sm py-3 px-4 hidden xd:block lg:block xl:block 2xl:block">
                Fale Conosco Hoje
            </PrimaryButton>
        </div>
    );
};