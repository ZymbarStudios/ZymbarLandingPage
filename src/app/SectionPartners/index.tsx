'use client'
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLayoutEffect } from "react";
import { animationDelay, animationDuration, animationFadeRightType } from "@/utils";

export default function SectionPartners() {

    useLayoutEffect(() => {
        AOS.init({once: true});
    }, []);

    return (
        <section className="bg-gray-2" data-aos={animationFadeRightType} data-aos-duration={animationDuration} data-aos-delay={animationDelay}>
            <div className="relative flex flex-col items-center justify-center text-center h-52 w-full 2xl:h-96 xl:h-96">
                <Image
                    src={"/code_background.svg"}
                    alt="code background"
                    layout="fill"
                    objectFit= "cover"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="absolute inset-0 flex items-center justify-center px-10 text-white font-bold text-center text-lg 2xl:text-3xl xl:text-3xl">
                    Somos o seu parceiro estratégico, que cuidará de toda a estrutura tecnológica da sua empresa.
                </h1>
            </div>
        </section>
    );
}