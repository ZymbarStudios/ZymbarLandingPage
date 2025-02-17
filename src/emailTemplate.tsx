import { Body, Html, Container, Img, Text, Hr, Tailwind } from "@react-email/components";
import * as React from "react";

export const emailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação de Recebimento</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
    
</head>
<body style="margin: 0; padding: 20px; 
        font-family: Inter;">
  
  <div style="background-color: #ffffff; margin: 2% 10% 2% 10%; display: flex; flex-direction: column; align-items: center; ">
    
    <div style=" display: flex; flex-direction: column; align-items: center; padding: 12px; border: 1px solid #e4e2e4; border-radius: 8px">
          
            <img src="https://assets.onecompiler.app/436mkzuzf/436mhzbvn/logo_large.png" alt="Zymbar logo" style="height: 65px; margin-top: 2%">
          
            <h2 style="font-weight: 400; margin-top: 2%; color: #423d42; width: 70%">Olá {{name}}</h2>
            
            <section class="divider" 
            style="width: 75%; height:1px; background-color: #e4e2e4; display:inline-block; content:""; position:absolute; margin-top: 10%;">
            </section>
            
            <p style="font-weight: 300; width: 70%; text-align: start; color: #7D757E;">Recebemos o seu contato. Ele já está em análise pela nossa equipe, e te retornaremos em até 48 horas.</p>
            
            <p style="font-weight: 300; width: 70%; text-align: start; color: #7D757E;">Essa foi a descrição enviada do seu projeto:</p>
            
            <span style="font-weight: 300; width: 70%; text-align: start; color: #7D757E; margin-top: 2%">{{description}}</span>
            
            <p style="font-weight: 300; font-size: 10px; text-align: center; color: #B68340; margin-top: 10%">Esta é uma mensagem automática. Por favor não responda este e-mail.</p>
        
        </div>
  </div>


</body>
</html>`;

/*
interface EmailProps {
    name: string;
    description: string;
}

export default function Email({ name, description } : EmailProps) {

    const textColor = "#423d42";

    return (
        <Html>
            <Tailwind>
                <Body className="bg-white">
                    <Container className="border-1 border-[#e4e2e4] rounded-md px-10 pt-4 flex flex-col items-center">
                        <Img alt="Zymbar Logo"
                            height={70}
                            src="./logo.svg"
                            className="m-auto"/>
                        <Text className="text-lg">
                            Olá {name}
                        </Text>
                        <Hr className="my-[16px] border-t-2 border-gray-300" />
                        <Text className="text-textColor">
                            Recebemos o seu contato. Ele já está em análise pela nossa equipe, e te retornaremos em até 48 horas.
                        </Text>
                        <Text className="text-textColor">
                            <strong>Essa foi a descrição enviada do seu projeto:</strong>  {description}
                        </Text>
                        <Text className="text-[#B68340] text-sm text-center">
                            Esta é uma mensagem automática. Por favor não responda este e-mail.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}*/
