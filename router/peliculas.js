import express from 'express'
import {ControladorPeliculas} from '../controller/peliculas.js'

export class RouterPeliculas {
    constructor() {
        this.router = express.Router()
        this.controladorPeliculas = new ControladorPeliculas()
    }
    start() {
        this.router.get('/:id?', this.controladorPeliculas.getPeliculas)
        this.router.post('/', this.controladorPeliculas.savePelicula)
        this.router.put('/:id', this.controladorPeliculas.updatePelicula)
        this.router.delete('/:id', this.controladorPeliculas.deletePelicula)
        return this.router
    }
}