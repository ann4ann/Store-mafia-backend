import User from "../models/User";
import bcrypt from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();
const jwtKey = process.env.JWT_SECRET_KEY;

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "no users found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User alredy exist. Use another email" });
  }

  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    userName,
    email,
    password: hashedPassword,
  });
  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "This user doesnt exist. Try another email" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect password" });
  }
  const token = jwt.sign({ id: existingUser.id }, jwtKey, {
    expiresIn: "30s",
  });

  res.cookie(String(existingUser.id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30),
    httpOnly: true,
    sameSite: "lax",
  });

  return res
    .status(200)
    .json({ message: "login successfull", user: existingUser, token });
};

export const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];
  // console.log(token);

  if (!token) {
    res.status(404).json({ message: "No token found" });
  }
  jwt.verify(String(token), jwtKey, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "invalid token" });
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
};

export const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, "-password");
  } catch (err) {
    return new Error(err);
  }
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  return res.status(200).json({ user });
};
