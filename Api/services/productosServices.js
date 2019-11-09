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
            let q = {
                active: 1,
                nombre: new RegExp(query.nombre)
            };
            if (query.categoria) {
                q["categoria"] = query.categoria;
            }
            return await productoModel.paginate(q, {
                page: query.page || 1,
                sort: { precio: -1 },
                populate: { path: "categoria" }
            });
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
            return await productoModel.findByIdAndUpdate(id, producto);
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
