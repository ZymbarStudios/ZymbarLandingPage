
interface ItemReasonProps {
    title?: string;
    description?: string;
}

export default function ItemReason({ title, description }: ItemReasonProps) {
    return (
        <div className="flex flex-col justify-center items-center w-64">
            <h2 className="josefinSans font-bold text-md 2xl:text-lg xl:text-lg text-center leading-snug text-black-3">
                {title}
            </h2>
            <p className="text-center text-gray-1 text-sm">
                {description}
            </p>
        </div>
    );
}