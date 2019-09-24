const usuariosServices = require("../services/usuariosServices");
const usuariosModel = require("../models/usuariosModel");
const { validationResult } = require("express-validator");

module.exports = {
  create: async (req, res, next) => {
    try {
      validationResult(req).throw();
      const user = new usuariosModel(req.body);
      const newUser = await usuariosServices.createUser(user);
      res.status(200).json({ data: newUser });
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  findAll: async (req, res, next) => {
    try {
      const users = await usuariosServices.findAllUser();
      res.status(200).json({ data: users });
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  update: async (req, res, next) => {
    try {
      validationResult(req).throw();
      const id = req.params.id;
      const saveUser = req.body;
      const updatedUser = await usuariosServices.updateOne(id, saveUser);
      res.status(200).json({ data: updatedUser });
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  findOne: async (req, res, next) => {
    try {
      validationResult(req).throw();
      let id = req.params.id;
      let user = await usuariosModel.findById(id).where({ active: true });
      res.status(200).json({ data: user });
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  delete: async (req, res, next) => {
    try {
      validationResult(req).throw();
      let id = req.params.id;
      let deleteUser = await usuariosModel.findByIdAndDelete(id);
      res.status(203).json({ data: deleteUser });
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  remove: async (req, res, next) => {
    try {
      validationResult(req).throw();
      let id = req.params.id;
      let removeUser = await usuariosModel.findByIdAndUpdate(id, { active: 0 });
      res.status(204).json({ data: removeUser });
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  }
};
