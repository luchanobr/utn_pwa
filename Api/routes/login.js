const express = require("express");
const router = express.Router();
const loggerControllers = require("../controllers/loginControllers");
const validators = require("../validators/validators");
const { check } = require("express-validator");

router.post("/", [validators.checkEmail("email"), validators.checkPassword("password")], loggerControllers.login);

module.exports = router;
