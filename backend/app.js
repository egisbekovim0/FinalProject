import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes.js'
import userExerciseRouter from './routes/user-exercise-routes.js'
import exerciseRouter from './routes/exercise-routes.js'
import orderRouter from './routes/order-routes.js'
import orderProductRouter from './routes/order-product-routes.js'
import productRouter from './routes/product-router.js'

const app = express()
app.use(express.json())

app.use("/api/user", router)
app.use("/api/userExercise", userExerciseRouter)
app.use("/api/exercise", exerciseRouter)
app.use("/api/order", orderRouter)
app.use("/api/orderProduct", orderProductRouter)
app.use("/api/product", productRouter)


mongoose.connect("mongodb+srv://infith:171718aa@newand.iswh5wc.mongodb.net/Training?retryWrites=true&w=majority").then(
    ()=>app.listen(5000)
).then(()=>console.log("Connected to database and listening 5009")).catch((err)=>console.log(err))

app.listen(5009)