import ApiError from "../utils/ApiErrors.js";
import httpStatus from "http-status";
import { verifyToken } from "../utils/token.utils.js";

export const Authentication = (req, res, next) => {
  try {
    const headers = req.headers["authorization"] || "";
    if (!headers || !headers.startsWith("Bearer ")) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Please Login First");
    }
    const auth_token = headers.split(" ")[1];
    if (!auth_token) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Please Provide valid token");
    }

    const data = verifyToken(auth_token);

    req.user = data._id;
    next();
  } catch (error) {
    next(error);
  }
};
