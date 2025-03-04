require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5004;

app.use(bodyParser.json());
app.use(cors());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Ou outro serviço de e-mail como Outlook, Yahoo, etc.
  auth: {
    user: process.env.EMAIL_USER, // O e-mail da fotógrafa
    pass: process.env.EMAIL_PASS, // Senha do aplicativo gerada
  },
  logger: true,   // Ativa o log
  debug: true,    // Log detalhado

  tls: {
    rejectUnauthorized: false,
  },
});

// Rota para enviar o e-mail
app.post('/send-email', (req, res) => {
  console.log("Requisição recebida:", req.body);
  const { name, email, message } = req.body;

  // Configuração do e-mail que será enviado
  const mailOptions = {
    from: process.env.EMAIL_USER, // Seu e-mail como remetente
    to: process.env.EMAIL_DEST, // Destinatário fixo
    subject: `Mensagem de ${name}`,
    text: message,
    replyTo: email, // O e-mail de resposta será o e-mail do usuário
  };

  app.use(cors({
    origin: 'http://localhost:3000',  // URL do seu frontend
    methods: ['GET', 'POST'],
  }));
  
  

  // Enviar o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: 'Falha no envio do e-mail',
        details: error,
      });
    }

    // Resposta de sucesso após o envio do e-mail
    res.status(200).json({
      success: true,
      message: 'E-mail enviado com sucesso!',
      info: info,
    });
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
