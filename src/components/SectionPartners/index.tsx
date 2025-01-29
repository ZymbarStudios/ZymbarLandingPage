import Image from "next/image";

export default function SectionPartners() {
    return (
        <section className="bg-gray-2">
            <div className="relative flex flex-col items-center justify-center text-center w-full h-96">
                <Image
                    src={"/code_background.svg"}
                    alt="code background"
                    layout="fill"
                    objectFit= "cover"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-3xl">
                    Somos o seu parceiro estratégico, que cuidará de toda a estrutura tecnológica da sua empresa.
                </h1>
            </div>
        </section>
    );
}