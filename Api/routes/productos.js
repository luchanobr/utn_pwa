const express = require("express");
const router = express.Router();
const productosControllers = require("../controllers/productosControllers");

router.get("/", productosControllers.findAll);
router.get("/:_id", productosControllers.findOne);
router.post("/", productosControllers.create);
router.put("/:_id", productosControllers.update);
router.delete("/:_id", productosControllers.remove);

module.exports = router;
