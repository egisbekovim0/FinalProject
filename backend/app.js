import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes.js'
import exerciseRouter from './routes/exercise-routes.js'
import orderRouter from './routes/order-routes.js'
import productRouter from './routes/product-router.js'
import exerciseTypeRouter from './routes/exercise-type-routes.js'
import productCategoryRouter from './routes/product-category-routes.js'

const app = express()
app.use(express.json())

app.use("/api/user", router)
app.use("/api/exercise", exerciseRouter)
app.use("/api/order", orderRouter)
app.use("/api/product", productRouter)
app.use("/api/exerciseType", exerciseTypeRouter)
app.use("/api/productCategory", productCategoryRouter)


mongoose.connect("mongodb://localhost:27017/TrainAnd").then(
    ()=>app.listen(5000)
).then(()=>console.log("Connected to database and listening 5009")).catch((err)=>console.log(err))

app.listen(5009)