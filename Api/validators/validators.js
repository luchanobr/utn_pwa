const { body, check, param } = require("express-validator");

module.exports = {
    checkParamId: id => {
        return param(id)
            .exists()
            .withMessage("Id required.")
            .bail()
            .isMongoId()
            .withMessage("El id es invalido")
            .escape();
    },

    checkLogin: (email, pass) => {
        return (
            body(email)
                .exists()
                .withMessage("Email required.")
                .bail()
                .isEmail()
                .withMessage("El email es de formato invalido.")
                .escape(),
            body(pass)
                .exists()
                .withMessage("Password required.")
                .bail()
                .isLength({ min: 3, max: 15 })
                .withMessage("El password debe ser entre 3 y 15 caracteres de largo")
                .escape()
        );
    },

    checkUsuario: (
        nombre,
        email,
        pass,
        direccion,
        numero,
        piso,
        localidad,
        provincia,
        codigoPostal
    ) => {
        return (
            body(nombre)
                .exists()
                .withMessage("Nombre required.")
                .bail()
                .isLength({ min: 3, max: 20 })
                .withMessage("El nombre debe tener entre 3 y 20 caracteres de largo.")
                .escape(),
            body(email)
                .exists()
                .withMessage("Email required.")
                .bail()
                .isEmail()
                .withMessage("El email es de formato invalido.")
                .escape(),
            body(pass)
                .exists()
                .withMessage("Password required.")
                .bail()
                .isLength({ min: 3, max: 15 })
                .withMessage("El password debe ser entre 3 y 15 caracteres de largo")
                .escape(),
            body(direccion)
                .exists()
                .withMessage("Direccion required.")
                .isLength({ min: 3, max: 25 })
                .withMessage("Ña direccion debe tener entre 3 y 25 caracteres de largo")
                .escape(),
            body(numero)
                .exists()
                .withMessage("Número required.")
                .bail()
                .isInt()
                .withMessage("El número debe ser un entero")
                .escape(),
            body(piso)
                .exists()
                .withMessage("Piso required.")
                .bail()
                .isLength({ max: 20 })
                .withMessage("El piso no debe superar los 20 caracteres de largo.")
                .escape(),
            body(localidad)
                .exists()
                .withMessage("Localidad required.")
                .bail()
                .isLength({ max: 20 })
                .withMessage("La localidad no debe superar los 20 caracteres de largo.")
                .escape(),
            body(provincia)
                .exists()
                .withMessage("Provincia required.")
                .bail()
                .isLength({ max: 20 })
                .withMessage("La provincia no debe superar los 20 caracteres de largo.")
                .escape(),
            body(codigoPostal)
                .exists()
                .withMessage("Codigo postal required.")
                .bail()
                .isLength({ max: 20 })
                .withMessage("El codigo postal no debe superar los 20 caracteres de largo.")
                .escape()
        );
    },

    checkId: id => {
        return body(id)
            .exists()
            .withMessage("Id required.")
            .bail()
            .isMongoId()
            .withMessage("El id es invalido")
            .escape();
    },

    checkEmail: email => {
        return body(email)
            .optional()
            .isEmail()
            .withMessage("El email es de formato invalido.")
            .escape();
    },

    checkPassword: pass => {
        return body(pass)
            .optional()
            .isLength({ min: 3, max: 15 })
            .withMessage("El password debe ser entre 3 y 15 caracteres de largo")
            .escape();
    },

    checkNombre: nombre => {
        return body(nombre)
            .optional()
            .isLength({ min: 3, max: 20 })
            .withMessage("El nombre debe tener entre 3 y 20 caracteres de largo.")
            .escape();
    },

    checkNombreProducto: nombre => {
        return body(nombre)
            .exists()
            .withMessage("Nombre required.")
            .bail()
            .isLength({ min: 3, max: 100 })
            .withMessage("El nombre del producto debe tener entre 3 y 20 caracteres de largo.")
            .escape();
    },

    checkBoolean: boolean => {
        return body(boolean)
            .isBoolean()
            .withMessage(`${boolean} debe ser un valor booleano`)
            .escape();
    },

    checkDestacado: boolean => {
        return body(boolean)
            .isBoolean()
            .withMessage("El destacado debe ser un valor booleano")
            .escape();
    },

    checkAlphanumeric: alphanumeric => {
        return body(alphanumeric)
            .isAlphanumeric()
            .withMessage(`${alphanumeric} debe ser un valor alphanumerico`)
            .escape();
    },

    checkDescripcion: alphanumeric => {
        return body(alphanumeric)
            .exists()
            .withMessage("Descripción required.")
            .bail()
            .escape();
    },

    checkDireccion: alphanumeric => {
        return body(alphanumeric)
            .isLength({ min: 3, max: 20 })
            .withMessage("La direccion debe tener entre 3 y 20 caracteres de largo.")
            .escape();
    },
    checkPiso: alphanumeric => {
        return body(alphanumeric)
            .isLength({ max: 20 })
            .withMessage("El piso no debe superar los 20 caracteres de largo.")
            .escape();
    },

    checkLocalidad: alphanumeric => {
        return body(alphanumeric)
            .isLength({ max: 20 })
            .withMessage("La localidad no debe superar los 20 caracteres de largo.")
            .escape();
    },

    checkProvincia: alphanumeric => {
        return body(alphanumeric)
            .isLength({ max: 20 })
            .withMessage("La provincia no debe superar los 20 caracteres de largo.")
            .escape();
    },

    checkCodigoPostal: alphanumeric => {
        return body(alphanumeric)
            .isLength({ max: 20 })
            .withMessage("El codigo postal no debe superar los 20 caracteres de largo.")
            .escape();
    },

    checkInt: integer => {
        return body(integer)
            .isInt()
            .withMessage(`${integer} debe ser un número entero`)
            .escape();
    },

    checkNumero: integer => {
        return body(integer)
            .isInt()
            .withMessage("El número debe ser un entero")
            .escape();
    },

    checkStock: integer => {
        return body(integer)
            .exists()
            .withMessage("Stock required.")
            .bail()
            .isInt()
            .withMessage("El stock debe ser un entero")
            .escape();
    },

    checkFloat: float => {
        return body(float)
            .isFloat()
            .withMessage(`${float} debe ser un numero`)
            .escape();
    },

    checkPrecio: float => {
        return body(float)
            .exists()
            .withMessage("Precio required.")
            .bail()
            .isFloat()
            .withMessage("El precio debe ser un número")
            .escape();
    },

    checkUrl: url => {
        return body(url)
            .exists()
            .withMessage("URL required.")
            .bail()
            .isURL()
            .withMessage(`${url} debe ser una URL válida`);
    },

    checkCategoria: categoria => {
        return body(categoria)
            .exists()
            .withMessage("Categoria required.")
            .bail()
            .isMongoId()
            .withMessage("Categoria invalida")
            .escape();
    },
    checkTotal: total => {
        return body(total)
            .exists()
            .withMessage("Total required.")
            .bail()
            .isFloat()
            .withMessage("El total debe ser un número")
            .escape();
    },
    checkToken: token => {
        return param("token")
            .exists()
            .withMessage("Token required.")
            .bail()
            .isJWT()
            .withMessage("Token invalido.");
    }
};
