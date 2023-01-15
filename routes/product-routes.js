import express from "express";
import {
  addProduct,
  getAllProducts,
  updateProduct,
  getProduct,
  deleteProduct,
  getProductsByCategory
} from "../controllers/product-controller";
const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/category/:category", getProductsByCategory);
productRouter.get("/:id", getProduct);
productRouter.post("/add", addProduct);
productRouter.put("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;
 