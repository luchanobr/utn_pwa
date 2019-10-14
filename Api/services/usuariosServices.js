const usuariosModel = require("../models/usuariosModel");

module.exports = {
    checkUserMail: async email => {
        try {
            return await usuariosModel.findOne({ email: email });
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

    findAllUser: async query => {
        try {
            let q = {
                email: new RegExp(query.email),
                nombre: new RegExp(query.nombre)
            };

            return await usuariosModel.paginate(q, {
                page: query.page || 1
            });
        } catch (e) {
            return e;
        }
    },

    updateOne: async (id, user) => {
        try {
            return usuariosModel.findByIdAndUpdate(id, user);
        } catch (e) {
            return e;
        }
    },

    findOne: async id => {
        try {
            return usuariosModel.findById(id);
        } catch (e) {}
    },

    activeOne: async id => {
        try {
            return usuariosModel.updateOne({ _id: id }, { active: true });
        } catch (e) {
            return e;
        }
    }
};
