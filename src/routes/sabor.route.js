import { Router } from 'express'
import {
  actualizarSabor,
  borrarSabor,
  crearSabor,
  mostrarTodosLosSabores,
  mostrarUnSabor
} from '../controllers/sabor.controller.js'

const router = Router()

router.get('/', mostrarTodosLosSabores)
router.get('/:id', mostrarUnSabor)
router.post('/', crearSabor)
router.put('/:id', actualizarSabor)
router.delete('/:id', borrarSabor)

export default router
