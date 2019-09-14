const mongoose = require("../database/mongoDB");

const schema = mongoose.Schema;

const usuariosSchema = new schema({
  nombre: {
      type: String,
      required: true,
      minlength: 3
  },
  email: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: 1,
  }
  password: {
      type: String,
      required: true
  }
  
  
});

module.exports = mongo.model("usuarios", usuariosSchema);