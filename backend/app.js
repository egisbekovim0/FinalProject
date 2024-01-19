import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes.js'
import exerciseRouter from './routes/exercise-routes.js'
import orderRouter from './routes/order-routes.js'
import productRouter from './routes/product-router.js'
import exerciseTypeRouter from './routes/exercise-type-routes.js'
import productCategoryRouter from './routes/product-category-routes.js'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()
app.use(express.json())

app.use("/api/user", router)
app.use("/api/exercise", exerciseRouter)
app.use("/api/order", orderRouter)
app.use("/api/product", productRouter)
app.use("/api/exerciseType", exerciseTypeRouter)
app.use("/api/productCategory", productCategoryRouter)



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/css', express.static(path.join(__dirname, '..','frontend', 'css')));
app.use('/assets', express.static(path.join(__dirname, '..', 'frontend', 'assets')));

app.use(express.static(path.join(__dirname, 'frontend', 'pages')));

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname,'..', 'frontend', 'pages', 'index.html');
    res.sendFile(indexPath);
});
app.get('/order', (req, res) => {
    const indexPath = path.join(__dirname,'..', 'frontend', 'pages', 'orders.html');
    res.sendFile(indexPath);
});
app.get('/exercise', (req, res) => {
    const indexPath = path.join(__dirname,'..', 'frontend', 'pages', 'exercises.html');
    res.sendFile(indexPath);
});
app.get('/profile', (req, res) => {
    const indexPath = path.join(__dirname,'..', 'frontend', 'pages', 'profile.html');
    res.sendFile(indexPath);
});
app.get('/about', (req, res) => {
    const indexPath = path.join(__dirname,'..', 'frontend', 'pages', 'about.html');
    res.sendFile(indexPath);
});
app.get('/login', (req, res) => {
    const indexPath = path.join(__dirname,'..', 'frontend', 'pages', 'signin.html');
    res.sendFile(indexPath);
});
app.get('/register', (req, res) => {
    const indexPath = path.join(__dirname,'..', 'frontend', 'pages', 'signup.html');
    res.sendFile(indexPath);
});

mongoose.connect("mongodb://localhost:27017/TrainAnd").then(
    ()=>app.listen(5009)
).then(()=>console.log("Connected to database and listening 5009")).catch((err)=>console.log(err))

