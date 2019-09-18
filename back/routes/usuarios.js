const express = require("express");
const router = express.Router();
const usuariosControllers = require("../controllers/usuariosControllers");
const { sanitizeParam } = require("express-validator");

router.get("/", usuariosControllers.findAll);
router.get("/:id", sanitizeParam("id"), usuariosControllers.findOne);
router.post("/", usuariosControllers.create);
router.put("/:id", sanitizeParam("id"), usuariosControllers.update);
router.delete("/:id", sanitizeParam("id"), usuariosControllers.remove);

module.exports = router;
