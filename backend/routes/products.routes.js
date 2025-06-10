import {Router} from 'express'
import getProducts from '../controllers/getProducts.js'
import createProducts from '../controllers/createProducts.js'

const productRoutes = Router()

productRoutes.get("",getProducts)
productRoutes.post("",createProducts)


export default productRoutes