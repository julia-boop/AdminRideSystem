const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/:idUser/account', userController.account);
router.get('/:idUser/edit', userController.accountEdit);
router.get('/:idUser/inscripciones', userController.inscripciones)

module.exports = router 