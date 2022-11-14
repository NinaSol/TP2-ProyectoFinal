import CnxMongoDB from "../cnxMongoDB.js";
import { ObjectId } from "mongodb";

class TicketMongoDAO {
  obtenerTicket = async (id) => {
    if (!CnxMongoDB.connection) return {};
    let ticket = await CnxMongoDB.db
      .collection("tickets")
      .findOne({ _id: ObjectId(id) });
    return ticket;
  };

  obtenerTickets = async () => {
    return CnxMongoDB.db.collection("tickets").findOne({});
  };

  crearTicket = async (ticket) => {
    if (!CnxMongoDB.connection) return {};

    //formato fecha YYYY-mm-dd
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

    eliminarTicket = async id => {
        if(!CnxMongoDB.connection) return {}

        let ticketEliminado = await this.obtenerTicket(id)
        await CnxMongoDB.db.collection('tickets').deleteOne({_id: ObjectId(id)})
        
        return ticketEliminado    
    }*/
}

export default TicketMongoDAO;
