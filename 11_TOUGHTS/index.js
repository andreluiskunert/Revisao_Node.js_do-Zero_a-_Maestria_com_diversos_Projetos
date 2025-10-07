// ========================
// 📦 Importações
// ========================
const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const flash = require('express-flash')
const path = require('path')

const app = express()

// ========================
// 📂 Conexão e modelos
// ========================
const conn = require('./db/conn')
const Tought = require('./models/Tought')
const User = require('./models/User')

// ========================
// 📂 Rotas e controladores
// ========================
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')
const ToughtController = require('./controllers/ToughtController')

// ⚠️ Apague esta linha duplicada, ela não é necessária!
// const ToughController = require("./controllers/ToughtController");

// ========================
// ⚙️ Configuração do Handlebars
// ========================
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

// ========================
// 🔧 Middlewares globais
// ========================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ✅ Middleware de sessão (vem ANTES das rotas)
app.use(
  session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new fileStore({
      logFn: function () { },
      path: require('path').join(require('os').tmpdir(), 'session'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  })
)

// Flash messages e pasta pública
app.use(flash())
app.use(express.static('public'))

// ✅ Middleware para expor a sessão à view
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session
  }
  next()
})

// ========================
// 🚏 Rotas
// ========================
app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)
app.get('/', ToughtController.showToughts)

// ========================
// 🗄️ Conexão com o banco
// ========================
// ⚠️ Use apenas .sync() sem { force: true } depois que estiver funcionando,
// pois o force:true apaga e recria as tabelas toda vez!
conn
  // .sync({ force: true })
  .sync()
  .then(() => app.listen(3000))
  .catch((err) => console.log(err))
