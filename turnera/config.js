import dotenv from 'dotenv'

dotenv.config()

const PORT = 8082
const URI = process.env.URI || 'mongodb://localhost'
const DB = process.env.DB || 'MEMORIA'  
const BASE = process.env.BASE || 'test' 

export default {
    PORT,
    URI,
    DB,
    BASE
}