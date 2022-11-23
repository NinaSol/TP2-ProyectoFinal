import { CnxMongoDB } from "../model/cnxMongoDB.js";

const getLastId = async (coleccion) => {
  if (!CnxMongoDB.connection) return {};
  let cant = await CnxMongoDB.db.collection(coleccion).count();
  if (cant > 0) {
    let array = await CnxMongoDB.db
      .collection(coleccion)
      .find({})
      .sort({ _id: -1 })
      .toArray();
    let last = array[0];
    return parseInt(last._id);
  } else {
    return 0;
  }
};

export default getLastId;
