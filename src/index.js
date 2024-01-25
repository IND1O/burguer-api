import cors from 'cors'
import route from './routes/tipo.route.js'
import router from './routes/sabor.route.js'
import express from 'express'
import { conectarMongoDb } from './database/db.js'

const app = express()

conectarMongoDb()

app.use(cors())
app.use(express.json())

const port = process.env.port || 5000

app.use('/api/sabores', router)
app.use('/api/tipos', route)

app.listen(port, '0.0.0.0', () => {
  console.log(`|=> La API esta funcionado en el puerto: ${port} <=|`)
})
