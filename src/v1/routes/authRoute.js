const { Router } = require('express');
const { postUser, login, renewToken } = require('../../controllers/authController');
const { check } = require('express-validator');
const { validarCampos } = require('../../middlewares/validarCampos');
const { validarJWT } = require('../../middlewares/validarJWT');


const router = Router();

router.post('/AddUsers', [
    check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
    check('usuario', 'El usuario es Obligatorio').not().isEmpty(),
    check('password', 'El password es Obligatorio').not().isEmpty(),
    check('nivelacceso', 'El nivel de acceso es Obligatorio').not().isEmpty(),
    check('email', 'El correo es Obligatorio').isEmail(),
    check('sucursal', 'La sucursal es Obligatorio').not().isEmpty(),
    check('puesto', 'El puesto es Obligatorio').not().isEmpty(),
    check('fechaacceso', 'La fecha de acceso es Obligatorio').not().isEmpty(),
    validarCampos], postUser
)

    .post('/', [
        check('usuario', 'El usuario es Obligatorio').not().isEmpty(),
        check('password', 'El password es Obligatorio').not().isEmpty(),
        validarCampos], login)

    .get('/renew', validarJWT, renewToken)

module.exports = router;