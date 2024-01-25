import Sabor from '../models/sabor.model.js'

export const mostrarTodosLosSabores = async (req, res) => {
  try {
    const resultado = await Sabor.find()
    res.status(200).json(resultado)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      mensaje: 'Error al realizar la peticion GET de sabores a mongoDb'
    })
  }
}
export const mostrarUnSabor = async (req, res) => {
  try {
    const _id = req.params.id
    const resultado = await Sabor.findById(_id)
    if (!resultado) {
      return res.status(404).json({ mensaje: 'No se pudo encontrar el sabor' })
    }
    res.status(200).json(resultado)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      mensaje: 'Error al realizar la peticion GET de un sabor a mongoDb'
    })
  }
}
export const crearSabor = async (req, res) => {
  try {
    const { nombre, precio, imagen, creado, descripcion } = req.body
    const sabor = new Sabor({ nombre, precio, imagen, descripcion, creado })
    const guardarSabor = await sabor.save()
    res.status(200).json(guardarSabor)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ mensaje: 'Error al realizar la peticion POST a mongoDb' })
  }
}
export const actualizarSabor = async (req, res) => {
  try {
    const _id = req.params.id
    const respuesta = await Sabor.findByIdAndUpdate(_id, req.body, {
      new: true
    })
    if (!respuesta) {
      return res.status(404).json({ mensaje: 'El sabor no fue encontrado' })
    }
    res.status(200).json(respuesta)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ mensaje: 'Error al realizar la peticion PUT a mongoDb' })
  }
}
export const borrarSabor = async (req, res) => {
  try {
    const _id = req.params.id
    const resultado = await Sabor.findByIdAndDelete(_id)
    if (!resultado) {
      return res.status(404).json({ mensaje: 'El sabor no fue encontrado' })
    }
    return res.status(200).sendStatus(204)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ mensaje: 'Error al realizar la peticion DELETE a mongoDb' })
  }
}
