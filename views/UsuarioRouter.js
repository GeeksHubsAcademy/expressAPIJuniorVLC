
const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

router.get('/', UsuarioController.getAll);
//http://localhost:3000/usuarios  (usando un get).
router.post('/', UsuarioController.getEnemigos);
//http://localhost:3000/usuarios (usando un post).
router.post('/login', UsuarioController.userLogin);
//http://localhost:3000/usuarios/login

module.exports = router;