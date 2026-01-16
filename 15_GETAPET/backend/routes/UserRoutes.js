// Revisão de error pra correção de código_quinta-feira,15/01/2026_de noite
const router = require('express').Router()
const UserController = require('../controllers/UserController')
router.post('/register', UserController.register)

module.exports = router