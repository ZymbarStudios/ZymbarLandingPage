import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    classname?: string;
}

export function TertiaryButton({ onClick, children, disabled = false, classname }: ButtonProps) {

    return (
        <button onClick={onClick} disabled={disabled} className={twMerge("btn border bg-white border-white text-black-1 px-8 py-2  rounded-md", classname)}>
            {children}
        </button>
    );
};