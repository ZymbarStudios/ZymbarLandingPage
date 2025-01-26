
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    classname?: string;
}

export function Button({ onClick, children, disabled = false, classname }: ButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} className={twMerge("btn bg-black-1 b-ra text-white px-4 py-2 rounded-md", classname)}>
            {children}
        </button>
    );
};