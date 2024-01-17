import express from 'express'
import { getAllOrderProducts, addOrderProduct, updateOrderProduct, getOrderProductById, deleteOrderProduct } from '../controllers/order-product-controller.js'

const orderProductRouter = express.Router()

orderProductRouter.get("/", getAllOrderProducts)
orderProductRouter.post("/add", addOrderProduct)
orderProductRouter.put("/update/:id", updateOrderProduct)
orderProductRouter.get("/:id", getOrderProductById)
orderProductRouter.delete("/:id", deleteOrderProduct)

export default orderProductRouter