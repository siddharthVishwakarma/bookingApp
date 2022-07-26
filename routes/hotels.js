import express from "express";
import Hotel from "../models/hotel.js";
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update
router.put("/:id", async (req, res) => {
  const updateHotel = await Hotel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true } // return updated request via api
  );

  try {
    res.status(200).json(updateHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  await Hotel.findByIdAndDelete(req.params.id);

  try {
    res.status(200).json("Hotel Deleated");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get
router.get("/:id", async (req, res) => {
  const Hotels = await Hotel.findById(req.params.id);

  try {
    res.status(200).json(Hotels);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All
router.get("/", async (req, res) => {
  const Hotels = await Hotel.find(req.params.id);

  try {
    res.status(200).json(Hotels);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
