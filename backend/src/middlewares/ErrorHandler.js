import ApiError from "../utils/ApiErrors.js";

const ErrorHandling = (err, req, res, next) => {
  const obj = {};
  if (err instanceof ApiError) {
    obj["message"] = err.message;
    obj["statusCode"] = err.statusCode;
    obj["stack"] = err.stack;
  } else {
    obj["message"] = err.message;
    obj["statusCode"] = 500;
    obj["stack"] = err.stack;
  }
  res.status(obj.statusCode).json(obj);
};

export default ErrorHandling;
