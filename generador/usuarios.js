import { faker} from '@faker-js/faker';

const get = ()=>({
    nombre: faker.name.firstName().split(' ')[0],
    edad: 99,
    email: faker.internet.email(),
    dni : 123434,
    password: faker.internet.password(),

})

const getAgregarPelicula = ()=>({
    _id: 7,  // este es el id de usuario, No de la pelicula
    peliculas:{
        _id: 10,
        nombre:'test',
        genero: 'test',
        director:'no hay',
        duracion: 44,
        clasificacion: '+18',
        imagen:'sin imagen',
        sinopsis: 'pelicula inventada para test',
        precio:1111,
    }

})

export default {
    get,
    getAgregarPelicula
}