import express from 'express'
import { getAllUserExercises, addUserExercise, updateUserExercise, getUserExerciseById, deleteUserExercise, getUserExerciseProgressByUserId } from '../controllers/user-exercise-controller.js'

const userExerciseRouter = express.Router()

userExerciseRouter.get("/", getAllUserExercises)
userExerciseRouter.post("/add", addUserExercise)
userExerciseRouter.put("/update/:id", updateUserExercise)
userExerciseRouter.get("/:id", getUserExerciseById)
userExerciseRouter.delete("/:id", deleteUserExercise)
userExerciseRouter.get('/user/:id', getUserExerciseProgressByUserId)

export default userExerciseRouter