const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()
const conn = require('./db/conn')

// Configuração do Handlebars
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// Middlewares para leitura de dados
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

// Arquivos estáticos
app.use(express.static('public'))

// -------------------------
// 🔹 Sessão
app.use(
  session({
    name: 'session',
    secret: 'nosso_secret', // troque por algo mais seguro
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 3600000, // 1 hora
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    },
  })
)

// 🔹 Flash messages
app.use(flash())

// 🔹 Middleware para deixar session disponível no Handlebars
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session
  }
  next()
})

// -------------------------
// 🔹 Rotas
const authRoutes = require('./routes/authRoutes')
app.use('/', authRoutes)

// -------------------------
// 🔹 Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000 🚀')
})
