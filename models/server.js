const express = require('express')
const cors = require('cors')
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath='/api/usuario';
        this.middleware();
        this.routes();
    }
    middleware(){
        //Cors
        this.app.use(cors());
        //directorio publico
        this.app.use(express.static('public'));
        //lectura y parseo del body
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.usuarioPath,require('../routes/user'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }

}


module.exports = Server;