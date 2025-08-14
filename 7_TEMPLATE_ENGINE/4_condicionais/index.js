const express = require('express');
const { engine } = require('express-handlebars'); // <- Importa o método engine

const app = express();

app.engine('handlebars', engine()); // <- Usa engine()
app.set('view engine', 'handlebars');
app.set('views', './views');
app.get("/dashboard", (req, res)=>{
  res.render('dashboard')
})

app.get('/', (req, res) => {

  const user = {
    name: "André Luis",
    surname: "Kunert",
    age:43,
    profissao:"DevFullStack"
  }
  const  palavra ='Retorceter as vezes,decidir nunca...'
  const auth = true
  
  res.render('home',{ user: user, palavra, auth});
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
