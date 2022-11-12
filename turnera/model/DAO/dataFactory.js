import DataMemDAO from './dataMemDAO.js'
import DataMongoDAO from './dataMongoDAO.js'

class DataFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log('---persistiendo en memoria---');
                return new DataMemDAO()

            case 'MONGO' :
                console.log('---persistiendo en mongodb---');
                return new DataMongoDAO()

            default: 
            console.log('---persistiendo en memoria por default---');
                return new DataMemDAO()
        }
    }
}

export default DataFactoryDAO