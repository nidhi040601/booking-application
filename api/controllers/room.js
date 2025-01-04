import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

const createRoom = async (req, res, next) => {
  const newRoom = new Room(req.body);
  const hotelId = req.params.hotelId;

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      return next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    return next(error);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    return next(error);
  }
};

const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;

  try {
    await Room.findByIdAndDelete(req.params.id);

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      return next(error);
    }

    res.status(200).json("The Room is deleted.");
  } catch (error) {
    return next(error);
  }
};

const getRoom = async (req, res, next) => {
  try {
    const Room = await Room.findById(req.params.id);
    res.status(200).json(Room);
  } catch (error) {
    return next(error);
  }
};

const getAllRooms = async (req, res, next) => {
  try {
    const Rooms = await Room.find();
    res.status(200).json(Rooms);
  } catch (error) {
    return next(error);
  }
};

export { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms };
