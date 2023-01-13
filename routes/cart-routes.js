import express from "express";
import CartController from "../controllers/cart-controller";

const cartController = new CartController()
const cartRouter = express.Router();

cartRouter.get("/:userId", cartController.getByUserId);
cartRouter.post("/:userId", cartController.create);
cartRouter.post("/create/item", cartController.createCartItem);
cartRouter.put("/update", cartController.updateQuantity);
cartRouter.delete("/delete", cartController.deleteCartItem);
export default cartRouter;
