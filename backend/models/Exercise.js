import mongoose from "mongoose";

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    exerciseType:{
        type: mongoose.Types.ObjectId,
        ref: "ExerciseType",
        required: true,
    },
})

export default mongoose.model("Exercise", exerciseSchema)
