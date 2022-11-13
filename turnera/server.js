import express from 'express'
import CnxMongoDB from './model/cnxMongoDB.js'
import config from './config.js'
import  {DataRouter}  from './router/data.js'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


/*  app.get('/ping', (req,res) => {
    res.send('pong')
}) 
 */

app.use('/cineort/', new DataRouter().start())


if(config.DB == 'MONGO') {
    await CnxMongoDB.conectar()
}

const PORT = process.env.PORT || config.PORT
const server = app.listen(PORT, () => console.log("Servidor corriendo"))
server.on('error', error => console.log(error.message))
