import { twMerge } from "tailwind-merge";

interface GridContainerProps {
    children: React.ReactNode;
    classname?: string;
}

export function GridContainer({children, classname}: GridContainerProps) {
    return (
        <div className={twMerge("w-full px-9 xl:px-3 2xl:px-3", classname)}>
            {children}
        </div>
    )
}