import mongoose from "mongoose";

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
})

export default mongoose.model("Exercise", exerciseSchema)
