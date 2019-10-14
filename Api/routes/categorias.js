const express = require("express");
const router = express.Router();
const auth = require("../guards/auth");
const categoriasControllers = require("../controllers/categoriasControllers");

router.get("/", categoriasControllers.findAll);
router.post("/", auth.adminAuth, categoriasControllers.create);

module.exports = router;
