import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';


    export default async function sendEmailToZymbar(req: NextApiRequest, res: NextApiResponse) {
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

            const mailOptions = {
                from: email,
                to: process.env.EMAIL_USER,
                subject: "Contato pelo site",
                text: `Enviado por: ${name},
                email: ${email}
                descrição: ${description}`
            }

            try {
                await sender.sendMail(mailOptions);
                res.status(200).json({ message: 'Email sent successfully' });
            } catch (error) {
                res.status(500).json({ message: 'Error sending email', error });
            }
        } else {
            res.status(405).json({ message: 'Method not allowed' });
        }
    }
