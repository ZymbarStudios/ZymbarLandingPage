'use client'
import { useLayoutEffect, useState, useEffect, useCallback, useRef } from "react";
import { GridContainer } from "../../components/GridContainer";
import ItemTecSolution from "../../components/ItemTecSolution";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationDelay, animationDuration, animationFadeRightType } from "@/lib/utils";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/Carrousel"
import { TbCircle, TbCircleFilled } from "react-icons/tb";
import { items } from "@/data/tec-items";

export default function SectionTecExperiences() {
    const [currentItem, setCurrentItem] = useState(0);
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isCarouselVisible, setIsCarouselVisible] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isAutoScrollingRef = useRef(false);
    const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const AUTOPLAY_DELAY = 4000; // 4 seconds

    useLayoutEffect(() => {
        AOS.init({ once: true });
    }, []);

    // Check if carousel should be visible based on screen size
    useEffect(() => {
        const checkScreenSize = () => {
            // Carousel is visible on lg:hidden (< 1024px)
            const shouldShowCarousel = window.innerWidth < 1024;
            setIsCarouselVisible(shouldShowCarousel);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const startAutoPlay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        
        // Only start auto play if carousel is visible and auto play is enabled
        if (isAutoPlaying && api && isCarouselVisible) {
            intervalRef.current = setInterval(() => {
                isAutoScrollingRef.current = true;
                api.scrollNext();
            }, AUTOPLAY_DELAY);
        }
    }, [api, isAutoPlaying, isCarouselVisible]);

    const stopAutoPlay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current);
            pauseTimeoutRef.current = null;
        }
    }, []);

    const pauseAutoPlayTemporarily = useCallback((duration: number = 3000) => {
        setIsAutoPlaying(false);
        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current);
        }
        pauseTimeoutRef.current = setTimeout(() => {
            setIsAutoPlaying(true);
        }, duration);
    }, []);

    useLayoutEffect(() => {
        if (!api || !isCarouselVisible) return;

        const handleSelect = () => {
            const selected = api.selectedScrollSnap();
            setCurrentItem(selected);
            
            // If this wasn't triggered by autoplay, pause autoplay temporarily
            if (!isAutoScrollingRef.current && isAutoPlaying) {
                pauseAutoPlayTemporarily(3000);
            }
            
            // Reset the auto-scrolling flag
            isAutoScrollingRef.current = false;
        };

        api.on("select", handleSelect);

        // Start autoplay when API is ready and carousel is visible
        startAutoPlay();

        return () => {
            stopAutoPlay();
            api.off("select", handleSelect);
        };
    }, [api, startAutoPlay, stopAutoPlay, isAutoPlaying, pauseAutoPlayTemporarily, isCarouselVisible]);

    // Handle mouse enter/leave for pausing autoplay (only when carousel is visible)
    useEffect(() => {
        if (!isCarouselVisible) return;
        
        const container = containerRef.current;
        if (!container) return;

        const handleMouseEnter = () => {
            setIsAutoPlaying(false);
            stopAutoPlay();
        };

        const handleMouseLeave = () => {
            setIsAutoPlaying(true);
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [stopAutoPlay, isCarouselVisible]);

    // Restart autoplay when isAutoPlaying changes to true (only when carousel is visible)
    useEffect(() => {
        if (!isCarouselVisible) {
            stopAutoPlay();
            return;
        }

        if (isAutoPlaying) {
            startAutoPlay();
        } else {
            stopAutoPlay();
        }
    }, [isAutoPlaying, startAutoPlay, stopAutoPlay, isCarouselVisible]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopAutoPlay();
        };
    }, [stopAutoPlay]);

    return (
        <section data-aos={animationFadeRightType} data-aos-duration={animationDuration} data-aos-delay={animationDelay}>
            <GridContainer classname="flex flex-col items-center gap-6 bg-black-2 py-4 md:py-8 lg:py-10 xl:py-10 2xl:py-10">
                <h1 className="josefinSans font-bold md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-center text-2xl text-white tracking-wide leading-snug md:w-3/6 lg:w-3/6 xl:w-3/6 2xl:w-3/6">
                    Nossa Experiência
                </h1>
                <div className="hidden md:hidden lg:flex xl:flex 2xl:flex md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center py-12 gap-6 md:gap-20 lg:gap-20 xl:gap-20 2xl:gap-40">
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
                <div ref={containerRef} className="lg:hidden xl:hidden 2xl:hidden flex flex-col items-center gap-3">
                    <Carousel 
                        setApi={setApi} 
                        className="w-60"
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                    >
                        <CarouselContent className="">
                            {
                                items.map((item, index) => (
                                    <CarouselItem key={index} className="flex flex-col items-center justify-center">
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
                                <button
                                    key={index}
                                    className={`transition-all duration-300 ${
                                        currentItem === index ? 'scale-125' : 'hover:scale-110'
                                    }`}
                                    onClick={() => {
                                        api?.scrollTo(index);
                                        pauseAutoPlayTemporarily(3000);
                                    }}
                                    aria-label={`Ir para item ${index + 1}`}
                                >
                                    {currentItem === index ? 
                                        <TbCircleFilled className="size-2 text-white" /> : 
                                        <TbCircle className="size-2 text-white" />
                                    }
                                </button>
                            ))
                        }
                    </div>
                </div>
            </GridContainer>
        </section >
    );
}