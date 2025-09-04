const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
const { engine } = require('express-handlebars');

const app = express();
const conn = require('./db/conn');

// Controllers
const ToughtController = require('./controllers/ToughtController');

// Routes
const toughtsRoutes = require('./routes/toughtsRoutes');
const authRoutes = require('./routes/authRoutes');

// Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Session middleware
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
      maxAge: 3600000,
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    },
  })
);

// Flash messages
app.use(flash());

// Public folder
app.use(express.static('public'));

// Set session to response
app.use((req, res, next) => {
  console.log(req.session.userid);

  if (req.session.userid) {
    res.locals.session = req.session;
  }

  next();
});

// Routes
app.use('/toughts', toughtsRoutes);
app.use('/', authRoutes);

// Home
app.get('/', ToughtController.showToughts);

// DB connection
conn
  .sync()
  .then(() => {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000 🚀'));
  })
  .catch((err) => console.log(err));
