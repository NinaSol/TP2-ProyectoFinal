import {CnxMongoDB} from '../cnxMongoDB.js'
import {ObjectId} from "mongodb"

export class PeliculasMongo {
    getPelicula = async id => {
        if(!CnxMongoDB.connection) return {}
        let pelicula = await CnxMongoDB.db.collection('peliculas').findOne({_id: ObjectId(id)})
        return pelicula
    }
    getPeliculas = async _ => {
        if(!CnxMongoDB.connection) return []
        try {
            let peliculas = await CnxMongoDB.db.collection('peliculas').find({}).toArray()
            return peliculas
        }
        catch { return [] }
    }
    savePelicula = async pelicula => {
        if(!CnxMongoDB.connection) return {}
        await CnxMongoDB.db.collection('peliculas').insertOne(pelicula)
        return pelicula    
    }
    updatePelicula = async (pelicula,id) => {
        if(!CnxMongoDB.connection) return {}
        let resultado = await CnxMongoDB.db.collection('peliculas').updateOne(
            {_id: ObjectId(id)},
            {$set: pelicula}
        )
        return resultado    
    }
    deletePelicula = async id => {
        if(!CnxMongoDB.connection) return {}
        let resultado = await CnxMongoDB.db.collection('peliculas').deleteOne({_id: ObjectId(id)})
        return resultado    
    }
}