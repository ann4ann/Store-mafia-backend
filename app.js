import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/product-routes";
import uploadRouter from "./routes/upload-route";
import userRouter from "./routes/user-routes";
import path from "path";
import { getDirname } from "./utils";
const dn = getDirname(import.meta.url);
import reviewRouter from "./routes/review-routes";
import cartRouter from "./routes/cart-routes";

const app = express();
mongoose.set("strictQuery", false);
app.use(express.json({ extended: true }));
app.use("/assets/images", express.static(path.join(dn, "images")));

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/review", reviewRouter);
app.use("/api/cart", cartRouter);
app.use("/api", uploadRouter);

mongoose
  .connect(
    "mongodb://u0eixv1kkyqg8sbfvisk:p1EJWj0L6duchP3a6jj3@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bdvwaoptvhb1z6e?replicaSet=rs0"
  )
  .then(() => app.listen(5001))
  .then(() => console.log("connected to db and listening 5001 port"))
  .catch((err) => console.log(err));
