import { CnxMongoDB } from "../../cnxMongoDB.js";
import getLastId from "../../../utils/getLastId.js";

class TicketMongoDAO {
  obtenerTicket = async (id) => {
    if (!CnxMongoDB.connection) return {};
    let ticket = await CnxMongoDB.db
      .collection("tickets")
      .findOne({ _id: parseInt(id) });
    return ticket;
  };

  obtenerTickets = async (_) => {
    return CnxMongoDB.db.collection("tickets").find({}).toArray();
  };

  crearTicket = async (ticket) => {
    if (!CnxMongoDB.connection) return {};
    //formato fecha YYYY-mm-dd
    ticket._id = (await getLastId("tickets")) + 1;
    await CnxMongoDB.db
      .collection("tickets")
      .insertOne({ ...ticket, fecha: new Date() });
    return ticket;
  };

  /*     actualizarTicket = async (ticket,id) => {
        if(!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('tickets').updateOne(
            {_id: ObjectId(id)},
            {$set: ticket}
        )
        let ticketActualizado = await this.obtenerTicket(id)
        return ticketActualizado    
    }
    
    */

    // eliminarTicket = async id => {
    //     if(!CnxMongoDB.connection) return {}
    //   id = parseInt(id)
    //     let ticketEliminado = await this.obtenerTicket(id)
    //     await CnxMongoDB.db.collection('tickets').deleteOne({_id: id})
        
    //     return ticketEliminado    
    // }
}

export default TicketMongoDAO;
