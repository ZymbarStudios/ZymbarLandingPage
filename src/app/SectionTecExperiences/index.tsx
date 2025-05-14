'use client'
import { useLayoutEffect, useState } from "react";
import { GridContainer } from "../../components/GridContainer";
import ItemTecSolution from "../../components/ItemTecSolution";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationDelay, animationDuration, animationFadeRightType } from "@/utils";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { TbCircle, TbCircleFilled } from "react-icons/tb";

export default function SectionTecExperiences() {

    useLayoutEffect(() => {
        AOS.init({ once: true });
    }, []);

    const items = [
        {
            title: "Apps Mobile",
            description: "Para empresas que precisam de um app para aparelhos móveis como : celulares e tablets.",
            image: "/app_mobile.svg"
        },
        {
            title: "Apps Web",
            description: "Sistema que executa em páginas web. Podendo ser utilizados em dispositivos mobile ou computador.",
            image: "/app_web.svg"
        }
    ];

    const [currentItem, setCurrentItem] = useState(0);
    const [api, setApi] = useState<CarouselApi | null>(null);

    useLayoutEffect(() => {
        if (!api) return;

        const handleSelect = () => {
            const selected = api.selectedScrollSnap();
            setCurrentItem(selected);
        };

        api.on("select", handleSelect);

        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

    return (
        <section data-aos={animationFadeRightType} data-aos-duration={animationDuration} data-aos-delay={animationDelay}>
            <GridContainer classname="flex flex-col items-center gap-6 bg-black-2 py-4 md:py-8 lg:py-10 xl:py-10 2xl:py-10">
                <h1 className="josefinSans font-bold md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-center text-2xl text-white tracking-wide leading-snug md:w-3/6 lg:w-3/6 xl:w-3/6 2xl:w-3/6">
                    Nossa Experiência
                </h1>
                <div className="hidden md:flex lg:flex xl:flex 2xl:flex md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center py-12 gap-6 md:gap-20 lg:gap-20 xl:gap-20 2xl:gap-40">
                    {
                        items.map((item, index) => (
                            <ItemTecSolution
                                key={index}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        ))
                    }
                </div>
                <div className="md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-col items-center gap-3">
                    <Carousel setApi={setApi} className="w-60">
                        <CarouselContent className="">
                            {
                                items.map((item, index) => (
                                    <CarouselItem key={index} className="flex flex-col items-center justify-center" onChange={() => {
                                        setCurrentItem(index);
                                    }}>
                                        <ItemTecSolution
                                            title={item.title}
                                            description={item.description}
                                            image={item.image}
                                        />
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="flex gap-1">
                        {
                            items.map((item, index) => (
                                currentItem == index ? 
                                <TbCircleFilled key={index} className="size-2 text-white" /> : 
                                <TbCircle key={index} className="size-2 text-white" />
                            ))
                        }
                    </div>
                </div>
            </GridContainer>
        </section >
    );
}