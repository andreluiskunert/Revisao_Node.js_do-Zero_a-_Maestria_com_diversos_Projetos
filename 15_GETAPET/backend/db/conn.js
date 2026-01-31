const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/getapet')
    console.log('Conectado ao MongoDB com Mongoose!')
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error)
  }
}

connect()

module.exports = mongoose
