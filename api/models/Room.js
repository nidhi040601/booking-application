import mongoose from "mongoose";
const { Schema } = mongoose;

const Room = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },

  roomNumbers: [{ number: Number, unavailableRooms: { type: [Date] } }],
});

export default mongoose.model("Room", Room);
