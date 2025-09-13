const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const flash = require('express-flash')
const app = express()

const conn = require('./db/conn')
const Tought = require('./models/Tought')
const User = require('./models/User')
const toughtsRoutes = require('./routes/toughtsRoutes')
const ToughtController = require('./controllers/ToughtController')

// Configuração do Handlebars (versão 6.x)
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
  session({
    name: "session",
    secret: "nosso_secret",
    resave: false,
    saveUninitialized: false,
    store: new fileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), 'session'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 36000),
      httpOnly: true
    }
  })
)

app.use(flash())
app.use(express.static('public'))

app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session
  }
  next()
})

// rotas
app.use('/toughts', toughtsRoutes)
app.get('/', ToughtController.showToughts)

// conexão com banco
conn
  //.sync({ force: true })
  .sync()
  .then(() => app.listen(3000))
  .catch((err) => console.log(err))
