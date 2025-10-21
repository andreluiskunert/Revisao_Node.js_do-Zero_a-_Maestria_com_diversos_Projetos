const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

const conn = require("./db/conn").run;

// Configurar Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views"); // opcional, mas recomendado

// Middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Exemplo de rota simples
app.get("/", (req, res) => {
  res.render("home"); // busca views/home.handlebars
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});
