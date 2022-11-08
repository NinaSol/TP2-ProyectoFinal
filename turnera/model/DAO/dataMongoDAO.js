import CnxMongoDB from '../cnxMongoDB.js'
import { ObjectId } from "mongodb"


class DataMongoDAO {

    getData = async id => {
        if(!CnxMongoDB.connection) return {}
        let d = await CnxMongoDB.db.collection('data').findOne({_id: ObjectId(id)})
        return d    
    }

    getAllData = async () => {
        return CnxMongoDB.db.collection('data').findOne({})
    }

    getAllData = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let data = await CnxMongoDB.db.collection('data').find({}).toArray()
            return data
        }
        catch {
            return []
        }
    }

    saveData = async d => {
        if(!CnxMongoDB.connection) return {}

        d.edad = parseInt(d.edad)
        await CnxMongoDB.db.collection('data').insertOne(d)
        return d    
    }

    updateData = async (d,id) => {
        if(!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('data').updateOne(
            {_id: ObjectId(id)},
            {$set: d}
        )
        let clienteActualizado = await this.getData(id)
        return clienteActualizado    
    }

    deleteData = async id => {
        if(!CnxMongoDB.connection) return {}

        let deletedData = await this.getData(id)
        await CnxMongoDB.db.collection('data').deleteOne({_id: ObjectId(id)})
        
        return deletedData    
    }
}

export default DataMongoDAO
