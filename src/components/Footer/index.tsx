'use client'

import Image from "next/image";
import Input from "../Input/textInput";
import TextArea from "../Input/textArea";
import { TertiaryButton } from "../Buttons/tertiaryButton";
import { useLayoutEffect, useState } from "react";
import  LoadingModal  from "../Modals/Loading";
import { Success } from "../Modals/Success";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FooterProps {
    footerRef: React.RefObject<HTMLDivElement | null>;
}


export default function Footer({footerRef}: FooterProps) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isShowingSuccessModal, setIsShowingSuccessModal] = useState(false);


    useLayoutEffect(() => { 
        AOS.init();
    }, []);

    async function handleEmail(e: React.FormEvent) {
        e.preventDefault();

        if (!email || !description) {
            return alert('Preencha todos os campos');
        }

        setIsLoading(true);

        const response = await fetch('/api/sendEmailToZymbar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, description }),
        });

        const data = await response.json();
        if (response.ok) {
            setIsLoading(false);
            setIsShowingSuccessModal(true);
        } else {
            setIsLoading(false);
            alert(`Error: ${data.message}`);
        }

        await fetch('/api/sendEmailToClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, email }),
        });

        setIsLoading(false);
    }


    return (
        <footer 
            className="flex flex-row justify-around bg-black-1 text-white p-20" data-aos="fade-up" 
            data-aos-duration="500" 
            data-aos-delay="200"
            ref={footerRef}
            >
            <LoadingModal isLoading={isLoading}/>
            {
                isShowingSuccessModal && (
                    <Success 
                    title="Email Enviado!" 
                    message="Tudo pronto, seu email foi enviado. Agora, basta aguardar o nosso retorno em até 48 horas." 
                    onOk={() => setIsShowingSuccessModal(false)}/>
                )
            }
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
            <form className="w-2/6 flex flex-col items-start gap-5" onSubmit={handleEmail}>
                <div className="flex flex-row justify-between gap-2 w-full">
                    <Input
                        label="Nome"
                        placeholder="Insira seu nome ou da sua empresa"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Email"
                        placeholder="Seu endereço de e-mail"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <TextArea
                    label="Descrição"
                    placeholder="Descreva sua demanda"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TertiaryButton type="submit" onClick={() => { }}>Enviar</TertiaryButton>
            </form>
        </footer>
    );
}

