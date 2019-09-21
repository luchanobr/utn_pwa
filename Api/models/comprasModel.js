const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productosModel = require("./productosModel");
const productoSchema = productosModel.productosSchema;

const comprasSchema = new schema(
  {
    usuario: {
      type: schema.Types.ObjectId,
      ref: "usuarios"
    },
    productos: {
      type: [productoSchema],
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("compras", comprasSchema);
