import mongoose from "mongoose";

const Schema = mongoose.Schema;

const rateSchema = new Schema({
  rate: {
    type: Number,
  },
  count: {
    type: Number,
  },
});

const categorySchema = new Schema({
  category: {
    type: String,
  },
  name: {
    type: String,
  },
});

const productSchema = new Schema({
  img: [
    {
      type: String,
    },
  ],
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: "Будет добвлено в ближайшее время",
  },
  price: {
    type: Number,
    required: true,
  },
  aviableNum: {
    type: Number,
    default: 0,
  },
  rate: rateSchema,
  category: categorySchema,
});

export default mongoose.model("Product", productSchema);
