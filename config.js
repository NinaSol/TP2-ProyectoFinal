import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const URI = process.env.URI || "mongodb://localhost";
const DB = process.env.DB || "MEM";
const BASE = process.env.BASE || "cineDB";

export default {
  PORT,
  URI,
  DB,
  BASE,
};
