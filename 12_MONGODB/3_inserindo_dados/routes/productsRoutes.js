const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/create', productController.createProductForm)
router.post('/create', productController.createProduct)

module.exports = router
