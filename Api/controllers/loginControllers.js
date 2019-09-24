const UsuariosServicies = require("../services/usuariosServices.js");
const jwt = require("../functions/jwt");
const brcrypt = require("../functions/bcrypt");
const { validationResult } = require("express-validator");

module.exports = {
  login: async (req, res, next) => {
    try {
      validationResult(req).throw();
      const { email, password } = req.body;
      let user = await UsuariosServicies.checkUserMail(email);
      if (!user) {
        res.status(400).json({
          error: {
            value: email,
            msg: "Email no registrado",
            param: "email",
            location: "body"
          }
        });
      }
      if (!brcrypt.checkUserPassword(password, user)) {
        res.status(401).json({
          error: {
            value: password,
            msg: "Password incorrecto",
            param: "password",
            location: "body"
          }
        });
      } else {
        const token = jwt.setToken(user._id);
        res.status(200).json({ data: { id: user._id, nombre: user.nombre, admin: user.admin }, token: token });
      }
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  }
};
