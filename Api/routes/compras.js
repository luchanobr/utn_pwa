const express = require("express");
const router = express.Router();
const comprasControllers = require("../controllers/comprasControllers");
const auth = require("../guards/auth");
const validators = require("../validators/validators");

router.get("/:id", [validators.checkId("id")], auth.userAuth, comprasControllers.findOne);
router.post("/", auth.userAuth, comprasControllers.create);

module.exports = router;
