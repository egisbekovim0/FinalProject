import mongoose from "mongoose";

const Schema = mongoose.Schema

const orderSchema = new Schema({
    order:{
        type: mongoose.Types.ObjectId,
        ref: "Order",
        required: true,
    },
    product:{
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    }
})

export default mongoose.model("OrderProduct", orderSchema)