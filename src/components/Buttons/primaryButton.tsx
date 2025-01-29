
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    classname?: string;
}

export function PrimaryButton({ onClick, children, disabled = false, classname }: ButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} className={twMerge("btn bg-black-1 b-ra text-white px-10 py-4 rounded-md", classname)}>
            {children}
        </button>
    );
};
