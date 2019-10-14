const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categoriasSchema = new schema(
    {
        categoria: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("categorias", categoriasSchema);
