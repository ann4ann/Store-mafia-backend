import express from "express";
import CartController from "../controllers/cart-controller";

const cartController = new CartController()
const cartRouter = express.Router();

cartRouter.get("/", cartController.getByUserId);
cartRouter.post("/", cartController.create);
cartRouter.post("/item", cartController.createCartItem);
cartRouter.put("/", cartController.updateQuantity);
cartRouter.delete("/", cartController.deleteCartItem);
export default cartRouter;
