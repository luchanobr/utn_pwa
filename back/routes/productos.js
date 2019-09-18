const express = require("express");
const router = express.Router();
const productosControllers = require("../controllers/productosControllers");

router.get("/", productosControllers.findAll);
router.get("/:id", productosControllers.findOne);
router.post("/", productosControllers.create);
router.put("/id", productosControllers.update);
router.delete("/:id", productosControllers.remove);

module.exports = router;
