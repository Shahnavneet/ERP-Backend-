import mongoose from "mongoose";
import { CustomError } from "../utils/index.js";

export const dbConnect = async () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("Connected to the database sucessfully");
  } catch (err) {
    throw new CustomError("Unable to connect to this databse", 500);
  }
};
