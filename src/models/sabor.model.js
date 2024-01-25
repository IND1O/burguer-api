import mongoose from 'mongoose'

const saborSchema = new mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
    require: true,
    unique: true
  },
  descripcion: {
    type: String,
    trim: true,
    require: true
  },
  imagen: {
    type: String,
    require: true
  },
  creado: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true }, { collection: 'sabores' })

export default mongoose.model('Sabor', saborSchema)
