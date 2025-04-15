
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    classname?: string;
}

export function SecondaryButton({ onClick, children, disabled = false, classname }: ButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} className={twMerge("btn border border-black-3 text-black-3 p-3 2xl:px-5 2xl:py-3 xl:px-5 xl:py-3 rounded-lg 2xl:rounded-md xl:rounded-md", classname)}>
            {children}
        </button>
    );
};