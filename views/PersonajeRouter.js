
const express = require('express');
const router = express.Router();

const PersonajeController = require('../controllers/PersonajeController');

router.get('/', PersonajeController.getAll);
//http://localhost:3000/personajes  (usando un get).


module.exports = router;