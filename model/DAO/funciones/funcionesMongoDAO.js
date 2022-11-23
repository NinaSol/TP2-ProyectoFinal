import { CnxMongoDB } from "../../cnxMongoDB.js";
import { ObjectId } from "mongodb";
import getLastId from "../../../utils/getLastId.js";

class FuncionesMongoDAO {
  getFuncion = async (id) => {
    if (!CnxMongoDB.connection) return {};
    id = parseInt(id)
    let funcion = await CnxMongoDB.db
      .collection("funciones")
      .findOne({ _id: id });
    return funcion;
  };

  getFunciones = async () => {
    if (!CnxMongoDB.connection) return [];
    try {
      let funciones = await CnxMongoDB.db
        .collection("funciones")
        .find({})
        .toArray();
      return { funciones };
    } catch {
      return [];
    }
  };

  saveFuncion = async (funcion) => {
    if (!CnxMongoDB.connection) return {};
    try {
      funcion._id = (await getLastId("funciones")) + 1;
      await CnxMongoDB.db.collection("funciones").insertOne(funcion);
      return funcion;
    } catch {
      return {};
    }
  };

  updateFuncion = async (funcion, id) => {
    if (!CnxMongoDB.connection) return {};
    id = parseInt(id)
    let funcionActualizada = await CnxMongoDB.db
      .collection("funciones")
      .updateOne({ _id: id }, { $set: funcion });
    return funcionActualizada;
  };

  deleteFuncion = async (id) => {
    if (!CnxMongoDB.connection) return {};
    id = parseInt(id);
     await CnxMongoDB.db
      .collection("funciones")
      .deleteOne({_id: id});
    return "La funcion fue eliminada";
  };


  getFuncionesPorPelicula = async (idPelicula) => {
    if (!CnxMongoDB.connection) return {};
    idPelicula = parseInt(idPelicula)
    let funcion = await CnxMongoDB.db
      .collection("funciones")
      .findOne({ idPelicula: idPelicula });
    return funcion;

}


  getFuncionesPorFecha = async (fecha) => {
    if (!CnxMongoDB.connection) return {};
    let funcionEncotrada = await CnxMongoDB.db
      .collection("funciones")
      .findOne({ fecha: fecha });
    return funcionEncotrada;
  };

  



}

export default FuncionesMongoDAO;
