const UsuariosServicies = require('../services/usuariosServices.js');
const jwt = require('../functions/jwt');
const brcrypt = require('../functions/bcrypt');
const { validationResult } = require('express-validator');
const error = require('../errors/errorClass');
const errorHandler = require('../errors/errorHandler');

module.exports = {
  login: async (req, res, next) => {
    try {
      validationResult(req).throw();
      const { email, password } = req.body;
      let user = await UsuariosServicies.checkUserMail(email);
      if (!user) {
        throw new error.UnauthorizedError(email, 'Mail no registrado', 'email', 'body');
      }
      if (!brcrypt.checkUserPassword(password, user)) {
        throw new error.BadRequestError(password, 'Password incorrecto', 'password', 'body');
      } else {
        const token = jwt.setToken(user._id);
        res.status(200).json({ data: { id: user._id, nombre: user.nombre, admin: user.admin }, token: token });
      }
    } catch (e) {
      errorHandler(res, e);
    }
  }
};
