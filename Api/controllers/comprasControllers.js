const comprasModel = require("../models/comprasModel");
const comprasServicies = require("../services/comprasServices");

module.exports = {
  create: async (req, res, next) => {
    try {
      let compra = new comprasModel(req.body);
      let newCompra = comprasServicies.create(compra);
      res.status(200).json(newCompra);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },
  findOne: async (req, res, next) => {
    try {
      let id = req.params._id;
      let compra = await comprasServicies.findOne(id);
      res.status(200).json(compra);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  }
};
