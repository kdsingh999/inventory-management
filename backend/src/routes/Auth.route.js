import express from "express";
import AuthValidation from "../validations/auth.validation.js";
import Validation from "../middlewares/validations.js";
import AuthController from "../controllers/auth.controller.js";
import { Authentication } from "../middlewares/authentication.js";

export const authRouter = express.Router();
authRouter.post(
  "/register",
  AuthValidation.RegisterUser,
  Validation,
  AuthController.RegisterUser
);
authRouter.post(
  "/login",
  AuthValidation.LoginUser,
  Validation,
  AuthController.LoginUser
);
authRouter.get("/profile", Authentication, AuthController.Profile);
