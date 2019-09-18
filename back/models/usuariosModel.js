const mongoose = require("../database/mongoDB");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const direccionModel = new schema({
  direccion: String,
  numero: Number,
  piso: String,
  localidad: String,
  provincia: String,
  codigoPostal: String
});

const usuariosSchema = new schema(
  {
    nombre: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    active: {
      type: Boolean,
      default: 1
    },
    password: {
      type: String,
      required: true
    },
    direccion: {
      type: [direccionModel],
      required: true
    }
  },
  {
    timestamps: true
  }
);
usuariosSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("usuarios", usuariosSchema);
