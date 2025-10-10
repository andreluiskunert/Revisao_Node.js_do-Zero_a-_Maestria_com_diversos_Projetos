const express = require("express");
const { engine } = require("express-handlebars"); // ✅ forma correta para versões novas
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("express-flash");

const app = express();

const conn = require("./db/conn");

// Models
const Tought = require("./models/Tought");

// Routes
const toughtsRoutes = require("./routes/toughtsRoutes");
const authRoutes = require("./routes/authRoutes");
const ToughController = require("./controllers/ToughtController");

// ✅ Configuração do Handlebars
app.engine("handlebars", engine({
  defaultLayout: "main", // layout padrão em /views/layouts/main.handlebars
  layoutsDir: __dirname + "/views/layouts", // pasta de layouts
  partialsDir: __dirname + "/views/partials", // pasta de partials
}));
app.set("view engine", "handlebars");
app.set("views", "./views");

// ✅ Middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// ✅ Configuração da sessão
app.use(
  session({
    name: "session",
    secret: "nosso_secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require("path").join(require("os").tmpdir(), "sessions"),
    }),
    cookie: {
      secure: false,
      maxAge: 3600000,
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    },
  })
);

// ✅ Flash messages
app.use(flash());

// ✅ Arquivos estáticos (CSS, JS, imagens)
app.use(express.static("public"));

// ✅ Middleware para enviar sessão às views
app.use((req, res, next) => {
  console.log(req.session.userid);

  if (req.session.userid) {
    res.locals.session = req.session;
  }

  next();
});

// ✅ Rotas
app.use("/toughts", toughtsRoutes);
app.use("/", authRoutes);

// ✅ Rota principal
app.get("/", ToughController.showToughts);

// ✅ Conexão com o banco e inicialização do servidor
conn
  .sync()
  .then(() => {
    app.listen(3000, () => console.log("Servidor rodando na porta 3000 🚀"));
  })
  .catch((err) => console.log(err));
