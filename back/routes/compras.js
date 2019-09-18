const express = require("express");
const router = express.Router();
const comprasControllers = require("../controllers/comprasControllers");

router.get("/:id", comprasControllers.findOne);
router.post("/", comprasControllers.create);

module.exports = router;
