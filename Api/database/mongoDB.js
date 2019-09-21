const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true }, err => {
  if (err) throw err;
  else console.log("Coneccion con mongoDB->utn establecida");
});

module.exports = mongoose;
