const { body, check, param } = require("express-validator");

module.exports = {
  checkId: id => {
    return param(id)
      .exists()
      .withMessage("Id required.")
      .bail()
      .isMongoId()
      .withMessage("El id es invalido")
      .escape();
  },

  checkEmail: email => {
    return body(email)
      .exists()
      .withMessage("Email required.")
      .bail()
      .isEmail()
      .withMessage("El email es de formato invalido.")
      .escape();
  },

  checkPassword: pass => {
    return body(pass)
      .exists()
      .withMessage("Password required.")
      .bail()
      .isLength({ min: 3, max: 15 })
      .withMessage("El password debe ser entre 3 y 15 caracteres de largo")
      .escape();
  },

  checkNombre: nombre => {
    return body(nombre)
      .exists()
      .withMessage("Nombre required.")
      .bail()
      .isAlphanumeric()
      .withMessage("El nombre debe ser alphanumerico")
      .isLength({ min: 3, max: 20 })
      .withMessage("El nombre debe tener entre 3 y 20 caracteres de largo.")
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
      .isAlphanumeric()
      .withMessage("La direccion debe ser alphanumerica")
      .escape();
  },
  checkPiso: alphanumeric => {
    return body(alphanumeric)
      .isAlphanumeric()
      .withMessage("EL piso debe ser alphanumerico")
      .escape();
  },

  checkLocalidad: alphanumeric => {
    return body(alphanumeric)
      .exists()
      .withMessage("Localidad required.")
      .bail()
      .isAlphanumeric()
      .withMessage("La localidad debe ser alphanumerica")
      .escape();
  },

  checkProvincia: alphanumeric => {
    return body(alphanumeric)
      .isAlphanumeric()
      .withMessage("La provincia debe ser alphanumerica")
      .escape();
  },

  checkCodigoPostal: alphanumeric => {
    return body(alphanumeric)
      .isAlphanumeric()
      .withMessage("El codigo postal debe ser alphanumerico")
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
      .exists()
      .withMessage("Número required.")
      .bail()
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
      .withMessage(`${url} debe ser una URL válida`)
      .escape();
  }
};
