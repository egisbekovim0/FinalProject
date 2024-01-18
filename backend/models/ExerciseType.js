import mongoose from "mongoose";

const Schema = mongoose.Schema

const exerciseTypeSchema = new Schema({
    exercise:{
        type: mongoose.Types.ObjectId,
        ref: "Exercise",
        required: true,
    },
    category: {
        type: String,
        required: true
    },
})

export default mongoose.model("ExerciseType", exerciseTypeSchema)
