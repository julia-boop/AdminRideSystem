const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const hasAccess = require('../middlewares/hasAccess')

router.get('/login', userController.login);
router.post('/login', userController.enter);

router.get('/logout', userController.logout);

router.get('/:idUser/admin', userController.panelAdmin);
module.exports = router 