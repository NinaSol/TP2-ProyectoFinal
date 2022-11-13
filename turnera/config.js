import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT
const URI = process.env.URI || 'mongodb://localhost'
const DB = process.env.DB || 'MEMORIA'  
const BASE = process.env.BASE || 'test' 

export default {
    PORT,
    URI,
    DB,
    BASE
}