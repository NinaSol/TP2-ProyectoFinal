import supertest from "supertest"
const request = supertest('http://localhost:8080')
import {expect} from 'chai'

describe('test api Peliculas', _ => {

    describe('GET de Peliculas', () => {
        it('debe retornar un obtejo y status 200', async () => {
            let resPeliculas = await request.get('/cineort/peliculas')
            expect(resPeliculas.status).to.eql(200)
            expect(resPeliculas.body).to.be.an("array")
            expect("Content-Type", /json/)
        })
    })
})