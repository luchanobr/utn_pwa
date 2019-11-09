const productosServicies = require("../services/productosServices");
const productoModel = require("../models/productosModel").productoModel;
const { validationResult } = require("express-validator");
const error = require("../errors/errorClass");
const errorHandler = require("../errors/errorHandler");

module.exports = {
    create: async (req, res, next) => {
        try {
            validationResult(req).throw();
            const producto = new productoModel(req.body);
            const newProducto = await productosServicies.create(producto);
            res.status(201).json({ data: newProducto });
        } catch (e) {
            errorHandler(res, e);
        }
    },
    findAll: async (req, res, next) => {
        try {
            const productos = await productosServicies.findAll(req.query);
            res.status(200).json({ data: productos });
        } catch (e) {
            errorHandler(res, e);
        }
    },
    findOne: async (req, res, next) => {
        try {
            validationResult(req).throw();
            const id = req.params.id;
            const producto = await productosServicies.findOne(id);
            res.status(200).json({ data: producto });
        } catch (e) {
            errorHandler(res, e);
        }
    },
    update: async (req, res, next) => {
        try {
            validationResult(req).throw();
            const id = req.params.id;
            const producto = req.body;
            const updatedProducto = await productosServicies.updateOne(id, producto);
            res.status(200).json({ data: updatedProducto });
        } catch (e) {
            errorHandler(res, e);
        }
    },
    remove: async (req, res, next) => {
        try {
            validationResult(req).throw();
            const id = req.params.id;
            const removeProducto = await productosServicies.removeOne(id);
            res.status(204).json({ data: removeProducto });
        } catch (e) {
            errorHandler(res, e);
        }
    }
};
