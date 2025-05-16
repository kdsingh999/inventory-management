import Profile from "../models/profile.model.js";
import User from "../models/user.model.js";
import ApiError from "../utils/ApiErrors.js";
import httpStatus from "http-status";
import { generateToken } from "../utils/token.utils.js";

class AuthService {
  static async RegisterUser(user) {
    const checkUser = await User.findOne({ email: user.email });
    if (checkUser) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User already exists");
      return;
    }
    const userExist = await User.create(user);
    const token = generateToken(userExist);
    const refresh_token = generateToken(userExist, "2d");
    await Profile.create({
      user: userExist._id,
      refreshToken: refresh_token,
    });

    return {
      userExist,
      message: "User registered successfully",
      token: token,
    };
  }
  static async LoginUser(user) {
    const userExist = await User.findOne({ email: user.email });
    if (!userExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User does not exist");
      return;
    }
    if (userExist.password !== user.password) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Incorrect password");
      return;
    }
    const token = generateToken(userExist);
    return {
      userExist,
      message: "User logged in successfully",
      token: token,
    };
  }
  static async Profile(user) {
    const profile = await Profile.findOne({ user: user })
      .populate("user")
      .select("-refreshToken");
    return {
      data: profile,
      message: "Profile fetched successfully",
    };
  }
}

export default AuthService;
