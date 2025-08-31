const express = require('express');
const { engine } = require('express-handlebars'); // <--- versão nova
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require("express-flash");

const app = express();
const conn = require("./db/conn");

// Configuração do Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração de sessão
app.use(
  session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  })
);

// Flash messages
app.use(flash());

// Servir arquivos estáticos
app.use(express.static("public"));

// Disponibilizar sessão para as views
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }
  next();
});

// Conexão com o banco
conn
  .sync()
  .then(() => {
    app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
  })
  .catch((err) => console.log(err));
