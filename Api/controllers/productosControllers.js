const productosModel = require("../models/productosModel");
const productoModel = productosModel.productoModel;

module.exports = {
  create: async (req, res, next) => {
    try {
      const producto = new productoModel(req.body);
      let newProducto = await productoModel.create(producto);
      res.status(201).json(newProducto);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },
  findAll: async (req, res, next) => {
    try {
      let productos = await productoModel.find({}).where({ active: 1 });
      res.status(201).json(productos);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },
  findOne: async (req, res, next) => {
    try {
      let id = req.params._id;
      let producto = await productoModel.findById(id).where({ active: 1 });
      res.status(200).json(producto);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },
  update: async (req, res, next) => {
    try {
      let id = req.params._id;
      let producto = req.body;
      let updatedProducto = await productoModel.updateOne({ _id: id }, producto);
      res.status(200).json(updatedProducto);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },
  remove: async (req, res, next) => {
    try {
      let id = req.params._id;
      let removeProducto = await productoModel.findByIdAndUpdate({ _id: id }, { active: 0 });
      res.status(200).json(removeProducto);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  }
};
