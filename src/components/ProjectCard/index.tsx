import { useState } from "react";
import Image from "next/image";
import { ProjectData } from "@/data/projects";

interface ProjectCardProps extends ProjectData {
    className?: string;
}

export default function ProjectCard({
    title,
    subtitle,
    description,
    features,
    images,
    imageLabels,
    type,
    className = ""
}: ProjectCardProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [imageAspectRatios, setImageAspectRatios] = useState<{ [key: number]: boolean }>({});

    const handleImageClick = (imageIndex: number) => {
        setSelectedImageIndex(imageIndex);
    };

    const handleImageLoad = (imageIndex: number, event: React.SyntheticEvent<HTMLImageElement>) => {
        const img = event.currentTarget;
        const isLandscape = img.naturalWidth >= img.naturalHeight;
        setImageAspectRatios(prev => ({
            ...prev,
            [imageIndex]: isLandscape
        }));
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'mobile': return 'Mobile';
            case 'web': return 'Web';
            case 'desktop': return 'Desktop';
            default: return type;
        }
    };

    const isCurrentImageLandscape = imageAspectRatios[selectedImageIndex] || false;

    return (
        <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-2 group ${className}`}>
            <div className="flex flex-col lg:flex-row">
                {/* Images Container */}
                <div className="lg:w-1/2 xl:w-2/5 bg-gradient-to-br from-gray-2 to-white p-6">
                    {/* Primary Image */}
                    <div className="relative mb-4 h-72 md:h-96 lg:h-80 xl:h-96">
                        <div className={`relative w-full h-full mx-auto ${
                            isCurrentImageLandscape 
                                ? 'max-w-[450px]' // Much larger max width for landscape images
                                : 'max-w-[280px]' // Original max width for portrait images
                        }`}>
                            <Image
                                src={images[selectedImageIndex]}
                                alt={imageLabels[selectedImageIndex]}
                                fill
                                className={`object-contain drop-shadow-lg transition-all duration-500 ease-in-out ${
                                    isCurrentImageLandscape 
                                        ? 'scale-110 rounded-lg' // Scale up landscape images by 10%
                                        : '' // No scaling for portrait
                                }`}
                                onLoad={(e) => handleImageLoad(selectedImageIndex, e)}
                                key={selectedImageIndex} // Force re-render for smooth transition
                            />
                        </div>
                    </div>
                    
                    {/* Image Thumbnails */}
                    <div className="flex justify-center gap-3 lg:gap-4">
                        {images.map((image, imageIndex) => (
                            <button
                                key={imageIndex}
                                onClick={() => handleImageClick(imageIndex)}
                                className={`relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg shadow-md border-2 p-2 transition-all duration-300 cursor-pointer ${
                                    selectedImageIndex === imageIndex
                                        ? 'border-black-1 bg-white shadow-lg scale-105'
                                        : 'border-gray-3 bg-white hover:border-black-3 hover:shadow-lg hover:scale-102'
                                }`}
                            >
                                <Image
                                    src={image}
                                    alt={imageLabels[imageIndex]}
                                    fill
                                    className="object-contain p-1"
                                    onLoad={(e) => handleImageLoad(imageIndex, e)}
                                />
                                
                                {/* Selected Indicator */}
                                {selectedImageIndex === imageIndex && (
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-black-1 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                    
                    {/* Navigation Hint */}
                    <div className="text-center mt-3">
                        <p className="text-xs text-gray-1">
                            Clique nas imagens para alternar
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 xl:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                    <div className="mb-6">
                        <h3 className="josefinSans font-bold text-xl md:text-2xl lg:text-3xl text-black-1 mb-2">
                            {title}
                        </h3>
                        <h4 className="josefinSans font-semibold text-lg md:text-xl text-black-3 mb-4">
                            {subtitle}
                        </h4>
                        <p className="text-gray-1 text-sm md:text-base leading-relaxed mb-6">
                            {description}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                        <h5 className="josefinSans font-semibold text-base text-black-2 mb-3">
                            Funcionalidades:
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {features.map((feature, featureIndex) => (
                                <div 
                                    key={featureIndex}
                                    className="flex items-center text-sm text-black-3"
                                >
                                    <span className="w-2 h-2 bg-black-3 rounded-full mr-3 flex-shrink-0"></span>
                                    <span className="font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Project Type Badge */}
                    <div className="mt-6">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-black-1 text-white">
                            {getTypeIcon(type)}
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
} 