import { twMerge } from "tailwind-merge";

interface GridContainerProps {
    children: React.ReactNode;
    classname?: string;
}

export function GridContainer({children, classname}: GridContainerProps) {
    return (
        <div className={twMerge("w-full max-w-container mx-auto px-3", classname)}>
            {children}
        </div>
    )
}