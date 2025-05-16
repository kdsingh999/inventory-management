import { validationResult } from "express-validator";
import ApiError from "../utils/ApiErrors.js";
import httpStatus from "http-status";

const Validation = (req, res, next) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      throw new ApiError(httpStatus.BAD_REQUEST, result.array()[0].msg);
      return;
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default Validation;
