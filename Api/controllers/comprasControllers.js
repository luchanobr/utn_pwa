const comprasModel = require('../models/comprasModel');
const comprasServicies = require('../services/comprasServices');
const usuariosServicies = require('../services/usuariosServices');
const { validationResult } = require('express-validator');
const error = require('../errors/errorClass');

module.exports = {
  create: async (req, res, next) => {
    try {
      validationResult(req).throw();
      const user = await usuariosServicies.findOne(req.body.usuario);
      if (user.active == false) {
        throw new error.UnauthorizedError('Usuario no validado');
      } else {
        const compra = new comprasModel(req.body);
        const newCompra = await comprasServicies.create(compra);
        res.status(200).json({ data: newCompra });
      }
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },
  findOne: async (req, res, next) => {
    try {
      validationResult(req).throw();
      let id = req.params.id;
      let compra = await comprasServicies.findOne(id);
      res.status(200).json({ data: compra });
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },

  findAll: async (req, res, next) => {
    try {
      validationResult(req).throw();
      const compras = await comprasServicies.findAll(req.query);
      res.status(200).json({ data: compras });
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  }
};
