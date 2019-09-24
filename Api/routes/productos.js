const express = require("express");
const router = express.Router();
const productosControllers = require("../controllers/productosControllers");
const validators = require("../validators/validators");
const auth = require("../guards/auth");

router.get("/", productosControllers.findAll);
router.get("/:id", [validators.checkId("id")], productosControllers.findOne);
router.post(
  "/",
  [
    validators.checkNombre("nombre"),
    validators.checkDescripcion("descripcion"),
    validators.checkPrecio("precio"),
    validators.checkStock("stock"),
    validators.checkUrl("img"),
    validators.checkDestacado("destacado")
  ],
  auth.adminAuth,
  productosControllers.create
);
router.put(
  "/:id",
  [
    validators.checkId("id"),
    validators.checkNombre("nombre"),
    validators.checkDescripcion("descripcion"),
    validators.checkPrecio("precio"),
    validators.checkStock("stock"),
    validators.checkUrl("img"),
    validators.checkDestacado("destacado")
  ],
  auth.adminAuth,
  productosControllers.update
);
router.delete("/:id", [validators.checkId("id")], auth.adminAuth, productosControllers.remove);

module.exports = router;
