const productosServicies = require("../services/productosServices");
const productoModel = require("../models/productosModel").productoModel;
const { validationResult } = require("express-validator");

module.exports = {
  create: async (req, res, next) => {
    try {
      validationResult(req).throw();
      const producto = new productoModel(req.body);
      const newProducto = await productosServicies.create(producto);
      res.status(201).json({ data: newProducto });
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },
  findAll: async (req, res, next) => {
    try {
      const productos = await productosServicies.findAll(req.query);
      res.status(200).json({ data: productos });
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },
  findOne: async (req, res, next) => {
    try {
      validationResult(req).throw();
      const id = req.params.id;
      const producto = await productosServicies.findOne(id);
      res.status(200).json({ data: producto });
    } catch (e) {
      console.log(e);
      res.status(404).json(e);
    }
  },
  update: async (req, res, next) => {
    try {
      validationResult(req).throw();
      const id = req.params.id;
      const producto = req.body;
      const updatedProducto = await productoModel.updateOne(id, producto);
      res.status(200).json({ data: updatedProducto });
    } catch (e) {
      console.log(e);
      res.status(404).json(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      validationResult(req).throw();
      const id = req.params.id;
      const removeProducto = await productosServicies.removeOne(id);
      res.status(204).json({ data: removeProducto });
    } catch (e) {
      console.log(e);
      res.status(404).json(e);
    }
  }
};
