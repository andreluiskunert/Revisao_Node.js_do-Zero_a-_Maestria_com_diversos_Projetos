const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

// Models
const Task = require('./models/Task')

// routes
const taskRoutes = require('./routes/tasksRoutes')

// Handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// Middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)

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
