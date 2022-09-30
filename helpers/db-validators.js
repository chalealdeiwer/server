const Role =require("../models/role")

const esRolValido=async(rol='')=>{
    const exiteRol= await Rol.findOne({rol})
    if(!exiteRol){
        throw new Error(`El rol${rol} no esta en la BD`)
    }
}
module.exports={esRolValido}