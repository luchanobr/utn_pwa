const express = require('express');
const router = express.Router();
const usuariosControllers = require('../controllers/usuariosControllers');
const { sanitizeParam } = require('express-validator');
const validators = require('../validators/validators');

router.get('/', usuariosControllers.findAll);
router.get('/:id', [validators.checkParamId('id')], usuariosControllers.findOne);
router.post(
  '/',
  [
    validators.checkNombre('nombre'),
    validators.checkEmail('email'),
    validators.checkPassword('password'),
    validators.checkDireccion('direccion.*.direccion'),
    validators.checkPiso('direccion.*.piso'),
    validators.checkLocalidad('direccion.*.localidad'),
    validators.checkProvincia('direccion.*.provincia'),
    validators.checkCodigoPostal('direccion.*.codigoPostal'),
    validators.checkNumero('direccion.*.numero')
  ],
  usuariosControllers.create
);
router.put(
  '/:id',
  [
    validators.checkParamId('id'),
    validators.checkNombre('nombre'),
    validators.checkEmail('email'),
    validators.checkPassword('password'),
    validators.checkDireccion('direccion.*.direccion'),
    validators.checkPiso('direccion.*.piso'),
    validators.checkLocalidad('direccion.*.localidad'),
    validators.checkProvincia('direccion.*.provincia'),
    validators.checkCodigoPostal('direccion.*.codigoPostal'),
    validators.checkNumero('direccion.*.numero')
  ],
  usuariosControllers.update
);
router.delete('/:id', [validators.checkParamId('id')], usuariosControllers.remove);
router.get('/activate/:token', [validators.checkToken('token')], usuariosControllers.activateOne);
router.post('/resetpassword', [validators.checkEmail('email')], usuariosControllers.emailResetPassword);
router.put('/resetpassword/:token', [validators.checkToken('token')], usuariosControllers.updatePassword);

module.exports = router;
