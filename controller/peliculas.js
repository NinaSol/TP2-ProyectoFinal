import {PeliculasService} from '../service/peliculas.js'

export class ControladorPeliculas {
    constructor() {
        this.peliculasService = new PeliculasService()
    }
    getPeliculas = async (req,res) => {
        const { id } = req.params
        res.json( await this.peliculasService.getPeliculas(id) )
    }
    getPeliId = async (req,res) => {
        const { _id } = req.body
        res.json( await this.peliculasService.getPeliculas(_id) )
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
    getPeliClasificacion = async (req,res) => {
        const { c } = req.params
        res.json( await this.peliculasService.getPeliClasificacion(c) )
    }
    getPeliGenero = async (req,res) => {
        const { g } = req.params
        res.json( await this.peliculasService.getPeliGenero(g) )
    }
    getPeliMasCara = async (req,res) => {
        res.json( await this.peliculasService.getPeliMasCara() )
    }
    getPeliMasBarata = async (req,res) => {
        res.json( await this.peliculasService.getPeliMasBarata() )
    }
    getPeliMasLarga = async (req,res) => {
        res.json( await this.peliculasService.getPeliMasLarga() )
    }
    getPeliMasCorta = async (req,res) => {
        res.json( await this.peliculasService.getPeliMasCorta() )
    }
}