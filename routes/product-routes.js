import express from "express";
import {
  addProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product-controller";
const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.post("/add", addProduct);
productRouter.put("/update/:id", updateProduct);

export default productRouter;
