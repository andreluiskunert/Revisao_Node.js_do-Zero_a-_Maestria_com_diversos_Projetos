const express = require('express');
const { engine } = require('express-handlebars'); // <- Importa o método engine

const app = express();
const hbs = exphbs.create({
  partialsDir: ['views/partials'],
})

app.engine('handlebars', engine()); // <- Usa engine()
app.set('view engine', 'handlebars');
app.set('views', './views');
app.get("/dashboard", (req, res)=>{
  const items = ["Item a", "Item b", "Item c"]
  res.render('dashboard', {items})
})
app.get('/post', (req, res)=>{
  const post = {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.js',
    comments:4,
  }
  res.send('blogpost', {post})

})
app.get('/blog',(req, res) =>{
  const posts = [
     {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.js',
    comments:4,
  },
   {
    title: 'Aprender javascript',
    category: 'JavaScript',
    body: 'Teste..',
    comments:4,
  },
   {
    title: 'Aprender PHP',
    category: 'php',
    body: 'teste',
    comments:4,
  }
  ]
  res.render('blog', {posts})
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
  const approved = true
  res.render('home',{ user: user, palavra, auth, approved});
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
