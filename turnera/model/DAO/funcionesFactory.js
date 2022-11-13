import FuncionesMongoDAO from './funcionesMongoDAO.js'
import FuncionesMemDAO from './funcionesMemDAO.js'


class FuncionesFactoryDAO{
    static get(tipo){
        switch(tipo){
            case 'MEMORIA':
                console.log('--Persistiendo en memoria--')
                return new FuncionesMemDAO()
            case 'MONGO':
                console.log('--Persistiendo en MongoDB--')
                return new FuncionesMongoDAO()
            default:
                console.log('--Persistiendo en memoria--')
                return new FuncionesMemDAO()
        }
    }
}

export default FuncionesFactoryDAO;
