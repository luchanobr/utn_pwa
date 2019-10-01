const express = require('express');
const router = express.Router();
const loggerControllers = require('../controllers/loginControllers');
const validators = require('../validators/validators');
const { check } = require('express-validator');

router.post('/', [validators.checkLogin('email', 'password')], loggerControllers.login);

module.exports = router;
