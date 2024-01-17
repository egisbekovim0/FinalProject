import express from 'express'
import { getAllExercises, addExercise, updateExercise, getById, deleteExercise } from '../controllers/exercise-controller.js'

const exerciseRouter = express.Router()
exerciseRouter.get("/", getAllExercises)
exerciseRouter.post("/add", addExercise)
exerciseRouter.put("/update/:id", updateExercise)
exerciseRouter.get("/:id", getById)
exerciseRouter.delete("/:id", deleteExercise)

export default exerciseRouter