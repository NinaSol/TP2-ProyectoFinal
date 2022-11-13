import express from 'express'
import {ControladorPeliculas} from '../controller/peliculas.js'

export class RouterPeliculas {
    constructor() {
        this.router = express.Router()
        this.controladorPeliculas = new ControladorPeliculas()
    }
    start() {
        this.router.get('/:id?', this.controladorPeliculas.getPelicula)
        this.router.post('/', this.controladorPeliculas.savePeliculas)
        this.router.put('/:id', this.controladorPeliculas.updatePeliculas)
        this.router.delete('/:id', this.controladorPeliculas.deletePeliculas)
        return this.router
    }
}