import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  getHotelCountByCity,
  updateHotel,
  getCountByType,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/find/:id", getHotel);

router.get("/", getAllHotels);

//Get hotel count by city
router.get("/countByCity", getHotelCountByCity);

//Get count by type
router.get("/countByType", getCountByType);

export default router;
