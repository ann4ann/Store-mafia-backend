import express from "express";
import ReviewController from "../controllers/review-controller";

const reviewController = new ReviewController()
const reviewRouter = express.Router();

reviewRouter.get("/", reviewController.get);
reviewRouter.post("/", reviewController.post);

export default reviewRouter;
