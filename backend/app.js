import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes.js'
import exerciseRouter from './routes/exercise-routes.js'
import orderRouter from './routes/order-routes.js'
import productRouter from './routes/product-router.js'
import exerciseTypeRouter from './routes/exercise-type-routes.js'
import productCategoryRouter from './routes/product-category-routes.js'
import path from 'path'
import faker from 'faker';
import ProductCategory from "./models/ProductCategory.js";
import Exercise from './models/Exercise.js'
import ExerciseType from './models/ExerciseType.js'
import Order from './models/Order.js'
import User from './models/User.js'
import Product from './models/Product.js'
import { generateProductCategories, generateProducts, generateExerciseType, generateOrders, generateExercises, generateUsers  } from './utils/generateUsers.js';
import { fileURLToPath } from 'url'
const app = express()
app.use(express.json())

const exerciseIds = [
  "65a8aee51b675ba7286f4b21",
  "65a8aef41b675ba7286f4b23",
  "65a8aefb1b675ba7286f4b25",
  "65a8af031b675ba7286f4b27",
  "65a8af201b675ba7286f4b29",
  "65a8af791b675ba7286f4b2d",
  "65a8af5c1b675ba7286f4b2b",
  "65a8af811b675ba7286f4b2f",
];
  
// const exerciseTypes = generateExerciseType(5); 
// const users = generateUsers(1000, exerciseIds);
// const products = generateProducts(10); 

// const orders = generateOrders(100, users, products); 
// const exercises = generateExercises(5, exerciseTypes); 
// const productCategories = generateProductCategories(3); 


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

mongoose.connect("mongodb://localhost:27017/TrainAnd").then(async () => {

//   ProductCategory.insertMany(productCategories)
//     .then(() => console.log('Product categories seeded successfully'))
//     .catch((err) => console.error('Error seeding product categories:', err));

    // ExerciseType.insertMany(exerciseTypes)
    // .then(() => console.log('Exercise types seeded successfully'))
    // .catch((err) => console.error('Error seeding exercise types:', err));
    // Exercise.insertMany(exercises)
    // .then(() => console.log('Exercise seeded successfully'))
    // .catch((err) => console.error('Error seeding exercises:', err));
    // Product.insertMany( )
    // .then(() => console.log('products seeded successfully'))
    // .catch((err) => console.error('Error seeding products:', err));
    // User.insertMany(users)
    // .then(() => console.log('users seeded successfully'))
    // .catch((err) => console.error('Error seeding users:', err));
    // const users = await User.find().limit(1000);
    // const products = await Product.find().limit(10);
    // const orders = generateOrders(100, users, products); 
    // Order.insertMany(orders)
    // .then(() => console.log('orders seeded successfully'))
    // .catch((err) => console.error('Error seeding orders:', err));


  app.listen(5009, () => {
    console.log("Connected to database and listening on port 5009");
  });
}).catch((err) => console.error('Error connecting to database:', err));
