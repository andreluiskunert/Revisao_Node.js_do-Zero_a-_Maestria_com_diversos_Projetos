// const express = require('express')
// const cors = require('cors')

// const app = express()

// // Config JSON response
// app.use(express.json())

// // Solve CORS
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// // Public folder for images
// app.use(express.static('public'))

// // Routes
// // Sabádo, 31/01/2026_de manha
// const UserRoutes = require('./routes/UserRoutes')
// app.use('/users', UserRoutes)

// //  Estou buscando conexão com o Banco de Dados usando https://cloud.mongodb.com/v2#/org/684e1fcfc80840285f0b1f04/projects

// app.listen(5000)
const express = require('express');
const cors = require('cors');
const app = express();

const UserRoutes = require('./routes/UserRoutes');
// const PetRoutes = require('./routes/PetRoutes');

// config json response
app.use(express.json());

// solve cors
app.use(cors({ credentials: true, origin: 'http://localhost:3000'}));

// Public folder for images
app.use(express.static('public'));

// routes
app.use('/users', UserRoutes);
// app.use('/pets', PetRoutes);

app.listen(5000);
