const mongoose = require("../database/mongoDB");
const Schema = mongoose.Schema;

const productosSchema = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    precio: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    destacado: {
      type: Boolean,
      default: 0,
      required: true
    },
    active: {
      type: Boolean,
      default: 1,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = {
  productoModel: mongoose.model("productos", productosSchema),
  productosSchema: productosSchema
};
