import { TextareaHTMLAttributes } from "react";

interface TextAreaProps {
    label: string;
}

export default function TextArea({ label, ...rest }: TextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <div className="w-full flex flex-col justify-end">
            <div className="px-1 py-1">
                <p className="text-base text-white">
                    {label}
                </p>
            </div>
            <textarea
                {...rest}
                rows={5}
                name={label}
                className='block w-full p-2.5 text-sm text-white bg-transparent border-2 border-white rounded-md focus:outline-none focus:ring-0 peer'></textarea>
        </div>
    );
}