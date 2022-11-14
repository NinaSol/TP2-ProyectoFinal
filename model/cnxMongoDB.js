import { MongoClient } from "mongodb";
import config from "../config.js";

export class CnxMongoDB {
  static connection = false;
  static db;
  static cine;

  static conectar = async (_) => {
    try {
      CnxMongoDB.cine = new MongoClient(config.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      await CnxMongoDB.cine.connect();

      CnxMongoDB.db = CnxMongoDB.cine.db(config.BASE);
      CnxMongoDB.connection = true;
    } catch (error) {
      console.log(error.message);
    }
  };

  static desconectar = async (_) => {
    if (!CnxMongoDB.connection) return;
    await CnxMongoDB.cine.close();
  };
}
