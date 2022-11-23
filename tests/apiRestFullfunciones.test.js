import supertest from 'supertest';
const request = supertest('http://localhost:8080')
import {expect} from 'chai'
import generador from '../generador/funciones.js'
import { should } from 'chai';  
should();  



describe('test api Funciones', () => {

    describe('GET de funciones', () => {
        it('debería retornar un obtejo y status 200', async () => {
            let responseFunciones = await request.get('/cineort/funciones')
            expect(responseFunciones.status).to.eql(200)
            const funciones = responseFunciones.body
            expect(funciones).to.be.an("object")
            expect("Content-Type", /json/);
        })
    })

    describe('Update de funciones', () => {
        it('debería retornar un objeto y status 200', async () => {
            let responseFunciones = await request.get('/cineort/funciones/1')
            expect(responseFunciones.status).to.eql(200)
            const funciones = responseFunciones.body
            expect(funciones).to.be.an("object")
            expect("Content-Type", /json/);
        })
    })

    describe('Menor capacidad de funciones', () => {
        it('debería retornar un numero y devolver estatus 200', async () => {
            let responseFunciones = await request.get('/cineort/funciones/menosVendida')
            expect(responseFunciones.status).to.eql(200)
            const funciones = responseFunciones.body
            expect(funciones).to.be.an("object")
            expect("Content-Type", /json/);
        })
    })

    describe('Calcular capacidad de funcion', () => {
        it('debería retornar un numero y devolver status 200', async () => {
            let responseFunciones = await request.get('/cineort/funciones/calcularCapacidad/1')
            expect(responseFunciones.status).to.eql(200)
            const funciones = responseFunciones.body
            expect(funciones).to.be.an("number")
            expect("Content-Type", /json/);
        })
    })


    describe("POST /funciones", function () {
        let funcion =  generador.get()
        it('Debería agregar una función con campos válidos', async function () {
          const response = await request.post("/cineort/funciones")
          .send(funcion)
          expect(response.status).to.eql(200);
          
          const funcionCreada = response.body
          expect(funcion).to.include.keys('idPelicula','capacidad', 'capacidadMax', 'fecha')

          expect(funcionCreada.idPelicula).to.eql(funcion.idPelicula)
          expect(funcionCreada.capacidad).to.eql(funcion.capacidad)
          expect(funcionCreada.capacidadMax).to.eql(funcion.capacidadMax)
          expect(funcionCreada.fecha).to.eql(funcion.fecha)
        });

      });

      describe("Get /obtenerFuncionesPorPelicula", function () {
        it('Debería retornar status 200 y encotrar la función del Id de Pelicula pasado', async function () {
          const response = await request.get("/cineort/funciones/obtenerPorPelicula/2")
          expect(response.status).to.eql(200);
          expect(response).to.be.an("object")
          expect("Content-Type", /json/);
          expect(response.body).to.include.keys('idPelicula','capacidad', 'capacidadMax', 'fecha')

        });

      });

      

    
})
