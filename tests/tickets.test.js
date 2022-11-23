import supertest from "supertest";
import { expect } from "chai";

describe("test api tickets", () => {
  const request = supertest("http://localhost:8080");

  describe("GET", () => {
    it("status al consultar tickets esperado: 200", async () => {
      let res = await request.get("/cineort/tickets");
      expect(res.status).to.eql(200);
    });
  });

  describe("POST", () => {
    it("se espera que se agregue un ticket correctamente", async () => {
      let ticketAux = {
        idPelicula: 1,
        idUsuario: 4,
        idFuncion: 2,
      };

      let res = await request.post("/cineort/tickets").send(ticketAux);
      expect(res.status).to.eql(200);

      const ticket = res.body;
      console.log(ticket);
      expect(ticket).to.have.property("_id");
      expect(ticket).to.have.property("clasificacion");
      expect(ticket).to.have.property("director");
      expect(ticket).to.have.property("duracion");
      expect(ticket).to.have.property("fechaDeCompra");
      expect(ticket).to.have.property("genero");
      expect(ticket).to.have.property("imagen");
      expect(ticket).to.have.property("nombre");
      expect(ticket).to.have.property("precio");
      expect(ticket).to.have.property("sinopsis");
    });
  });

  describe("GET", () => {
    it("status al consultar tickets esperado: 200", async () => {
      let res = await request.get("/cineort/tickets/mayorConsumo");
      expect(res.status).to.eql(200);
      expect(res._body).to.equal("2022-11-22T06:00:00.000Z");
    });
  });
  describe("GET", () => {
    it("status al consultar tickets esperado: 200", async () => {
      let res = await request.get("/cineort/tickets/menorConsumo");
      expect(res.status).to.eql(200);
      !expect(res._body).to.equal("2022-11-13T06:00:00.000Z");
    });
  });
});
