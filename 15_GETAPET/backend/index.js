const express = require('express')
const cors = require('cors')

const app = express()

// config JSON response:
app.use(express.json())

// solve CORS:
app.use(cors( {credentials: true, origin: 'http://localhost:3000'}))

// Public folder for images:
app.use(express.static('public'))

//Routes:

// Aqui a porta:
app.listen(5000)