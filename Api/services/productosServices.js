const productoModel = require("../models/productosModel").productoModel;

module.exports = {
  create: async producto => {
    try {
      return await productoModel.create(producto);
    } catch (e) {
      return e;
    }
  },

  findAll: async query => {
    try {
      console.log(query);
      return await productoModel.paginate(
        { active: 1, nombre: new RegExp(query.nombre), categoria: new RegExp(query.categoria) },
        { page: query.page || 1, sort: { precio: -1 } }
      );
    } catch (e) {
      return e;
    }
  },

  findOne: async id => {
    try {
      return await productoModel.findById(id).where({ active: 1 });
    } catch (e) {
      return e;
    }
  },

  updateOne: async (id, producto) => {
    try {
      return await productoModel.updateOne({ _id: id }, producto);
    } catch (e) {
      return e;
    }
  },

  removeOne: async id => {
    try {
      return await productoModel.findByIdAndUpdate({ _id: id }, { active: 0 });
    } catch (e) {
      return e;
    }
  }
};
