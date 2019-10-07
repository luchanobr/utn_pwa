var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const pdf = require('express-pdf');

var app = express();

// middleware
app.set('views', './views');
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS,PACHT',
    allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization'
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(pdf);

//Rutas
app.use(require('./routes/routes'));

module.exports = app;
