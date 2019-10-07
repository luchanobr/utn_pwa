const mongoose = require('mongoose');
require('dotenv').config();
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true }, err => {
  if (err) throw err;
  else console.log('Coneccion con mongoDB->utn establecida');
});

mongoosePaginate.paginate.options = {
  lean: true,
  limit: 10
};

mongoose.mongoosePaginate = mongoosePaginate;

module.exports = mongoose;
