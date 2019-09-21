const express = require("express");
const router = express.Router();
const comprasControllers = require("../controllers/comprasControllers");
const auth = require("../hooks/auth");

router.get("/:_id", auth.jwtVerify, comprasControllers.findOne);
router.post("/", auth.jwtVerify, comprasControllers.create);

module.exports = router;
