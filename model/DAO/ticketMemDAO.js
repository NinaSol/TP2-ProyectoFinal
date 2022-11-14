class TicketMemDAO {
  constructor() {
    this.tickets;
  }

  obtenerTicket = (id) => {
    return this.tickets.find((t) => t.id == id);
  };

  obtenerTickets = () => {
    return this.tickets;
  };

  crearTicket = (ticket) => {
    const id = parseInt(this.tickets[this.tickets.length - 1].id) + 1;
    ticket.id = String(id);

    this.tickets.push(ticket);

    return ticket;
  };

  /*   actualizarTicket = (ticket, id) => {
    ticket.id = id;
    const index = this.tickets.findIndex((ticket) => ticket.id == id);
    this.tickets.splice(index, 1, ticket);

    return ticket;
  };

  eliminarTicket = (id) => {
    const index = this.tickets.findIndex((ticket) => ticket.id == id);

    const ticket = this.tickets.splice(index, 1)[0];

    return ticket;
  }; */
}

export default TicketMemDAO;
