import path from "path";
import dotenv from "dotenv";

dotenv.config();

const PUBLIC_DATA = {
  port: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};
export default PUBLIC_DATA;
