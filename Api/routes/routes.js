const express = require("express");
const app = express();
var indexRouter = require("./index");
const usuariosRouter = require("./usuarios");
const productosRouter = require("./productos");
const comprasRouter = require("./compras");
const loginRouter = require("./login");
const urlApi = "/api/v1";

app.use("/", indexRouter);
app.use(`${urlApi}/usuarios`, usuariosRouter);
app.use(`${urlApi}/productos`, productosRouter);
app.use(`${urlApi}/compras`, comprasRouter);
app.use(`${urlApi}/login`, loginRouter);

module.exports = app;
