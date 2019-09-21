const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  setToken: id => {
    return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: "12h" });
  },
  verifyToken: token => {
    return jwt.verify(token, process.env.SECRET);
  }
};
