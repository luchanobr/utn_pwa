const usuariosServicies = require("../shared/usuariosServices");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  jwtVerify: async (req, res, next) => {
    try {
      const bearer = req.headers["authorization"].split(" ");
      const token = bearer[1];
      const userToken = jwt.verify(token, process.env.SECRET);
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
  }
};
