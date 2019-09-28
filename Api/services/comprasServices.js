const comprasModel = require('../models/comprasModel');

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
      return await comprasModel.findById(id).populate('usuario');
    } catch (e) {
      return e;
    }
  },

  findAll: async query => {
    try {
      const q = {};
      if (query.total) {
        q['total'] = query.total;
      }
      if (query.productoId) {
        q['productos'] = { $elemMatch: { _id: query.productoId } };
      }
      if (query.usuario) {
        q['usuario'] = query.usuario;
      }
      return await comprasModel.paginate(q, {
        page: query.page || 1,
        sort: { createdAt: -1 },
        populate: { path: 'usuario' }
      });
    } catch (e) {}
  }
};
