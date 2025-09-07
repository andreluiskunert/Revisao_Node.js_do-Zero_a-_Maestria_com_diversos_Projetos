const Tought = require('../models/Tought')
const User = require('../models/User')

module.exports = class ToughtsController {
  static async showToughts(req, res) {
    try {
      // Busca todos os pensamentos com os dados do usuário associado
      const toughtsData = await Tought.findAll({
        include: User,
        raw: true,
        nest: true,
      })

      // Renderiza a view e envia os dados
      res.render('toughts/home', { toughts: toughtsData })
    } catch (err) {
      console.log(err)
      res.render('toughts/home', { toughts: [] })
    }
  }
}
