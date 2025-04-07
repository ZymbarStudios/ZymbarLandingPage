
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
        <button onClick={onClick} disabled={disabled} className={twMerge("btn border border-black-3 text-black-3 px-5 py-3 rounded-md", classname)}>
            {children}
        </button>
    );
};