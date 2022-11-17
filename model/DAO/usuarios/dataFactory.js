import DataMemDAO from './dataMemDAO.js'
import DataMongoDAO from './dataMongoDAO.js'

class DataFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                return new DataMemDAO()

            case 'MONGO' :
                return new DataMongoDAO()

            default: 
                return new DataMemDAO()
        }
    }
}

export default DataFactoryDAO