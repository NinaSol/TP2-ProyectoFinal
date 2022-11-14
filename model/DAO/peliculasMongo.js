import { CnxMongoDB } from "../cnxMongoDB.js";
import { ObjectId } from "mongodb";
import getLastId from "../../utils/getLastId.js";

export class PeliculasMongo {
  getPelicula = async (id) => {
    if (!CnxMongoDB.connection) return {};
    let pelicula = await CnxMongoDB.db
      .collection("peliculas")
      .findOne({ _id: ObjectId(id) });
    return pelicula;
  };
  getPeliculas = async (_) => {
    if (!CnxMongoDB.connection) return [];
    try {
      let peliculas = await CnxMongoDB.db
        .collection("peliculas")
        .find({})
        .toArray();
      return peliculas;
    } catch {
      return [];
    }
  };

  savePelicula = async (pelicula) => {
    if (!CnxMongoDB.connection) return {};
    pelicula._id = (await getLastId("peliculas")) + 1;
    await CnxMongoDB.db.collection("peliculas").insertOne(pelicula);
    return pelicula;
  };
  updatePelicula = async (pelicula, id) => {
    if (!CnxMongoDB.connection) return {};
    id = parseInt(id);
    let resultado = await CnxMongoDB.db
      .collection("peliculas")
      .updateOne({ _id: id }, { $set: pelicula });
    return resultado;
  };
  deletePelicula = async (id) => {
    if (!CnxMongoDB.connection) return {};
    id = parseInt(id);
    let resultado = await CnxMongoDB.db
      .collection("peliculas")
      .deleteOne({ _id: id });
    return resultado;
  };
}
