import mongoose from 'mongoose'

const productItemSchema = new mongoose.Schema({
    productId: String,
    quantity: Number,
    price: Number,
})

const cartSchema = new mongoose.Schema({
    userId: String,
    items: [productItemSchema]
})

export default mongoose.model('Cart', cartSchema) 