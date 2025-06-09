interface SuccessProps {
    title: string;
    message: string;
    onOk: () => void;
}

export function Success({title, message, onOk} : SuccessProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-white max-w-lg my-auto mx-auto p-8 rounded-lg shadow-lg z-50">
                <h2 className="text-xl text-black font-semibold mb-4">{title}</h2>
                <p className="mb-3 text-black-2">{message}</p>
                <div className="flex justify-end">
                    <button
                        onClick={onOk}
                        className="px-6 py-2 bg-black text-white rounded-lg shadow-md"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}