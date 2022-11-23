import { CnxMongoDB } from "../../cnxMongoDB.js";
import getLastId from "../../../utils/getLastId.js";

class DataMongoDAO {

  getData = async (id) => {
    if (!CnxMongoDB.connection) return {};
    id = parseInt(id)
    let user = await CnxMongoDB.db
      .collection("usuarios")
      .findOne({ _id: id });
    return user;
  };

  getAllData = async () => {
    // return CnxMongoDB.db.collection("usuarios").findOne({});
    try {
      let usuarios = await CnxMongoDB.db
        .collection("usuarios")
        .find({})
        .toArray();
      return usuarios;
    } catch (error) {
      return []
    }
  };

  // getAllData = async () => {
  //   if (!CnxMongoDB.connection) return [];
  //   try {
  //     let Usuarios = await CnxMongoDB.db.collection("usuarios").find({}).toArray();
  //     return Usuarios;
  //   } catch {
  //     return [];
  //   }
  // };




  saveData = async (user) => {
    if (!CnxMongoDB.connection) return {};
    user._id =  (await getLastId("usuarios")) + 1;
    await CnxMongoDB.db.collection("usuarios").insertOne(user);
    return user;
  };

  updateData = async (user, id) => {
    if (!CnxMongoDB.connection) return {};
    id = parseInt(id);
    
    await CnxMongoDB.db
      .collection("usuarios")
      .updateOne({ _id: id }, { $set: user });
    let clienteActualizado = await this.getData(id);
    return clienteActualizado;
  };


  deleteData = async (id) => {
    if (!CnxMongoDB.connection) return {};
    id = parseInt(id);
    let deletedData = await this.getData(id);
    await CnxMongoDB.db.collection("usuarios").deleteOne({ _id: id});

    return deletedData;
  };
}

export default DataMongoDAO;
