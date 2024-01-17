import mongoose from "mongoose";

const Schema = mongoose.Schema

const userExerciseSchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    exercise:{
        type: mongoose.Types.ObjectId,
        ref: "Exercise",
        required: true,
    },
    progress: {
        type: Number,
        default: 0,
        required: true,
    },
    exercise_level: {
        type: Number,
        default: 0,
        required: true
    }
})

export default mongoose.model("UserExerciseProgress", userExerciseSchema)