import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { getDirname } from "./utils";
const dn = getDirname(import.meta.url);

import productRouter from "./routes/product-routes";
import uploadRouter from "./routes/upload-route";
import userRouter from "./routes/user-routes";
import reviewRouter from "./routes/review-routes";
import cartRouter from "./routes/cart-routes";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
config();
mongoose.set("strictQuery", false);

app.use(cookieParser());
app.use(express.json({ extended: true }));
app.use("/assets/images", express.static(path.join(dn, "images")));
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/review", reviewRouter);
app.use("/api/cart", cartRouter);
app.use("/api", uploadRouter);

mongoose
  .connect(process.env.DATABASE)
  .then(() => app.listen(process.env.PORT))
  .then(() => console.log("connected to db and listening *** port"))
  .catch((err) => console.log(err));
