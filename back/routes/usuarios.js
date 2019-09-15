const express = require("express");
const router = express.Router();
const usuariosControllers = require("../controllers/usuariosControllers");

router.get("/", usuariosControllers.findAll);
router.get("/:id", usuariosControllers.findOne);
router.post("/", usuariosControllers.create);
router.put("/:id", usuariosControllers.update);
router.delete("/:id", usuariosControllers.remove);

module.exports = router;
