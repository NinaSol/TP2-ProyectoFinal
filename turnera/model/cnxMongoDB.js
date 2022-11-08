import { MongoClient } from "mongodb";
import config from "../config.js";

class CnxMongoDB {
  static connection = false;
  static db;
  static data;

  static conectar = async (_) => {
    try {
      CnxMongoDB.data = new MongoClient(config.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      await CnxMongoDB.data.connect();

      CnxMongoDB.db = CnxMongoDB.data.db(config.BASE);
      CnxMongoDB.connection = true;
    } catch (error) {
      console.log(error.message);
    }
  };

  static desconectar = async () => {
    if (!CnxMongoDB.connection) return;
    await CnxMongoDB.data.close();
  };
}

export default CnxMongoDB;
