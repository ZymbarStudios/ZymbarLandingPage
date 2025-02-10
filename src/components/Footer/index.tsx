'use client'

import Image from "next/image";
import Input from "../Input/textInput";
import TextArea from "../Input/textArea";
import { TertiaryButton } from "../Buttons/tertiaryButton";


export default function Footer() {
    return (
        <footer className="flex flex-row justify-around bg-black-1 text-white p-20">
            <div className="flex flex-col items-start gap-5 w-2/6">
                <h1 className="josefinSans text-4xl font-bold">
                    Entre em contato! <br /> Te respondemos em até 48 horas.
                </h1>
                <a href="https://www.linkedin.com/company/zymbar/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="bg-white rounded-sm   ">
                    <Image src={'/linkedin.svg'} alt="LinkedIn icon by Icons8" width={20} height={20} />
                </a>
                <span>
                    © 2021 Zymbar
                </span>
            </div>
            <form className="w-2/6 flex flex-col items-start gap-5">
            <Input 
                    label="Email" 
                    placeholder="Seu endereço de e-mail" 
                    type="text" 
                    value="" 
                    onChange={(e) => {}} 
                />
                <TextArea 
                    label="Descrição" 
                    placeholder="Descreva sua demanda" 
                    value="" 
                    onChange={(e) => {}} 
                />
                <TertiaryButton onClick={()=>{}}>Enviar</TertiaryButton>
            </form>
        </footer>
    );
}

