import {PeliculasService} from '../service/peliculas.js'

export class ControladorPeliculas {
    constructor() {
        this.peliculasService = new PeliculasService()
    }
    getPeliculas = async (req,res) => {
        const { id } = req.params
        res.json( await this.peliculasService.getPeliculas(id) )
    }
    savePelicula = async (req,res) => {
        const pelicula = req.body
        res.json( await this.peliculasService.savePelicula(pelicula) )
    }
    updatePelicula = async (req,res) => {
        const { id } = req.params
        const pelicula = req.body
        res.json( await this.peliculasService.updatePelicula(pelicula,id) )
    }
    deletePelicula = async (req,res) => {
        const { id } = req.params
        res.json( await this.peliculasService.deletePelicula(id) )
    }
}