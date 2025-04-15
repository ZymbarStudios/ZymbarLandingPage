import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    classname?: string;
    type?: "button" | "submit" | "reset";
}

export function TertiaryButton({ onClick, children, disabled = false, classname, type }: ButtonProps) {

    return (
        <button onClick={onClick} disabled={disabled} type={type} className={twMerge("btn border bg-white border-white text-black-1 p-3 2xl:px-5 2xl:py-3 xl:px-5 xl:py-3 rounded-lg 2xl:rounded-md xl:rounded-mds", classname)}>
            {children}
        </button>
    );
};