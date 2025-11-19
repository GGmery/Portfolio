const nodemailer = require('nodemailer');

module.exports = async (req: any, res: any) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  const { nombre, email, asunto, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env['MAIL_USER'],
      pass: process.env['MAIL_PASS'],
    },
  });

  try {
    await transporter.sendMail({
      from: process.env['MAIL_USER'],   // tu correo (el que envía realmente)
      to: process.env['MAIL_USER'],     // tu correo (el que recibe)
      subject: asunto,
      text: `De: ${nombre} <${email}>\n\n${mensaje}`,
      replyTo: email                 // aquí se pone el correo del visitante
    });



    res.status(200).json({ ok: true, message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error enviando el correo' });
  }
};
