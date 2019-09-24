const express = require("express");
const router = express.Router();
const usuariosControllers = require("../controllers/usuariosControllers");
const { sanitizeParam } = require("express-validator");
const validators = require("../validators/validators");

router.get("/", usuariosControllers.findAll);
router.get("/:id", [validators.checkId("id")], usuariosControllers.findOne);
router.post(
  "/",
  [
    validators.checkNombre("nombre"),
    validators.checkEmail("email"),
    validators.checkPassword("password"),
    validators.checkDireccion("direccion.*.direccion"),
    validators.checkPiso("direccion.*.piso"),
    validators.checkLocalidad("direccion.*.localidad"),
    validators.checkProvincia("direccion.*.provincia"),
    validators.checkCodigoPostal("direccion.*.codigoPostal"),
    validators.checkNumero("direccion.*.numero")
  ],
  usuariosControllers.create
);
router.put(
  "/:id",
  [
    validators.checkId("id"),
    validators.checkNombre("nombre"),
    validators.checkEmail("email"),
    validators.checkPassword("password"),
    validators.checkDireccion("direccion.*.direccion"),
    validators.checkPiso("direccion.*.piso"),
    validators.checkLocalidad("direccion.*.localidad"),
    validators.checkProvincia("direccion.*.provincia"),
    validators.checkCodigoPostal("direccion.*.codigoPostal"),
    validators.checkNumero("direccion.*.numero")
  ],
  usuariosControllers.update
);
router.delete("/:id", [validators.checkId("id")], usuariosControllers.remove);

module.exports = router;
