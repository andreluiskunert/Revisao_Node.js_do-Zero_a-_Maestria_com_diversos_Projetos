const express = require('express')
const cors = require('cors')

const app = express()

// 🔴 ESSENCIAL — habilitar leitura de JSON
app.use(express.json())

// (opcional, mas recomendado)
app.use(express.urlencoded({ extended: true }))

app.use(cors())

// rotas
const UserRoutes = require('./routes/UserRoutes')
app.use('/users', UserRoutes)

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000')
})
