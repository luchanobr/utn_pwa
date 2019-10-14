const categoriasModel = require("../models/categoriasModel");
const categoriasServicies = require("../services/categoriasServices");
const { validationResult } = require("express-validator");
const error = require("../errors/errorClass");
const errorHandler = require("../errors/errorHandler");

module.exports = {
    create: async (req, res, next) => {
        try {
            validationResult(req).throw();
            const newCategoria = await categoriasServicies.create(req.body);
            res.status(201).json({ data: newCategoria });
        } catch (e) {
            errorHandler(res, e);
        }
    },

    findAll: async (req, res, next) => {
        try {
            const categorias = await categoriasServicies.findAll();
            res.status(200).json({ data: categorias });
        } catch (e) {
            errorHandler(res, e);
        }
    }
};
