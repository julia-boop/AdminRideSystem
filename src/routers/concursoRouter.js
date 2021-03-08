const express = require('express');
const router = express.Router();
const concursoController = require('../controllers/concursoController');

router.get('/crear', concursoController.cForm);
router.get('/', concursoController.read);
router.get('/:idConcurso/detail', concursoController.cDetail);
router.get('/:idConcurso/:idPrueba/detail', concursoController.pDetail);
router.get('/:idConcurso/:idPrueba/edit', concursoController.pEdit);
router.get('/:idConcurso/edit', concursoController.cEdit);
router.get('/:idConcurso/:idPrueba/inscripcion', concursoController.iForm);

module.exports = router;