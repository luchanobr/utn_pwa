const usuariosModel = require("../models/usuariosModel");

module.exports = {
  checkUserMail: async email => {
    try {
      const user = await usuariosModel.findOne({ email: email });
      if (!user) {
        throw new Error({ error: "mail no registrado" });
      } else {
        return user;
      }
    } catch (e) {
      return e;
    }
  },

  createUser: async user => {
    try {
      return await usuariosModel.create(user);
    } catch (e) {
      return e;
    }
  },

  findAllUser: async () => {
    try {
      return await usuariosModel.find({}).where({ active: true });
    } catch (e) {
      return e;
    }
  },

  updateOne: async (id, user) => {
    try {
      return usuariosModel.updateOne({ _id: id }, user);
    } catch (e) {
      return e;
    }
  },

  findOne: async id => {
    try {
      return usuariosModel.findById(id).where({ active: true });
    } catch (e) {}
  }
};
