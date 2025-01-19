import Hotel from "../models/Hotel.js";

const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    return next(error);
  }
};

const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    return next(error);
  }
};

const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("The hotel is deleted.");
  } catch (error) {
    return next(error);
  }
};

const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    return next(error);
  }
};

const getAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  let limit = parseInt(req.query.limit) || 4; // Default limit to 10
  // Some problem with limit
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: parseInt(min) || 1, $lt: parseInt(max) || 999 },
    }).limit(limit);
    res.status(200).json(hotels);
  } catch (error) {
    return next(error);
  }
};

const getHotelCountByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    return next(error);
  }
};

const getCountByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "Apartment" });
    const resortCount = await Hotel.countDocuments({ type: "Resort" });
    const villaCount = await Hotel.countDocuments({ type: "Villa" });
    const cabinCount = await Hotel.countDocuments({ type: "Cabin" });

    res.status(200).json([
      { type: "Hotel", count: hotelCount },
      { type: "Apartment", count: apartmentCount },
      { type: "Resort", count: resortCount },
      { type: "Villa", count: villaCount },
      { type: "Cabin", count: cabinCount },
    ]);
  } catch (error) {
    return next(error);
  }
};

export {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
  getHotelCountByCity,
  getCountByType,
};
