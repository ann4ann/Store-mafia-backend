import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();
mongoose.set("strictQuery", false);
app.use(express.json());

app.use("/api/user", router);
mongoose
  .connect(
    "mongodb://u0eixv1kkyqg8sbfvisk:p1EJWj0L6duchP3a6jj3@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bdvwaoptvhb1z6e?replicaSet=rs0"
  )
  .then(() => app.listen(5001))
  .then(() => console.log("connected to db and listening 5001 port"))
  .catch((err) => console.log(err));
