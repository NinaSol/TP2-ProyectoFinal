import express from 'express'
import ControllerTicket from '../controller/tickets.js'


export class TicketRouter {
    constructor() {
        this.router = express.Router()
        this.ticketController = new ControllerTicket()
    }

    start() {
        this.router.get('/:id?', this.ticketController.obtenerTicket)
        this.router.get('/', this.ticketController.obtenerTicket)
        this.router.get('/ultimoTicket', this.ticketController.obtenerUltimoTicket)
        this.router.get('/diaMayorConsumo', this.ticketController.obtenerTicketMayorConsumo)
        this.router.get('/diaMenorConsumo', this.ticketController.obtenerTicketMenorConsumo)
        this.router.post('/', this.ticketController.crearTicket)
        //this.router.put('/:id', this.ticketController.actualizarTicket)
        //this.router.delete('/:id', this.ticketController.eliminarTicket)

        return this.router
    }
}

