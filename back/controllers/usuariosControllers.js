const usuariosModel = require("../models/usuariosModel");

module.exports = {
  create: async (req, res, next) => {
    try {
      let user = new usuariosModel(req.body);
      let newUser = await usuariosModel.create(user);
      res.status(200).json(newUser);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },

  findAll: async (req, res, next) => {
    try {
      let users = await usuariosModel.find({}).where({ active: true });
      res.status(200).json(users);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },

  update: async (req, res, next) => {
    try {
      let id = req.params.id;
      let saveUser = req.body;
      let updatedUser = await usuariosModel.findByIdAndUpdate(id, saveUser);
      res.status(200).json(updatedUser);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: e });
    }
  },

  findOne: async (req, res, next) => {
    try {
      let id = req.params.id;
      let user = await usuariosModel.findById(id).where({ active: true });
      res.status(200).json(user);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },

  delete: async (req, res, next) => {
    try {
      let id = req.params.id;
      let deleteUser = await usuariosModel.findByIdAndDelete(id);
      res.status(203).json(deleteUser);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  },

  remove: async (req, res, next) => {
    try {
      let id = req.params.id;
      let removeUser = await usuariosModel.findByIdAndUpdate(id, { active: 0 });
      res.status(204).json(removeUser);
    } catch (e) {
      console.log(e);
      res.status(404).json({ error: e });
    }
  }
};
