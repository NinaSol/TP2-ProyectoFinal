import express from "express";
import dataController from "../controller/usuarios.js";

export class UsuariosRouter {
  constructor() {
    this.router = express.Router();
    this.dataController = new dataController();
  }

  start() {
    this.router.get("/mayores", this.dataController.getMayores);
    this.router.get("/menores", this.dataController.getMenores);
    this.router.get("/mejorcliente", this.dataController.getMejor);
    this.router.get("/:id/mispeliculas", this.dataController.getPeliculas);
    this.router.get("/:nombre", this.dataController.getNomb);
    this.router.get("/:id?", this.dataController.getData);
    this.router.post("/", this.dataController.saveData);
    this.router.post("/validar", this.dataController.validarUsuario);
    this.router.put("/:id", this.dataController.updatePelicula);
    this.router.put("/:id", this.dataController.updateData);
    this.router.delete("/:id", this.dataController.deleteData);

    return this.router;
  }
}
