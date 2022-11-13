import express from 'express'
import CnxMongoDB from './model/cnxMongoDB.js'
import config from './config.js'
import  {TicketRouter}  from './router/tickets.js'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/tickets', new TicketRouter().start())


if(config.DB == 'MONGO') {
    await CnxMongoDB.conectar()
}

const PORT = process.env.PORT || config.PORT
const server = app.listen(PORT, () => console.log("Servidor corriendo"))
server.on('error', error => console.log(error.message))
