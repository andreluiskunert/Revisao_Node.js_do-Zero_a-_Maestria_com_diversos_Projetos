const express = require('express');
const router = express.Router();
const ToughtController = require('../controllers/ToughtController');
const checkAuth = require('../helpers/auth').checkAuth;

// Rota para criar novo pensamento
router.get('/add', checkAuth, ToughtController.createTought);
router.post('/add', checkAuth, ToughtController.createToughtSave);

// Rota do dashboard (importante!)
router.get('/dashboard', checkAuth, ToughtController.dashboard);

// Rota para deletar pensamento
router.post('/remove', checkAuth, ToughtController.removeTought);

// Rota principal de listagem
router.get('/', ToughtController.showToughts);

module.exports = router;
