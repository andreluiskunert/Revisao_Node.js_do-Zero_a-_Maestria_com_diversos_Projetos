// controllers/ToughtController.js
const { Op } = require('sequelize')
const Tought = require('../models/Tought')
const User = require('../models/User')

module.exports = class ToughtController {
    static async showToughts(req, res) {
        let search = req.query.search || ''
        let order = req.query.order === 'old' ? 'ASC' : 'DESC'

        const toughtsData = await Tought.findAll({
            include: User,
            where: {
                title: { [Op.like]: `%${search}%` },
            },
            order: [['createdAt', order]],
        })

        const toughts = toughtsData.map((result) => result.get({ plain: true }))

        res.render('home', { toughts, search })
    }
}
