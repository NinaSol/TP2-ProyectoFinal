import TicketMemDAO from './ticketMemDAO.js'
import TicketMongoDAO from './ticketsMongoDAO.js'

class TicketFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                return new TicketMemDAO()

            case 'MONGO' :
                return new TicketMongoDAO()

            default: 
                return new TicketMemDAO()
        }
    }
}

export default TicketFactoryDAO