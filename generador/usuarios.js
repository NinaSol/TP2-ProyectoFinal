import { faker} from '@faker-js/faker';

const get = ()=>({
    nombre: faker.name.firstName().split(' ')[0],
    edad: 99,
    email: faker.internet.email(),
    dni : 123434,
    password: faker.internet.password(),

})

const getAgregarPelicula = ()=>({

    "_id": 4,
    "peliculas": {
   "_id": 8,
   "nombre": "SONRÍE",
   "genero": "test",
   "director": "test",
   "duracion": 115,
   "clasificacion": "+16",
   "imagen": "test",
   "sinopsis": "test",
   "precio": 900
    }

})


const getUser = () => ({
    email: faker.internet.email(),
    password: faker.internet.password(),
})



export default {
    get,
    getAgregarPelicula,
    getUser
}