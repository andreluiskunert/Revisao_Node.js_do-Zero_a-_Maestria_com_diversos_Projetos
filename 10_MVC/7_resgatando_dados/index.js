const express = require('express')
const { engine } = require('express-handlebars') // ✅ versão 6
const app = express()

const conn = require('./db/conn')

// Models
const Task = require('./models/Task')

// Routes
const taskRoutes = require('./routes/tasksRoutes')

// Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' })) // define o layout padrão
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views') // garante que o Express encontre a pasta views

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Rotas
app.use('/tasks', taskRoutes)

// Conexão com o banco
conn
  .sync()
  .then(() => {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
  })
  .catch((err) => console.log(err))
