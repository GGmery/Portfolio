import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { nombre, email, asunto, mensaje } = req.body;

  // Configuración del transporter con Gmail (puedes usar otro SMTP si prefieres)
    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
    });


  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER, // el correo que recibirá los mensajes
      subject: asunto,
      text: `De: ${nombre} <${email}>\n\n${mensaje}`,
    });

    return res.status(200).json({ ok: true, message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error enviando el correo' });
  }
}
