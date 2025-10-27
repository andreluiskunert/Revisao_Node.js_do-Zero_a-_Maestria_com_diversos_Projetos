const express = require('express')
const { engine } = require('express-handlebars') // ✅ forma correta
const app = express()

const productsRoutes = require('./routes/productsRoutes')

app.engine('handlebars', engine()) // ✅ nova forma
app.set('view engine', 'handlebars')
app.set('views', './views') // boa prática, garante caminho correto

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())
app.use(express.static('public'))
app.use('/', productsRoutes)

app.listen(3000, () => console.log('Servidor rodando na porta 3000 🚀'))
