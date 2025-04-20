import mongoose from "mongoose";
import PUBLIC_DATA from "../../contant.js";

const connectDB = async () => {
  try {
    await mongoose.connect(PUBLIC_DATA.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
