import express from 'express'
import ControladorFunciones from '../controller/funciones.js'


export class DataRouter {
    constructor() {
        this.router = express.Router()
        this.funcionesController = new ControladorFunciones()
    }

    start() {

        /* -----------------------------------FUNCIONES----------------------------------------- */

        /* ------------OBTENER INFO----------------------------- */
        this.router.get('/funciones', this.funcionesController.getFunciones)
        this.router.get('/funcionesPorFecha/:fecha', this.funcionesController.getFuncionesPorFecha)
        this.router.get('/funcionMasVendida', this.funcionesController.getFuncionsMasVendida)
        this.router.get('/funcionMenosVendida', this.funcionesController.getFuncionsmenosVendida)
        this.router.get('/calcularCapacidad/:nro', this.funcionesController.calcularCapacidad)
        this.router.get('/funciones/:id', this.funcionesController.getFunciones)
        
        /* ------------CREAR FUNCION----------------------------- */
        this.router.post('/funciones/', this.funcionesController.saveFuncion)
        /* ------------EDITAR FUNCION----------------------------- */
        this.router.put('/funciones/:id', this.funcionesController.updateFuncion)
        /* ------------BORRAR FUNCION----------------------------- */
        this.router.delete('/funciones/:id', this.funcionesController.deleteFuncion)
        
        /* ------------------------------------------------------------------------------------- */


        return this.router
    }
}

