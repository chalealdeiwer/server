const { Schema, model } = require("mongoose");

const UsuarioSchema= Schema({
    nombre: {
        type: String,
        required:[true,"El nombre es obligatorio"]
    },
    correo:{
        type: String,
        required:[true,"El correo es obligatorio"],
        unique:true
    },
    contraseña:{
        type:String,
        required:[true, "La contraseña es obligatoria"]
    },
    estado:{
        type:Boolean,
        default:true
    },
    rol:{
        type:String,
        required:true,
        emun: ['ADMIN_ROLE','USER_ROLE']
    },
    google:{
        type:Boolean,
        default:false
    }

})
UsuarioSchema.methods.toJSON=function(){
    const {contraseña, __v, ...varUsuario}=this.to.Object()
    return varUsuario
}
module.exports=model('Usuario',UsuarioSchema)