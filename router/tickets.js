import express from "express";
import ControllerTicket from "../controller/tickets.js";

export class TicketRouter {
  constructor() {
    this.router = express.Router();
    this.ticketController = new ControllerTicket();
  }

  start() {
    this.router.get("/ultimoTicket", this.ticketController.obtenerUltimoTicket);
    this.router.get(
      "/mayorConsumo",
      this.ticketController.obtenerTicketMayorConsumo
    );
    this.router.get(
      "/menorConsumo",
      this.ticketController.obtenerTicketMenorConsumo
    );
    this.router.get("/:id?", this.ticketController.obtenerTicket);
    this.router.post("/", this.ticketController.crearTicket);

    return this.router;
  }
}
