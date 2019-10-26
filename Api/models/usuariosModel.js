const mongoose = require("../database/mongoDB");
const schema = mongoose.Schema;
const bcrypt = require("../functions/bcrypt");

const direccionModel = new schema({
    direccion: String,
    numero: Number,
    piso: String,
    localidad: String,
    provincia: String,
    codigoPostal: String
});

const permisosModel = new schema({
    productos: {
        type: String,
        default: null
    },
    compras: {
        type: String,
        default: null
    },
    usuarios: {
        type: String,
        default: null
    }
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
            unique: true,
            index: true
        },
        active: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: true
        },
        direccion: {
            type: [direccionModel],
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        admin: {
            type: Boolean,
            default: false
        },
        permisos: {
            type: permisosModel,
            default: {
                productos: null,
                compras: null,
                usuarios: null
            }
        }
    },
    {
        timestamps: true
    }
);
usuariosSchema.pre("save", function(next) {
    this.password = bcrypt.hashPassword(this.password);
    next();
});

usuariosSchema.plugin(mongoose.mongoosePaginate);

module.exports = mongoose.model("usuarios", usuariosSchema);
