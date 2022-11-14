import express from 'express'
import {ControladorPeliculas} from '../controller/peliculas.js'

export class RouterPeliculas {
    constructor() {
        this.router = express.Router()
        this.controladorPeliculas = new ControladorPeliculas()
    }
    start() {
        this.router.get('/:id?', this.controladorPeliculas.getPeliculas)
        this.router.get('/clasificacion/:c', this.controladorPeliculas.getPeliClasificacion)
        this.router.get('/genero/:g', this.controladorPeliculas.getPeliGenero)
        this.router.get('/precio/cara', this.controladorPeliculas.getPeliMasCara)
        this.router.get('/precio/barata', this.controladorPeliculas.getPeliMasBarata)
        this.router.get('/duracion/larga', this.controladorPeliculas.getPeliMasLarga)
        this.router.get('/duracion/corta', this.controladorPeliculas.getPeliMasCorta)
        this.router.post('/', this.controladorPeliculas.savePelicula)
        this.router.put('/:id', this.controladorPeliculas.updatePelicula)
        this.router.delete('/:id', this.controladorPeliculas.deletePelicula)
        return this.router
    }
}