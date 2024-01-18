import mongoose from "mongoose";

const Schema = mongoose.Schema

const productCategorySchema = new Schema({
    product:{
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    category: {
        type: String,
        required: true
    },
})

export default mongoose.model("ProductCategory", productCategorySchema)
