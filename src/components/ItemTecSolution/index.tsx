import Image from "next/image";

interface ItemTecSolutionProps {
    title?: string;
    description?: string;
    image?: string;
}

export default function SectionTecSolutions({ title, description, image }: ItemTecSolutionProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-2 group w-full max-w-sm mx-auto">
            <div className="flex flex-col">
                {/* Image Container */}
                <div className="bg-gradient-to-br from-gray-2 to-white p-6">
                    <div className="relative h-32 md:h-40 lg:h-44 xl:h-48">
                        <div className="relative w-full h-full mx-auto max-w-[200px]">
                            <Image 
                                src={image || "/placeholder.png"} 
                                alt={title || "Tech Solution"}
                                fill
                                className="object-contain drop-shadow-lg transition-all duration-500 ease-in-out"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="text-center">
                        <h3 className="josefinSans font-bold text-lg md:text-xl lg:text-2xl text-black-1 mb-4">
                            {title}
                        </h3>
                        <p className="text-gray-1 text-sm md:text-base leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}