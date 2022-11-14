import config from "../config.js";
import TicketFactory from "../model/DAO/ticketsFactory.js";

class ServiceTicket {
  constructor() {
    this.ticketDAO = TicketFactory.get(config.DB);
  }

  obtenerTicket = async (id) => {
    return id
      ? await this.ticketDAO.obtenerTicket(id)
      : await this.ticketDAO.obtenerTickets();
  };

  obtenerUltimoTicket = async () => {
    const tickets = this.obtenerTicket;
    const ultimoTicket = tickets.length - 1;
    return tickets[ultimoTicket];
  };

  obtenerTicketMayorConsumo = async () => {
    const tickets = this.obtenerTicket;

    if (tickets.length == 0) {
      return null;
    }
    let fechas = []

    tickets.forEach(t => fechas.push(t.fecha.getTime()));
    
    
    const mayorConsumo = [...fechas.reduce((r, n) => // mapa de ocurrencias
        r.set(n, (r.get(n) || 0) + 1), new Map()
      )]
      .reduce((r, v) => v[1] > r[1] ? v : r)[0]; // item que aparece la menor cantidad de veces
    
    
    return new Date(mayorConsumo);
  };

  obtenerTicketMenorConsumo = async () => {
    const tickets = this.obtenerTicket;

    if (tickets.length == 0) {
      return null;
    }
    let fechas = []

    tickets.forEach(t => fechas.push(t.fecha.getTime()));
    
    
    const menorConsumo = [...fechas.reduce((r, n) => // mapa de ocurrencias
        r.set(n, (r.get(n) || 0) + 1), new Map()
      )]
      .reduce((r, v) => v[1] < r[1] ? v : r)[0]; // item que aparece la mayor cantidad de veces
    
    
    return new Date(menorConsumo);
  }

  crearTicket = async (ticket) => {
    return await this.ticketDAO.crearTicket(ticket);
  };

  /*  actualizarTicket = async (ticket,id) => {
        return await this.ticketDAO.actualizarTicket(ticket,id)
    }

    eliminarTicket = async id => {
        return await this.ticketDAO.eliminarTicket(id)
    } */
}

export default ServiceTicket;
