import {MongoClient} from "mongodb";
import config from "../config.js";

export class CnxMongoDB {
  static connection = false;
  static db;
  static data;

  static conectar = async _ => {
    try {
      console.log('Conectando a la base de datos...')
      CnxMongoDB.data = new MongoClient(config.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await CnxMongoDB.data.connect();
      console.log('Base de datos conectada')

      CnxMongoDB.db = CnxMongoDB.data.db(config.BASE);
      CnxMongoDB.connection = true;
    } catch (error) { console.log(error.message) }
  };

  static desconectar = async _ => {
    if (!CnxMongoDB.connection) return;
    await CnxMongoDB.data.close();
  };
}