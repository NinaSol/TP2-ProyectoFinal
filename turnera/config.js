import dotenv from 'dotenv'

dotenv.config()

const PORT = 8080
const URI = process.env.URI || 'mongodb://localhost'
const DB = process.env.DB || 'MEM'  
const BASE = process.env.BASE || 'test' 

export default {
    PORT,
    URI,
    DB,
    BASE
}