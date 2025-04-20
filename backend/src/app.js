import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.config.js";
import router from "./routes/index.js";
import ApiError from "./utils/ApiErrors.js";
import ErrorHandling from "./middlewares/ErrorHandler.js";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
// app.use("*", (req, res) => {
//   throw new ApiError(404, "Route not found");
// });
app.use("/api/v1", router);
app.use(ErrorHandling);

export default app;
