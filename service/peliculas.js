import config from '../config.js'
import {PeliculasFactoryDAO} from '../model/DAO/peliculasFactory.js'

export class PeliculasService {
    constructor() {
        this.peliculasModel = PeliculasFactoryDAO.get(config.DB)
    }
    getPeliculas = async id => {
        return id? await this.peliculasModel.getPelicula(id) : await this.peliculasModel.getPeliculas()
    }
    savePelicula = async pelicula => {
        pelicula.duracion = parseInt(pelicula.duracion)
        pelicula.precio = parseInt(pelicula.precio)
        return await this.peliculasModel.savePelicula(pelicula)
    }
    updatePelicula = async (pelicula,id) => {
        return await this.peliculasModel.updatePelicula(pelicula,id)
    }
    deletePelicula = async id => {
        return await this.peliculasModel.deletePelicula(id)
    }
}