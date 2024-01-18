import express from 'express'
import { getAllExericiseTypes, addExerciseType, updateExerciseType, getExerciseTypeById, deleteExerciseType } from '../controllers/exercise-type-controller.js'

const exerciseTypeRouter = express.Router()
exerciseTypeRouter.get("/", getAllExericiseTypes)
exerciseTypeRouter.post("/add", addExerciseType)
exerciseTypeRouter.put("/update/:id", updateExerciseType)
exerciseTypeRouter.get("/:id", getExerciseTypeById)
exerciseTypeRouter.delete("/:id", deleteExerciseType)

export default exerciseTypeRouter