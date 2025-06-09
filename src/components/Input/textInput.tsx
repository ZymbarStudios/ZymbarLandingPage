import { InputHTMLAttributes } from "react";

interface InputProps {
    label: string;
}

export default function Input({ label, ...rest }: InputProps & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="w-full h-12 flex flex-col justify-end ">
            <div className="px-1 py-1">
                <p className="text-base text-white">
                    {label}
                </p>
            </div>
            <input {...rest} className='block w-full p-2.5 text-sm text-white bg-transparent border-2 border-white rounded-md focus:outline-none focus:ring-0 peer' />
        </div>
    );
}