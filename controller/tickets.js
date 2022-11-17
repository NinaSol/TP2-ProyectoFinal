import ServiceTicket from "../service/ticket.js";

class ControllerTicket {
  constructor() {
    this.serviceTicket = new ServiceTicket();
  }

  obtenerTicket = async (req, res) => {
    const { id } = req.params;
    res.json(await this.serviceTicket.obtenerTicket(id));
  };

  obtenerUltimoTicket = async (req, res) => {
    res.json(await this.serviceTicket.obtenerUltimoTicket());
  };

  obtenerTicketMayorConsumo = async (req, res) => {
    res.json(await this.serviceTicket.obtenerTicketMayorConsumo());
  };

  obtenerTicketMenorConsumo = async (req, res) => {
    res.json(await this.serviceTicket.obtenerTicketMenorConsumo());
  };

  crearTicket = async (req, res) => {
    const ticket = req.body;
    res.json(await this.serviceTicket.crearTicket(ticket));
  };

  /*   actualizarTicket = async (req,res) => {
        const { id } = req.params
        const ticket = req.body
    
        res.json(await this.serviceTicket.actualizarTicket(ticket,id))
    }

    eliminarTicket = async (req,res) => {
        const { id } = req.params
    
        res.json(await this.serviceTicket.eliminarTicket(id))
    } */
}

export default ControllerTicket;
