import { config } from 'dotenv'
import mongoose from 'mongoose'

config({ path: '.env' })

export const conectarMongoDb = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('|=> La base de datos mongoDb conecto exitosamente <=|')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
