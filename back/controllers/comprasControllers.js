const comprasModel = require("../models/comprasModel");

module.exports = {
  create: async (req, res, next) => {
    try {
      let compra = new comprasModel(req.body);
      let newCompra = comprasModel.create(compra);
      res.status(200).json(newCompra);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },
  findOne: async (req, res, next) => {
    try {
      let id = req.params.id;
      let compra = await comprasModel.findById(id).populate("usuario");
      res.status(200).json(compra);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  }
};
