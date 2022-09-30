const {Router} = require('express');
const { check } = require('express-validator');
const { userGet, userPost, userPut, userDelete } = require('../controllers/user');
const { esRolValido } = require('../helpers/db-validators');

const router=Router();
router.get('/', userGet);
router.post('/',[
    check('correo','El correo no es valido').isEmail(),
    check('contraseña','El pswd debe contener como minimo 6 letras').isLength({min:6}),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    //check('rol','No es un rol valido').isIn(['ADMIN_ROL','USER_ROL'])
    check('rol').custom(esRolValido)

],userPost);
router.put('/:id', userPut);
router.delete('/',userDelete);

module.exports= router