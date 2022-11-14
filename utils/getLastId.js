import { CnxMongoDB } from "../model/cnxMongoDB.js";

const getLastId = async (coleccion) => {
  if (!CnxMongoDB.connection) return {};
  let cantPelis = await CnxMongoDB.db.collection(coleccion).count();
  if (cantPelis > 0) {
    let arrayPelis = await CnxMongoDB.db
      .collection(coleccion)
      .find({})
      .sort({ _id: -1 })
      .toArray();
    let lastPeli = arrayPelis[0];
    return parseInt(lastPeli._id);
  } else {
    return 0;
  }
};

export default getLastId;
