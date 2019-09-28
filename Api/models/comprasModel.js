const mongoose = require('mongoose');
const schema = mongoose.Schema;
const moment = require('moment');
const productosModel = require('./productosModel');
const productoSchema = productosModel.productosSchema;
const direccionModel = new schema({
  direccion: String,
  numero: Number,
  piso: String,
  localidad: String,
  provincia: String,
  codigoPostal: String
});

const comprasSchema = new schema(
  {
    usuario: {
      type: schema.Types.ObjectId,
      ref: 'usuarios'
    },
    productos: {
      type: [productoSchema],
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    direccion: {
      type: direccionModel,
      required: true
    },
    fecha: {
      type: Date,
      required: true,
      default: moment(new Date())
        .add(2, 'd')
        .utc()
    },
    hora: {
      type: [Date],
      required: true,
      default: [
        moment(new Date())
          .set({ 'hour': 9, 'minute': 0 })
          .utc(),
        moment(new Date())
          .set({ 'hour': 18, 'minute': 0 })
          .utc()
      ]
    }
  },
  {
    timestamps: true
  }
);
comprasSchema.plugin(mongoose.mongoosePaginate);

module.exports = mongoose.model('compras', comprasSchema);
