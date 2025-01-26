import Image from "next/image";

interface ItemTecSolutionProps {
    title?: string;
    description?: string;
}

export default function SectionTecSolutions({ title, description }: ItemTecSolutionProps) {
    return (
        <div className="bg-gray-2 p-4 rounded-md w-72 h-72">
            <div className="bg-white p-3 rounded-md flex justify-center items-center">
                <Image src={"/app_mobile.svg"}
                    alt={"App Mobile"}
                    width={150}
                    height={100}
                />
            </div>
            <h1 className="text-black-3 josefinSans mt-4 text-sm font-bold">{title}</h1>
            <p className="text-gray-4 text-xs mt-2 fit-content">{description}</p>
        </div>
    );
}