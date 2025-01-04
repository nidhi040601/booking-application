import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { errorGenerator } from "../utils/errorGenerator.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(200).json("User is registered.");
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(errorGenerator(404, "User not found!"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return next(errorGenerator(400, "Wrong password or username!"));
    }

    const { password, isAdmin, ...otherUserDetails } = user._doc;

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherUserDetails });
  } catch (error) {
    return next(error);
  }
};
