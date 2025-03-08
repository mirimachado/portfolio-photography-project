import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer'; // Alterado para `import`
import cors from 'cors'; // Alterado para `import`
import bodyParser from 'body-parser'; // Alterado para `import`

const app = express();
const port = 5005;


// Configuração do CORS global
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://mirimachado.github.io', // URL do seu frontend no GitHub Pages
    'https://servidor-d2zh6y5dk-mirias-projects-84c4120f.vercel.app' // Caso precise adicionar o Vercel
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions)); // Configuração do CORS aplicada globalmente
app.use(bodyParser.json());

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

console.log('Email:', process.env.EMAIL_USER);
console.log('Senha do aplicativo:', process.env.EMAIL_PASS);


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
