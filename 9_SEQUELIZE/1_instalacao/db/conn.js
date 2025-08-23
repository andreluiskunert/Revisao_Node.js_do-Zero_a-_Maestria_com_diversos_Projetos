const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('nodesequelize2', 'root', 'Desenvolvedor@123', {
  host: 'localhost',
  dialect: 'mysql'
})
try {
  sequelize.authenticate()
  console.log('Conctenado com o Banco do Sequelize')
} catch (err) {
  console.log('Não foi conectar:', error)

}
module.exports = sequelize