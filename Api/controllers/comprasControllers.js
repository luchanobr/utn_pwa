const comprasModel = require("../models/comprasModel");
const comprasServicies = require("../services/comprasServices");
const usuariosServicies = require("../services/usuariosServices");
const { validationResult } = require("express-validator");
const error = require("../errors/errorClass");
const errorHandler = require("../errors/errorHandler");
const moment = require("moment");

module.exports = {
    create: async (req, res, next) => {
        try {
            validationResult(req).throw();
            const user = await usuariosServicies.findOne(req.body.usuario);
            if (user.active == false) {
                throw new error.UnauthorizedError(
                    req.body.usuario,
                    "Usuario no validado",
                    "usuario",
                    "body"
                );
            } else {
                const compra = new comprasModel(req.body);
                const newCompra = await comprasServicies.create(compra);
                const compraPdf = await comprasServicies.findOne(newCompra._id);
                res.render(
                    "factura-template",
                    {
                        compra: compraPdf,
                        fecha: moment(compraPdf.createdAt)
                            .utc()
                            .format("DD/MM/YYYY"),
                        fechaEntrega: moment(compraPdf.fecha)
                            .utc()
                            .format("DD/MM/YYYY"),
                        hora: `entre las ${moment(compraPdf.hora[0])
                            .utc()
                            .format("HH:mm")} y las ${moment(compraPdf.hora[1])
                            .utc()
                            .format("HH:mm")}`
                    },
                    function(err, html) {
                        res.pdfFromHTML({
                            filename: "factura.pdf",
                            htmlContent: html,
                            options: {
                                height: "842px",
                                width: "595px",
                                border: {
                                    top: "10px",
                                    right: "5px",
                                    bottom: "10px",
                                    left: "5px"
                                }
                            }
                        });
                    }
                );
            }
        } catch (e) {
            errorHandler(res, e);
        }
    },
    findOne: async (req, res, next) => {
        try {
            validationResult(req).throw();
            let id = req.params.id;
            let compra = await comprasServicies.findOne(id);
            res.status(200).json({ data: compra });
        } catch (e) {
            errorHandler(res, e);
        }
    },

    findAll: async (req, res, next) => {
        try {
            validationResult(req).throw();
            const compras = await comprasServicies.findAll(req.query);
            res.status(200).json({ data: compras });
        } catch (e) {
            errorHandler(res, e);
        }
    }
};
