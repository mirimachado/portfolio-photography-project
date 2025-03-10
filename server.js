import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer'; // Alterado para `import`
import cors from 'cors'; // Alterado para `import`
import bodyParser from 'body-parser'; // Alterado para `import`

const app = express();
const port = 5005;


// Configuração do CORS global
// const corsOptions = {
//   origin: [
//     'http://localhost:5173',
//     'https://mirimachado.github.io', 
//     'https://portfolio-photography-project.vercel.app' 
//   ],
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// };
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://mirimachado.github.io',
    'https://mirimachado.github.io/portfolio-photography-project', // Adicione esta linha
    '*' // Temporariamente para debug
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
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

  // Adicione esta linha para configurar o Content-Security-Policy
  app.use((req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; img-src 'self' https://portfolio-photography-project.vercel.app data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self' https://smtp.gmail.com;"
    );
    next();
  });
  

// Rota para verificar se a API está funcionando
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'API de email funcionando!', 
    status: 'online',
    env: process.env.NODE_ENV || 'development'
  });
});

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

