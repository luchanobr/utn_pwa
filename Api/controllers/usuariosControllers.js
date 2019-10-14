const usuariosServices = require("../services/usuariosServices");
const usuariosModel = require("../models/usuariosModel");
const { validationResult } = require("express-validator");
const nodemail = require("../functions/email");
const jwt = require("../functions/jwt");
const brypt = require("../functions/bcrypt");
const error = require("../errors/errorClass");
const errorHandler = require("../errors/errorHandler");

module.exports = {
    create: async (req, res, next) => {
        try {
            validationResult(req).throw();
            const user = new usuariosModel(req.body);
            const newUser = await usuariosServices.createUser(user);
            const token = jwt.setToken(newUser._id);
            const email = await nodemail.sendEmailNewUser(newUser, token);
            res.status(201).json({ data: { user: newUser, email: email } });
        } catch (e) {
            errorHandler(res, e);
        }
    },

    findAll: async (req, res, next) => {
        try {
            const users = await usuariosServices.findAllUser(req.query);
            res.status(200).json({ data: users });
        } catch (e) {
            errorHandler(res, e);
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
            errorHandler(res, e);
        }
    },

    findOne: async (req, res, next) => {
        try {
            validationResult(req).throw();
            let id = req.params.id;
            let user = await usuariosModel.findById(id).where({ active: true });
            res.status(200).json({ data: user });
        } catch (e) {
            errorHandler(res, e);
        }
    },

    delete: async (req, res, next) => {
        try {
            validationResult(req).throw();
            let id = req.params.id;
            let deleteUser = await usuariosModel.findByIdAndDelete(id);
            res.status(203).json({ data: deleteUser });
        } catch (e) {
            errorHandler(res, e);
        }
    },

    remove: async (req, res, next) => {
        try {
            validationResult(req).throw();
            let id = req.params.id;
            let removeUser = await usuariosModel.findByIdAndUpdate(id, { active: 0 });
            res.status(204).json({ data: removeUser });
        } catch (e) {
            errorHandler(res, e);
        }
    },

    activateOne: async (req, res, next) => {
        try {
            validationResult(req).throw();
            const userId = jwt.verifyToken(req.params.token);
            const user = await usuariosServices.activeOne(userId.id);
            if (user) res.status(200).json({ message: "Usuario activado" });
        } catch (e) {
            errorHandler(res, e);
        }
    },

    updatePassword: async (req, res, next) => {
        try {
            validationResult(req).throw();
            const userId = jwt.verifyToken(req.params.token);
            const password = brypt.hashPassword(req.body.password);
            const user = await usuariosServices.updateOne(
                { _id: userId.id },
                { password: password }
            );
            if (user) res.status(200).json({ message: "Password actualizado" });
        } catch (e) {
            errorHandler(res, e);
        }
    },

    emailResetPassword: async (req, res, next) => {
        try {
            validationResult(req).throw();
            const user = await usuariosServices.checkUserMail(req.body.email);
            if (user) {
                const token = jwt.setToken(user._id);
                const email = await nodemail.sendEmailResetPass(user, token);
                res.status(200).json({
                    message:
                        "We have sent a email to your account for the request of password reset ",
                    email: email
                });
            }
        } catch (e) {
            errorHandler(res, e);
        }
    }
};
