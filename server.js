import express from "express";
import { CnxMongoDB } from "./model/cnxMongoDB.js";
import config from "./config.js";
import { RouterPeliculas } from "./router/peliculas.js";
import { FuncionesRouter } from "./router/funciones.js";
import { UsuariosRouter } from "./router/usuarios.js";
import { TicketRouter } from "./router/tickets.js";

import cors from "cors";

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/cineort/peliculas", new RouterPeliculas().start());
app.use("/cineort/funciones", new FuncionesRouter().start());
app.use("/cineort/usuarios", new UsuariosRouter().start());
app.use("/cineort/tickets", new TicketRouter().start());

if (config.DB == "MONGO") {
  await CnxMongoDB.conectar();
}

const PORT = process.env.PORT || config.PORT;
const server = app.listen(PORT, () =>
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
);
server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);
