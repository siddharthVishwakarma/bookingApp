import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to Database");
  } catch (error) {
    throw error;
  }
};

app.listen(8000, () => {
  connect();
  console.log("connected to Backend!");
});
