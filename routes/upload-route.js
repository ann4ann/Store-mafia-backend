import express from "express";
import { uploadImg } from "../controllers/upload-controller";
import fileMiddleware from "../middleware/file";

const uploadRouter = express.Router();

uploadRouter.post("/upload", fileMiddleware.single("img"), uploadImg);

export default uploadRouter;
