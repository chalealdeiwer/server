const mongoose=require("mongoose")



const dbConection =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_CNN,{
        })
        console.log("Conexión exitosa")
    } catch (error) {
        console.log("erro al iniciar la db",error)
        throw new Error("Error al iniciar la db")
    }

}

module.exports={
    dbConection
}