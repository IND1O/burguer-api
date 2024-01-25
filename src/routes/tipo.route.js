import { Router } from 'express'
import {
  actualizarTipo,
  crearTipo,
  eliminarTipo,
  mostrarTipos
} from '../controllers/tipo.controller.js'

const route = Router()

route.post('/', crearTipo)
route.get('/', mostrarTipos)
route.put('/:id', actualizarTipo)
route.delete('/:id', eliminarTipo)

export default route
