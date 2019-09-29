const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.HOSTMAIL,
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILACCOUNT,
    pass: process.env.MAILPASSWORD
  }
});

module.exports = {
  sendEmailNewUser: async (user, token) => {
    try {
      let email = await transporter.sendMail({
        from: '"Wyxic team" <wyxic.app@gmail.com>',
        to: user.email,
        subject: 'Wellcome to Wyxic',
        text: 'Wellcome to Wyxic',
        html: `
        <html>
        <head>
        </head>
        <body>
        <h1> Wellcome ${user.nombre} to Wyxic</h1>
        <p> Please click on this <a href='http://localhost:3000/api/v1/usuarios/activate/${token}'>link</a> to activate your account.</p>
        </body>
        </html>
        `
      });
      return email;
    } catch (e) {
      return e;
    }
  },
  sendEmailResetPass: async (user, token) => {
    try {
      let email = await transporter.sendMail({
        from: '"Wyxic team" <wyxic.app@gmail.com>',
        to: user.email,
        subject: 'Reset password',
        text: 'Reset password',
        html: `
            <html>
            <head>
            </head>
            <body>
            <h1> Hello ${user.nombre}</h1>
            <p> To reset your password follow the next <a href='http://localhost:3000/api/v1/usuarios/resetpassword/${token}'>link</a>.</p>
            </body>
            </html>
            `
      });
      return email;
    } catch (e) {
      return e;
    }
  }
};
