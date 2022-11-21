import config from "../config.js";
import TicketFactory from "../model/DAO/tickets/ticketsFactory.js";
import { PeliculasFactoryDAO } from "../model/DAO/peliculas/peliculasFactory.js";
import DataFactoryDAO from "../model/DAO/usuarios/dataFactory.js";
import main from "../utils/nodemail.js";

class ServiceTicket {
  constructor() {
    this.ticketDAO = TicketFactory.get(config.DB);
    this.peliDAO = PeliculasFactoryDAO.get(config.DB);
    this.usuarioDAO = DataFactoryDAO.get(config.DB);
  }

  obtenerTicket = async (id) => {
    return id
      ? await this.ticketDAO.obtenerTicket(id)
      : await this.ticketDAO.obtenerTickets();
  };

  obtenerTicketCompleto = async (id) => {
    const ticket = await this.ticketDAO.obtenerTicket(id);
    const pelicula = await this.peliDAO.getPelicula(ticket.idPelicula);

    const ticketCompleto = {
      ...pelicula,
      fechaDeCompra: ticket.fecha,
    };
  };

  obtenerUltimoTicket = async () => {
    const tickets = await this.obtenerTicket();
    const ultimoTicket = tickets.length - 1;
    return tickets[ultimoTicket];
  };

  obtenerTicketMayorConsumo = async () => {
    const tickets = await this.obtenerTicket();

    if (tickets.length == 0) {
      return null;
    }
    let fechas = [];

    tickets.forEach((t) => fechas.push(t.fecha.setHours(0, 0, 0, 0)));

    const fecha = fechas.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    const mayorConsumo = Object.keys(fecha).reduce((a, b) =>
      fecha[a] > fecha[b] ? a : b
    );

    return new Date(parseInt(mayorConsumo));
  };

  obtenerTicketMenorConsumo = async () => {
    const tickets = await this.obtenerTicket();

    if (tickets.length == 0) {
      return null;
    }
    let fechas = [];

    tickets.forEach((t) => fechas.push(t.fecha.setHours(0, 0, 0, 0)));

    const fecha = fechas.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    const menorConsumo = Object.keys(fecha).reduce((a, b) =>
      fecha[a] < fecha[b] ? a : b
    );

    return new Date(parseInt(menorConsumo));
  };

  crearTicket = async (ticket) => {
    await this.ticketDAO.crearTicket(ticket);
    const usuario = await this.usuarioDAO.getData(ticket.idUsuario);
    if (ticket.length === undefined) {
      await main(usuario.email).catch(console.error);
    }
    return this.obtenerTicketCompleto(ticket._id);
  };

  /*  actualizarTicket = async (ticket,id) => {
        return await this.ticketDAO.actualizarTicket(ticket,id)
    }

    eliminarTicket = async id => {
        return await this.ticketDAO.eliminarTicket(id)
    } */
}

export default ServiceTicket;
