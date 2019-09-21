const UsuariosServicies = require("../shared/usuariosServices.js");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      let user = await UsuariosServicies.checkUserMail(email);
      if (!UsuariosServicies.checkUserPassword(password, user)) {
        throw new Error("password error");
      } else {
        const token = UsuariosServicies.setToken(user._id);
        res.status(200).json({ user: { _id: user._id, nombre: user.nombre }, token: token });
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: e });
    }
  }
};
