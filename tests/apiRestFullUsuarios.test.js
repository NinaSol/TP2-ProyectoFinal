import supertest from "supertest";
const request = supertest("http://localhost:8080");
import { expect } from "chai";
import generador from "../generador/usuarios.js";
import { parse } from "dotenv";

describe("test api usuarios", () => {
  describe("GET", () => {
    it("Metodo Get usuarios, retorno esperado: 200 ", async () => {
      let res = await request.get("/cineort/usuarios");
      expect(res.status).to.eql(200);
    });
  });

  describe("GET", () => {
    it("Metodo Get usuarios mayores y menores, retorno esperado: 200 ", async () => {
      let res = await request.get("/cineort/usuarios/mayores");
      let res2 = await request.get("/cineort/usuarios/menores");

      expect(res.status).to.eql(200);
      expect(res2.status).to.eql(200);
    });
  });

  describe("POST", () => {
    it("Metodo crear usuario, deberia agregar un nuevo usuario", async () => {
      let clienteAux = generador.get();
      console.log(clienteAux);

      let res = await request.post("/cineort/usuarios").send(clienteAux);
      expect(res.status).to.eql(200);

      const user = res.body;
      expect(user).to.include.keys(
        "nombre",
        "edad",
        "dni",
        "email",
        "password"
      );
      expect(user.nombre).to.eql(clienteAux.nombre);
      expect(user.edad).to.eql(clienteAux.edad);
      expect(user.dni).to.eql(clienteAux.dni);
      expect(user.email).to.eql(clienteAux.email);
      expect(user.password).to.eql(clienteAux.password);
    });
  });

  describe("POST", () => {
    it("Metodo validar, deberia devolver un usuario existente", async () => {
      let usuario = generador.getUser();
      console.log(usuario);

      let res = await request.post("/cineort/usuarios").send(usuario);
      expect(res.status).to.eql(200);

      const user = res.body;
      expect(user).to.include.keys("email", "password");
      expect(user.email).to.eql(usuario.email);
      expect(user.password).to.eql(usuario.password);
    });
  });

  /*   describe("PUT", () => {
    it("Metodo comprar pelicula, debera retornar un nuevo ticket", async () => {
      let pelicula = generador.getAgregarPelicula();
      //console.log(pelicula);

      let res = await request.put("/cineort/usuarios/comprar").send(pelicula);
      expect(res.status).to.eql(200);

      const user = res.body;
      // ,'director','duracion','clasificacion','imagen','sinopsis','precio')
      expect(user).to.include.keys("_id");
      expect(user._id).to.eql(pelicula._id);
      // expect(user.director).to.eql(pelicula.director)
      // expect(user.duracion).to.eql(pelicula.duracion)
      // expect(user.clasificacion).to.eql(pelicula.clasificacion)
      // expect(user.imagen).to.eql(pelicula.imagen)
      // expect(user.sinopsis).to.eql(pelicula.sinopsis)
      // expect(user.precio).to.eql(pelicula.precio)
    });
  }); */
});
