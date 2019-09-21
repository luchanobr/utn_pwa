const usuariosServices = require("../services/usuariosServices");
const usuariosModel = require("../models/usuariosModel");

module.exports = {
  create: async (req, res, next) => {
    try {
      const user = new usuariosModel(req.body);
      const newUser = await usuariosServices.createUser(user);
      res.status(200).json(newUser);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: e });
    }
  },

  findAll: async (req, res, next) => {
    try {
      const users = await usuariosServices.findAllUser();
      res.status(200).json(users);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: e });
    }
  },

  update: async (req, res, next) => {
    try {
      const id = req.params._id;
      const saveUser = req.body;
      const updatedUser = await usuariosServices.updateOne(id, saveUser);
      res.status(200).json(updatedUser);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: e });
    }
  },

  findOne: async (req, res, next) => {
    try {
      let id = req.params._id;
      let user = await usuariosModel.findById(id).where({ active: true });
      res.status(200).json(user);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: e });
    }
  },

  delete: async (req, res, next) => {
    try {
      let id = req.params._id;
      let deleteUser = await usuariosModel.findByIdAndDelete(id);
      res.status(203).json(deleteUser);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: e });
    }
  },

  remove: async (req, res, next) => {
    try {
      let id = req.params._id;
      let removeUser = await usuariosModel.findByIdAndUpdate(id, { active: 0 });
      res.status(204).json(removeUser);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: e });
    }
  }
};
