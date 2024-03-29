import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true, 
        minlength: 5
    },
    user_level: {
        type: Number,
        default: 0,
        required: true,
    },
    xp: {
        type: Number,
        default: 0,
        required: true
    },
    exercises: [{
        exercise: {
            type: mongoose.Types.ObjectId,
            ref: "Exercise",
            required: true,
        },
        progress: {
            type: Number,
            default: 0,
            required: true
        },
        exercise_level: {
            type: Number,
            default: 0,
            required: true
        }
    }]
})

export default mongoose.model("User", userSchema)
