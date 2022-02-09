
const router = require('express').Router();

const UsuarioRouter = require('./views/UsuarioRouter');
const PersonajeRouter = require('./views/PersonajeRouter');

router.use('/usuarios', UsuarioRouter);
router.use('/personajes', PersonajeRouter);

module.exports = router;