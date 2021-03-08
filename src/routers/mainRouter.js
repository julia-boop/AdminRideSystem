const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/contacto', mainController.contact);
router.get('/:idUser/admin', mainController.mAdmin);
router.get('/:idUser/hipico', mainController.eAdmin);

module.exports = router