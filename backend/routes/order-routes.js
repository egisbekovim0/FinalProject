import express from 'express'
import { getAllOrders, addOrder, updateOrder, getOrderById, deleteOrder, getOrderByUserId} from '../controllers/order-controller.js'

const orderRouter = express.Router()

orderRouter.get("/", getAllOrders)
orderRouter.post("/add", addOrder)
orderRouter.put("/update/:id", updateOrder)
orderRouter.get("/:id", getOrderById)
orderRouter.delete("/:id", deleteOrder)
orderRouter.get("/user/:id", getOrderByUserId)


export default orderRouter