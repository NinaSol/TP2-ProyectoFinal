
import CnxMongoDB from '../cnxMongoDB.js'
import { ObjectId } from "mongodb"


class FuncionesMongoDAO{


    getFuncion = async id => {
        if(!CnxMongoDB.connection) return {}
        let funcion = await CnxMongoDB.db.collection('funciones').findOne({_id: ObjectId(id)})
        return funcion    
    }

    getFunciones = async ()  => {      
        if(!CnxMongoDB.connection) return []
        try{
            let funciones = await CnxMongoDB.db.collection('funciones').find({}).toArray();
        return {funciones};

        }catch{
            return []
        }
    }
    
     saveFuncion = async funcion => {
        if(!CnxMongoDB.connection) return {}
        try{
            await CnxMongoDB.db.collection('funciones').insertOne(funcion);

            return "Función agregada correctamente";
        }
        catch{
            return {} 
        }

    }
    
    updateFuncion = async (funcion,id) => {

        if(!CnxMongoDB.connection) return {}
        await CnxMongoDB.db.collection('funciones').updateOne(
            {_id: ObjectId(id)},
            {$set: funcion}
        )
        let funcionActualizada= await this.getFuncion(id)
        return funcionActualizada    
    }
        
    
    
    deleteFuncion = async id => {
        if(!CnxMongoDB.connection) return {}
        let funcionEliminada = await this.getFuncion(id)
        await CnxMongoDB.db.collection('funciones').deleteOne({_id: ObjectId(id)})
        return funcionEliminada    
    }


    getFuncionesPorFecha =  async fecha => {
        if(!CnxMongoDB.connection) return {}
        let funcionEncotrada= await CnxMongoDB.db.collection('funciones').findOne({fecha: fecha})
        return funcionEncotrada    
    }



}




export default FuncionesMongoDAO