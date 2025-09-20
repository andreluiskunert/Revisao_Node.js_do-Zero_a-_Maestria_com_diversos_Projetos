// controllers/ToughtController.js
const { Op } = require('sequelize')
const Tought = require('../models/Tought')
const User = require('../models/User')

module.exports = class ToughtController {
  static async showToughts(req, res) {
    let search = ''
    if (req.query.search) {
      search = req.query.search
    }

    let order = 'DESC'
    if (req.query.order === 'old') {
      order = 'ASC'
    }

    const toughtsData = await Tought.findAll({
      include: User,
      where: {
        title: { [Op.like]: `%${search}%` }
      },
      order: [['createdAt', order]]
    })

    const toughts = toughtsData.map((result) => result.get({ plain: true }))
    const toughtsQty = toughts.length

    // 🔑 Alterado para apontar para a pasta correta da view
    res.render('toughts/home', { toughts, search, toughtsQty })
  }
}
