import express from 'express'
import {CnxMongoDB} from './model/cnxMongoDB.js'
import config from './config.js'
import {RouterPeliculas} from './router/peliculas.js'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/cineort/peliculas', new RouterPeliculas().start())

if(config.DB == 'MONGO') {
    await CnxMongoDB.conectar()
}

const PORT = process.env.PORT || config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))