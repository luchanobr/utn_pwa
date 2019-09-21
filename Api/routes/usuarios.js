const express = require("express");
const router = express.Router();
const usuariosControllers = require("../controllers/usuariosControllers");
const { sanitizeParam } = require("express-validator");

router.get("/", usuariosControllers.findAll);
router.get("/:_id", sanitizeParam("_id"), usuariosControllers.findOne);
router.post("/", usuariosControllers.create);
router.put("/:_id", sanitizeParam("_id"), usuariosControllers.update);
router.delete("/:_id", sanitizeParam("_id"), usuariosControllers.remove);

module.exports = router;
