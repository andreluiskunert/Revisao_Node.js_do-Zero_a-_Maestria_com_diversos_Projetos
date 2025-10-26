const express = require('express')
const { engine } = require('express-handlebars') // versão nova
const app = express()

// Importar rotas
const productRoutes = require('./routes/productsRoutes')

// Configurar template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Rotas
app.use('/products', productRoutes)

app.get('/', (req, res) => {
  res.render('home') // opcional, se existir views/home.handlebars
})

// Iniciar servidor
app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000'))
