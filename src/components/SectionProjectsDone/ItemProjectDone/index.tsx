

interface ItemProjectDoneProps {
    title: string;
    description: string;
}

export default function SectionProjectsDone({title, description}: ItemProjectDoneProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-4 border-b-2 border-gray-3 pb-6 w-4/6">
            <h2 className="josefinSans font-bold text-black-3">
                {title}
            </h2>
            <p className=" text-gray-1 text-sm w-5/6 text-center">
                {description}
            </p>
        </div>
    );
}