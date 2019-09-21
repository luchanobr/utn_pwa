const usuariosServicies = require("../services/usuariosServices");
const jwt = require("../functions/jwt");

module.exports = {
  userAuth: async (req, res, next) => {
    try {
      const bearer = req.headers["authorization"].split(" ");
      const token = bearer[1];
      const userToken = jwt.verifyToken(token);
      const user = await usuariosServicies.findOne(userToken.id);
      if (!user) {
        return res.status(401).json({ error: "usuario no autorizado" });
      } else {
        req.body.user = user;
        next();
      }
    } catch (e) {
      console.log(e);
      return res.status(401).json({ error: "usuario no autorizado" });
    }
  },
  adminAuth: async (req, res, next) => {
    try {
      const bearer = req.headers["authorization"].split(" ");
      const token = bearer[1];
      const userToken = jwt.verifyToken(token);
      const user = await usuariosServicies.findOne(userToken.id);
      if (!user || user.admin == false) {
        return res.status(401).json({ error: "usuario no autorizado" });
      } else {
        req.body.user = user;
        next();
      }
    } catch (e) {
      console.log(e);
      return res.status(401).json({ error: "usuario no autorizado" });
    }
  }
};
