const express = require("express");
const router = express.Router();
const comprasControllers = require("../controllers/comprasControllers");
const auth = require("../guards/auth");

router.get("/:_id", auth.userAuth, comprasControllers.findOne);
router.post("/", auth.adminAuth, comprasControllers.create);

module.exports = router;
