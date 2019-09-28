const express = require('express');
const router = express.Router();
const comprasControllers = require('../controllers/comprasControllers');
const auth = require('../guards/auth');
const validators = require('../validators/validators');

router.get('/', auth.adminAuth, comprasControllers.findAll);
router.get('/:id', [validators.checkParamId('id')], auth.userAuth, comprasControllers.findOne);
router.post(
  '/',
  [
    validators.checkId('usuario'),
    validators.checkTotal('total'),
    validators.checkId('productos.*._id'),
    validators.checkNombreProducto('productos.*.nombre'),
    validators.checkDescripcion('productos.*.descripcion'),
    validators.checkPrecio('productos.*.precio'),
    validators.checkCategoria('productos.*.categoria')
  ],
  auth.userAuth,
  comprasControllers.create
);

module.exports = router;
