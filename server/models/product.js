import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        required: true,
    },
    image: {
        type: String,
    },
    stock: {
        type: Number,
        required: true,
    }
});

export default mongoose.model("Product", productSchema);

