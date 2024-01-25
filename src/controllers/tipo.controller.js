import Sabor from '../models/sabor.model.js'
import Tipo from '../models/tipo.model.js'

export const crearTipo = async (req, res) => {
  try {
    const { sabor } = req.body
    const existeSabor = await Sabor.findById(sabor)
    if (!existeSabor) {
      return res.status(404).json({ mensaje: 'No se encontro el sabor' })
    }

    const tipo = new Tipo(req.body)
    await tipo.save()
    res.status(200).json({ tipo })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ mensaje: 'Hubo un error en la peticion POST a mongoDb' })
  }
}
export const mostrarTipos = async (req, res) => {
  try {
    const { sabor } = req.body
    const existeSabor = await Sabor.findById(sabor)
    if (!existeSabor) {
      return res.status(404).json({ mensaje: 'No se encontro el sabor' })
    }

    const tipo = await Tipo.find({ sabor })
    res.json({ tipo })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ mensaje: 'Hubo un error al realizar la peticion GET a mongoDb' })
  }
}
export const actualizarTipo = async (req, res) => {
  try {
    const { nombre, precio } = req.body
    let tipoExiste = await Tipo.findById(req.params.id)
    if (!tipoExiste) {
      return res.status(404).json({ mensaje: 'No se pudo encontrar el tipo' })
    }

    const nuevoTipo = {}
    if (nombre) {
      nuevoTipo.nombre = nombre
    }
    if (precio) {
      nuevoTipo.precio = precio
    }
    tipoExiste = await Tipo.findOneAndUpdate(
      { _id: req.params.id },
      nuevoTipo,
      { new: true }
    )
    res.json({ tipoExiste })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ mensaje: 'Hubo un error al realizar la peticion GET a mongoDb' })
  }
}
export const eliminarTipo = async (req, res) => {
  try {
    const _id = req.params.id
    const resultado = await Tipo.findByIdAndDelete(_id)
    if (!resultado) {
      return res.status(404).json({ mensaje: 'El tipo no fue encontrado' })
    }
    return res.status(200).sendStatus(204)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({
        mensaje: 'Hubo un error al realizar la peticion DELETE a mongoDb'
      })
  }
}
