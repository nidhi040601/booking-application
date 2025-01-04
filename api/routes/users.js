import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkToken", verifyToken, (req, res, next) => {
  res.send("You are logged in");
});

router.get("/verifyUser/:id", verifyUser, (req, res, next) => {
  res.send("You are logged in and you can delete and update access");
});

router.get("/verifyAdmin/:id", verifyAdmin, (req, res, next) => {
  res.send(
    "You are logged in and you can delete and update access for all accounts"
  );
});

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", verifyAdmin, getAllUsers);

export default router;
