'use client'
import { useLayoutEffect, useState, useEffect, useCallback, useRef } from "react";
import { GridContainer } from "../../components/GridContainer";
import ProjectCard from "../../components/ProjectCard";
import { projectsData, sectionConfig } from "@/data/projects";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/Carrousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationDelay, animationDuration, animationFadeRightType } from "@/lib/utils";

interface SectionProjectsDoneProps {
    onGetContact?: () => void;
    className?: string;
    projectsRef: React.RefObject<HTMLDivElement | null>;
}

export default function SectionProjectsDone({ onGetContact, className = "", projectsRef }: SectionProjectsDoneProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isAutoScrollingRef = useRef(false);
    const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const AUTOPLAY_DELAY = 4000; // 4 seconds

    useLayoutEffect(() => {
        AOS.init({ once: true });
    }, []);

    const startAutoPlay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        
        if (isAutoPlaying && api) {
            intervalRef.current = setInterval(() => {
                isAutoScrollingRef.current = true;
                api.scrollNext();
            }, AUTOPLAY_DELAY);
        }
    }, [api, isAutoPlaying]);

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

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap() + 1);
            
            // If this wasn't triggered by autoplay, pause autoplay temporarily
            if (!isAutoScrollingRef.current && isAutoPlaying) {
                pauseAutoPlayTemporarily(3000);
            }
            
            // Reset the auto-scrolling flag
            isAutoScrollingRef.current = false;
        };

        api.on("select", handleSelect);

        // Start autoplay when API is ready
        startAutoPlay();

        return () => {
            stopAutoPlay();
            api.off("select", handleSelect);
        };
    }, [api, startAutoPlay, stopAutoPlay, isAutoPlaying, pauseAutoPlayTemporarily]);

    // Handle mouse enter/leave for pausing autoplay
    useEffect(() => {
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
    }, [stopAutoPlay]);

    // Restart autoplay when isAutoPlaying changes to true
    useEffect(() => {
        if (isAutoPlaying) {
            startAutoPlay();
        } else {
            stopAutoPlay();
        }
    }, [isAutoPlaying, startAutoPlay, stopAutoPlay]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopAutoPlay();
        };
    }, [stopAutoPlay]);

    const handleContactClick = () => {
        if (onGetContact) {
            onGetContact();
        }
    };

    return (
        <section 
            className={className}
            data-aos={animationFadeRightType} 
            data-aos-duration={animationDuration} 
            data-aos-delay={animationDelay}
            ref={projectsRef}
        >
            <GridContainer classname="flex flex-col justify-center items-center gap-8 lg:gap-12">
                {/* Header */}
                <div className="text-center">
                    <h1 className="josefinSans font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-black-1 tracking-wide leading-snug mb-4">
                        {sectionConfig.title}
                    </h1>
                    <p className="text-gray-1 text-sm 2xl:text-lg xl:text-lg max-w-2xl mx-auto">
                        {sectionConfig.description}
                    </p>
                </div>

                {/* Projects Carousel */}
                <div ref={containerRef} className="w-full max-w-7xl relative">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {projectsData.map((project, projectIndex) => (
                                <CarouselItem key={`project-${projectIndex}`} className="pl-2 md:pl-4">
                                    <div className="p-1">
                                        <ProjectCard
                                            {...project}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden lg:flex" />
                        <CarouselNext className="hidden lg:flex" />
                    </Carousel>
                    
                    {/* Progress Indicator */}
                    <div className="flex justify-center items-center gap-2 mt-6">
                        {Array.from({ length: count }, (_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index + 1 === current
                                        ? 'bg-black-1 scale-125'
                                        : 'bg-gray-3 hover:bg-gray-2'
                                }`}
                                onClick={() => {
                                    api?.scrollTo(index);
                                    pauseAutoPlayTemporarily(3000);
                                }}
                                aria-label={`Ir para projeto ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                </div>

            </GridContainer>
        </section>
    );
}