const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts2', 'root', 'Desenvolvedor@123', {
    host: 'localhost',
    dialect: 'mysql',
})
try {
    sequelize.authenticate()
    console.log('Conectando com Sucesso')
} catch (err) {
    console.log(`Não foi conectar: ${err}`)
}
module.exports = sequelize