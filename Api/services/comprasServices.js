const comprasModel = require("../models/comprasModel");

module.exports = {
  create: async compra => {
    try {
      return await comprasModel.create(compra);
    } catch (e) {
      return e;
    }
  },
  findOne: async id => {
    try {
      return await comprasModel.findById(id).populate("usuario");
    } catch (e) {
      return e;
    }
  }
};
