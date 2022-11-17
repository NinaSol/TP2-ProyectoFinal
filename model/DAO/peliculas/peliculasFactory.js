import {PeliculasMem} from './peliculasMem.js'
import {PeliculasMongo} from './peliculasMongo.js'

export class PeliculasFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log(':::::::: Persistiendo en Memoria ::::::::')
                return new PeliculasMem()

            case 'MONGO':
                console.log(':::::::: Persistiendo en MongoDB ::::::::')
                return new PeliculasMongo()

            default:
                console.log(':::::::: Persistiendo en default (Memoria) ::::::::')
                return new PeliculasMem()
        }
    }
}