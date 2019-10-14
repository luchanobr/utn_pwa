const categoriasModel = require("../models/categoriasModel");

module.exports = {
    create: async categoria => {
        try {
            return await categoriasModel.create(categoria);
        } catch (e) {
            return e;
        }
    },

    findAll: async () => {
        try {
            return await categoriasModel.find();
        } catch (e) {
            return e;
        }
    }
};
