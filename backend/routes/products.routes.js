import {Router} from 'express'
import getTasks from '../controllers/getTasks.js'
import createTasks from '../controllers/createTask.js'
import getTasksById from '../controllers/getTaskbyId.js'
import updateTask from '../controllers/updateTask.js'
import deleteTask from '../controllers/deleteTask.js'

const productRoutes = Router()

productRoutes.get("",getTasks)
productRoutes.get("/:id",getTasksById)
productRoutes.post("",createTasks)
productRoutes.put("/:id",updateTask)
productRoutes.delete("/:id",deleteTask)


export default productRoutes