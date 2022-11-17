import FuncionesMongoDAO from './funcionesMongoDAO.js'
import FuncionesMemDAO from './funcionesMemDAO.js'


class FuncionesFactoryDAO{
    static get(tipo){
        switch(tipo){
            case 'MEMORIA':
                return new FuncionesMemDAO()
            case 'MONGO':
                return new FuncionesMongoDAO()
            default:
                return new FuncionesMemDAO()
        }
    }
}

export default FuncionesFactoryDAO;
