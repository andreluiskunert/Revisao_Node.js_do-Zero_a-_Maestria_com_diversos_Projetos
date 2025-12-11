const UserController = require('../controllers/UserController')

const router = require('express').Router()
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/checkuser', UserController.checkUser)
//   quarta-feira, 10/12/2025_De noite "Revisão de Códigos..."
router.get('/:id', UserController.getUserByIdUser)

module.exports = router