const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const User = require('./User')

const Tought = db.define('Tought', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
})

// Associação: um usuário pode ter vários pensamentos
Tought.belongsTo(User)
User.hasMany(Tought)

module.exports = Tought
