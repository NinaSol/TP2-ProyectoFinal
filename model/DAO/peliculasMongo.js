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
    getLastId = async _ => {
        if(!CnxMongoDB.connection) return {}
        let cantPelis = await CnxMongoDB.db.collection('peliculas').count()
        if(cantPelis > 0){
            let arrayPelis = await CnxMongoDB.db.collection('peliculas').find({}).sort({id:-1}).toArray()
            let lastPeli = arrayPelis[0]
            return parseInt(lastPeli.id)
        }else {return 0}
    }
    savePelicula = async pelicula => {
        if(!CnxMongoDB.connection) return {}
        pelicula.id = (await this.getLastId()) + 1
        await CnxMongoDB.db.collection('peliculas').insertOne(pelicula)
        return pelicula    
    }
    updatePelicula = async (pelicula,id) => {
        if(!CnxMongoDB.connection) return {}
        id = parseInt(id)
        let resultado = await CnxMongoDB.db.collection('peliculas').updateOne(
            {id: id },
            {$set: pelicula}
        )
        return resultado
    }
    deletePelicula = async id => {
        if(!CnxMongoDB.connection) return {}
        id = parseInt(id)
        let resultado = await CnxMongoDB.db.collection('peliculas').deleteOne({id: id })
        return resultado    
    }
}