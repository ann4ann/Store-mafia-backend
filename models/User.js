import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  phone: {
    type: Number,
  },

  name: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  address: {
    city: {
      type: String,
    },
    street: {
      type: String,
    },
    homeNumber: {
      type: String,
    },
  },
});

export default mongoose.model("User", userSchema);
