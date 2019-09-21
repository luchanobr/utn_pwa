const express = require("express");
const router = express.Router();
const loggerControllers = require("../controllers/loginControllers");

router.post("/", loggerControllers.login);

module.exports = router;
