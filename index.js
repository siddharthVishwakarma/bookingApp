import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import authHotels from "./routes/hotels.js";
import authRooms from "./routes/rooms.js";
import authUsers from "./routes/users.js";

const app = express();
dotenv.config();

// Initial database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Database");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("error", (err) => {
  console.log("Database Disconnected!\n", err);
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB Connected!");
});

// middlewares
app.use("/api/auth", authRoute);
app.use("/api/hotels", authHotels);
app.use("/api/rooms", authRooms);
app.use("/api/users", authUsers);

app.listen(8000, () => {
  connect();
  console.log("connected to Backend!");
});
