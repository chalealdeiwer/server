const {response} = require('express');
const Usuario =require("../models/usuario");
const bcryptjs = require("bcryptjs");

//http://localhost:8080/api/usuario?q=hola&&nombre=deiwer

const userGet=(req, res) => {
    const query=req.query
    res.json({
        msj: 'get-api',
        query
       
});
}
const userPost=async(req, res) => {
    const {nombre,correo,contraseña,rol}=req.body
    const usuario=new Usuario({nombre,correo,contraseña,rol})
    // verificar si el correo existe
    const correExiste= await Usuario.findOne({correo})
    if (correExiste) {
        return res.status(400).json({
            "msj": "Este email ya esta registrado"
        })
    }
    const salt=bcryptjs.genSaltSync()
    usuario.contraseña=bcryptjs.hashSync(contraseña,salt)
    // guardar en la db
    await usuario.save()
    res.json({
        msj: 'Post-api',
        usuario
});
}
const userPut=(req, res) => {
    const id=req.params
    res.json({
        msj: 'put-api',
        id
});
}
const userDelete=(req, res) => {
    res.json({
        msj: 'delete-api'
});
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}