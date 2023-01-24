import express from "express";
import {
  getAllUsers,
  getUser,
  login,
  signup,
  verifyToken,
} from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/user", verifyToken, getUser);

export default userRouter;
