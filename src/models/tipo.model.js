import mongoose from 'mongoose'

const tipoSchema = mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
    require: true
  },
  precio: {
    type: Number,
    require: true
  },
  creado: {
    type: Date,
    default: Date.now
  },
  sabor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sabor',
    require: true
  }
}, { timestamps: true }, { collection: 'tipos' })

export default mongoose.model('Tipo', tipoSchema)
