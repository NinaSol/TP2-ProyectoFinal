import express from "express";
import ControladorFunciones from "../controller/funciones.js";

export class FuncionesRouter {
  constructor() {
    this.router = express.Router();
    this.funcionesController = new ControladorFunciones();
  }

  start() {
    /* -----------------------------------FUNCIONES----------------------------------------- */

    /* ------------OBTENER INFO----------------------------- */
    this.router.get("/", this.funcionesController.getFunciones);
    this.router.get("/obtenerPorFecha/:fecha",this.funcionesController.getFuncionesPorFecha);
    this.router.get("/obtenerPorPelicula/:id",this.funcionesController.getFuncionesPorPelicula);
    this.router.get("/masVendida",this.funcionesController.getFuncionsMasVendida);
    this.router.get("/menosVendida", this.funcionesController.getFuncionsmenosVendida);
    this.router.get("/calcularCapacidad/:nro",this.funcionesController.calcularCapacidad);
    this.router.get("/:id", this.funcionesController.getFunciones);
    this.router.get("/comprar/:id", this.funcionesController.comprar);

    /* ------------CREAR FUNCION----------------------------- */
    this.router.post("/", this.funcionesController.saveFuncion);
    /* ------------EDITAR FUNCION----------------------------- */
    this.router.put("/:id", this.funcionesController.updateFuncion);
    /* ------------BORRAR FUNCION----------------------------- */
    this.router.delete(
      "/:id",
      this.funcionesController.deleteFuncion
    );

    /* ------------------------------------------------------------------------------------- */

    return this.router;
  }
}
