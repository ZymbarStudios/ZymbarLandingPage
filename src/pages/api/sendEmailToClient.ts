
import { NextApiRequest, NextApiResponse } from 'next';
import { emailTemplate } from '../../components/EmailTemplate/emailTemplate';
import nodemailer from 'nodemailer';

export default async function sendEmailToClient(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const { name, email, description } = req.body;

        const sender = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        try{
            await sender.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: "Confirmação de Contato",
                html: emailTemplate({name, description})
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error){
            res.status(500).json({ message: 'Error sending email', error });
        }

    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
