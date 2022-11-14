import express from "express";
import CnxMongoDB from "./model/cnxMongoDB.js";
import config from "./config.js";
import { DataRouter } from "./router/funciones.js";

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/cineort/", new DataRouter().start());
app.use("/usuarios", new DataRouter().start());

if (config.DB == "MONGO") {
  await CnxMongoDB.conectar();
}

const PORT = process.env.PORT || config.PORT;
const server = app.listen(PORT, () => console.log("Servidor corriendo"));
server.on("error", (error) =>
  console.log("Error en el servidor :" + error.message)
);
