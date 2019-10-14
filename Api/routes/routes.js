const express = require("express");
const app = express();
var indexRouter = require("./index");
const usuariosRouter = require("./usuarios");
const productosRouter = require("./productos");
const comprasRouter = require("./compras");
const loginRouter = require("./login");
const categoriasRouter = require("./categorias");
const urlApi = "/api/v1";

app.use("/", indexRouter);
app.use(`${urlApi}/usuarios`, usuariosRouter);
app.use(`${urlApi}/productos`, productosRouter);
app.use(`${urlApi}/compras`, comprasRouter);
app.use(`${urlApi}/login`, loginRouter);
app.use(`${urlApi}/categorias`, categoriasRouter);

module.exports = app;
