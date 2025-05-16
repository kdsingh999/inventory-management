import AuthService from "../services/auth.service.js";
import CatchAsync from "../utils/CatchAsync.js";
import httpStatus from "http-status";

class AuthController {
  static RegisterUser = CatchAsync(async (req, res) => {
    const res_obj = await AuthService.RegisterUser(req.body);
    res.status(httpStatus.CREATED).send(res_obj);
  });

  static LoginUser = CatchAsync(async (req, res) => {
    const res_obj = await AuthService.LoginUser(req.body);
    res.status(httpStatus.OK).send(res_obj);
  });

  static Profile = CatchAsync(async (req, res) => {
    const res_obj = await AuthService.Profile(req.user);
    res.status(httpStatus.OK).send(res_obj);
  });
}

export default AuthController;
