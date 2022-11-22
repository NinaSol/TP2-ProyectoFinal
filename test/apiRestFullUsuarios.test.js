import supertest from 'supertest'
const request = supertest('http://localhost:8080')
import { expect } from "chai";
import generador from '../generador/usuarios.js'

describe ('test api usuarios' , ()=>{
    describe('GET', ()=>{
        it('retorno 200 esperado', async()=>{
            let res = await request.get('/cineort/usuarios')
            expect(res.status).to.eql(200)
        })
    })


    describe('POST', ()=>{
        it('deberia agregar un nuevo usuario' , async()=>{
            let clienteAux = generador.get()
            console.log(clienteAux);

            let res = await request.post('/cineort/usuarios').send(clienteAux)
            expect(res.status).to.eql(200)

            const user = res.body
            expect(user).to.include.keys('nombre','edad','dni','email','password')
            expect(user.nombre).to.eql(clienteAux.nombre)
            expect(user.edad).to.eql(clienteAux.edad)
            expect(user.dni).to.eql(clienteAux.dni)
            expect(user.email).to.eql(clienteAux.email)
            expect(user.password).to.eql(clienteAux.password)
        })
    })

    describe('PUT', ()=>{
        it('deberia agregar una nueva pelicula' , async()=>{
            let pelicula = generador.getAgregarPelicula()
            console.log(pelicula);

            let res = await request.put('/cineort/usuarios/comprar').send(pelicula)
            expect(res.status).to.eql(200)

            const user = res.body
            // ,'director','duracion','clasificacion','imagen','sinopsis','precio')
            expect(user).to.include.keys('_id')
            expect(user._id).to.eql(pelicula._id)
            // expect(user.director).to.eql(pelicula.director)
            // expect(user.duracion).to.eql(pelicula.duracion)
            // expect(user.clasificacion).to.eql(pelicula.clasificacion)
            // expect(user.imagen).to.eql(pelicula.imagen)
            // expect(user.sinopsis).to.eql(pelicula.sinopsis)
            // expect(user.precio).to.eql(pelicula.precio)
        })
    })


})