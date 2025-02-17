'use client'

import Image from "next/image";
import Input from "../Input/textInput";
import TextArea from "../Input/textArea";
import { TertiaryButton } from "../Buttons/tertiaryButton";
import { useState } from "react";


export default function Footer() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    async function handleEmail(e: React.FormEvent) {
        e.preventDefault();

        if (!email || !description) {
            return alert('Preencha todos os campos');
        }

        sendEmailToZymbar();
        sendEmailToClient();
    }

    async function sendEmailToZymbar() {
        try {
            const response = await fetch('/api/sendEmailToZymbar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, description }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Email sent successfully');
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            alert('Error sending email');
        }
    }

    async function sendEmailToClient() {
        await fetch('/api/sendEmailToClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, email }),
        });

    }


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

