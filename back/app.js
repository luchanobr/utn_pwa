var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongo = require("./database/mongoDB");

// API route

const urlApi = "/api/v1"

// End points 
var indexRouter = require('./routes/index');
const usuariosRouter = require("./routes/usuarios");
const productosRouter = require("./routes/productos");


var app = express();


// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Rutas
app.use('/', indexRouter);
app.use(`${urlApi}/usuarios`, usuariosRouter);
app.use(`${urlApi}/productos`, productosRouter);



module.exports = app;
