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
    getPeliClasificacion = async clasificacion => {
        const peliculas = await this.peliculasModel.getPeliculas()
        const resultado = peliculas.filter(pelicula => pelicula.clasificacion == clasificacion)
        return resultado
    }
    getPeliGenero = async genero => {
        const peliculas = await this.peliculasModel.getPeliculas()
        const resultado = peliculas.filter(pelicula => pelicula.genero == genero)
        return resultado
    }
    getPeliMasCara = async _ => {
        const peliculas = await this.peliculasModel.getPeliculas()
        peliculas.sort((a, b) => {
            if(a.precio > b.precio) return -1
            if(a.precio < b.precio) return 1
            return 0
        })
        return peliculas[0]
    }
    getPeliMasBarata = async _ => {
        const peliculas = await this.peliculasModel.getPeliculas()
        peliculas.sort((a, b) => {
            if(a.precio > b.precio) return 1
            if(a.precio < b.precio) return -1
            return 0
        })
        return peliculas[0]
    }
    getPeliMasLarga = async _ => {
        const peliculas = await this.peliculasModel.getPeliculas()
        peliculas.sort((a, b) => {
            if(a.duracion > b.duracion) return -1
            if(a.duracion < b.duracion) return 1
            return 0
        })
        return peliculas[0]
    }
    getPeliMasCorta = async _ => {
        const peliculas = await this.peliculasModel.getPeliculas()
        peliculas.sort((a, b) => {
            if(a.duracion > b.duracion) return 1
            if(a.duracion < b.duracion) return -1
            return 0
        })
        return peliculas[0]
    }
}