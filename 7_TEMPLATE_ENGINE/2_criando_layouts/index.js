const express = require('express');
const { engine } = require('express-handlebars'); // <- Importa o método engine

const app = express();

app.engine('handlebars', engine()); // <- Usa engine()
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
