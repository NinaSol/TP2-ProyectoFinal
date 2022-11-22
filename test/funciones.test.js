import supertest from 'supertest';
const request = supertest('http://localhost:8082')

//import * as chai from 'chai';
import {expect} from 'chai'
import { assert } from 'chai';  // Using Assert style
import { should } from 'chai';  // Using Should style
should();  // Modifies `Object.prototype`



describe('test api rest full', () => {

    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            let responseFunciones = await request.get('/cineort/funciones')
            expect(responseFunciones.status).to.eql(200)
            const funciones = responseFunciones.body
            expect(funciones).to.be.an("object")
            expect("Content-Type", /json/);
        })
    })

    describe('Update', () => {
        it('debería retornar un status 200', async () => {
            let responseFunciones = await request.get('/cineort/funciones/1')
            expect(responseFunciones.status).to.eql(200)
            const funciones = responseFunciones.body
            expect(funciones).to.be.an("object")
            expect("Content-Type", /json/);
        })
    })

    describe('Menor capacidad de funciones', () => {
        it('debería retornar un numero', async () => {
            let responseFunciones = await request.get('/cineort/funciones/menosVendida')
            expect(responseFunciones.status).to.eql(200)
            const funciones = responseFunciones.body
            expect(funciones).to.be.an("object")
            expect("Content-Type", /json/);
        })
    })

    describe('Calcular capacidad', () => {
        it('debería retornar un numero', async () => {
            let responseFunciones = await request.get('/cineort/funciones/calcularCapacidad/1')
            expect(responseFunciones.status).to.eql(200)
            const funciones = responseFunciones.body
            expect(funciones).to.be.an("number")
            expect("Content-Type", /json/);
        })
    })




    describe("POST /funciones", function () {
        let funcion = {
            idPelicula: 4,
            capacidad: 15,
            capacidadMax: 20,
            fecha: "01-12-22"
        }
        it('Agregar una función', async function () {
          const response = await request.post("/cineort/funciones")
          .send(funcion)
          expect(response.status).to.eql(200);
          
          const user = response.body
          expect(user).to.include.keys('hola','capacidad', 'capacidadMax', 'fecha')
        });

      });

      

    
})
