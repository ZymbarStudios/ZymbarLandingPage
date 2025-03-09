
interface EmailTemplateProps {
  name: string;
  description: string;
}

export const emailTemplate = ({ name, description }: EmailTemplateProps) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
  <title>Email Estimate</title>
  <style>
    body {
      font-family: Inter, sans-serif;
      margin: 0;
      padding: 0;
    }
    table {
      border-collapse: collapse;
    }
    .container {
      width: 100%;
      padding: 20px;
    }
    .email-wrapper {
      max-width: 530px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 30px 60px 5px 60px;
      border: 1px solid #eaeaea;
      border-radius: 8px;
    }
    .header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      items-align: center;
    }
    .header img {
      width: 65px;
    }
    .greetings{
      border-bottom: 1px solid #e4e2e4;
    }
    .greetings td{
      font-size: 1.4rem;
      font-weight: 500;
      font-family: Josefin Sans, sans-serif;
      padding-left: 2px;
      padding-top: 24px;
      padding-bottom: 16px;
      margin-bottom: 12px;
      color: #423d42;
    }
    .details {
      width: 100%;
    }
    .details td {
      padding-top: 16px;
      color: #7D757E;
      font-size: 0.9rem;
      font-weight: 300;
    }
    .footer td{
      font-weight: 300; 
      font-size: 11px; 
      text-align: center; 
      font-family: Josefin Sans, sans-serif;
      color: #B68340; 
      padding-top: 40px;
      padding-bottom: 10px;
    }
    
  </style>
</head>
<body>
  <div class="container">
    <div class="email-wrapper">
      
      <div class="header">
        <img src="https://assets.onecompiler.app/436mkzuzf/436mhzbvn/logo_large.png" alt="Company Logo">
      </div>

      <table>
        <tr class="greetings">
          <td>Olá ${name}!</td>
        </tr>
        <tr class="details">
          <td>
            Recebemos o seu contato. Ele já está em análise pela nossa equipe, e te retornaremos em até 48 horas.<br><br>
            Essa foi a descrição enviada do seu projeto:<br><br>
            "${description}"
          </td> 
        </tr>
        <tr class="footer">
          <td>
           Esta é uma mensagem automática. Por favor não responda este e-mail.
          </td>
        </tr>
      </table>
      
    </div>
  </div>
</body>
</html>`;
