interface TextAreaProps {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ label, placeholder, value, onChange }: TextAreaProps) {
    return (
        <div className="w-full h-12 flex flex-col justify-end relative">
            <div className="absolute bg-black-1 bottom-8 left-2 px-1">
                <p className="text-base">
                    {label}
                </p>
            </div>
            <textarea
                name="Description"
                id="Description"
                placeholder={placeholder}
                maxLength={2500}
                rows={8}
                cols={50}
                defaultValue={value}
                onChange={onChange}
                className='block w-full p-2.5 text-sm text-white bg-transparent border-2 border-white rounded-md focus:outline-none focus:ring-0 peer'></textarea>
        </div>
    );
}