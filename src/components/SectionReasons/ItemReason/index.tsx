
interface ItemReasonProps {
    title?: string;
    description?: string;
}

export default function ItemReason({ title, description }: ItemReasonProps) {
    return (
        <div className="flex flex-col justify-center items-center w-64">
            <h2 className="josefinSans font-bold text-lg text-center leading-snug">
                {title}
            </h2>
            <p className="text-center text-gray-1 text-sm">
                {description}
            </p>
        </div>
    );
}