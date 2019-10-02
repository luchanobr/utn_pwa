const bcrypt = require('bcrypt');

module.exports = {
  hashPassword: password => {
    return bcrypt.hashSync(password, 10);
  },

  checkUserPassword: (password1, user) => {
    return bcrypt.compareSync(password1, user.password);
  }
};
