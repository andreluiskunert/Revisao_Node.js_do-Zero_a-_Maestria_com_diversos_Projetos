const express = require('express')
const router = express.Router()
// Controller
const ToughtController = require('../controllers')
router.get('/', ToughtsController.showToughts)

module.exports = router