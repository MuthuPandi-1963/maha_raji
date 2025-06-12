import {Router} from 'express'
import getTasks from '../controllers/getTasks.js'
import createTasks from '../controllers/createTask.js'

const productRoutes = Router()

productRoutes.get("",getTasks)
productRoutes.post("",createTasks)


export default productRoutes