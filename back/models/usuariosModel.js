const mongoose = require("../database/mongoDB");

const schema = mongoose.Schema;

const usuariosSchema = new schema({
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
 
},
{
    timestamps: true
});

module.exports = mongoose.model("usuarios", usuariosSchema);
