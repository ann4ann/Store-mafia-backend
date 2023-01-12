import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    productId: String,
    name: String,
    text: String,
    rate: Number,
    email: String
})

export default mongoose.model("Review", reviewSchema); 