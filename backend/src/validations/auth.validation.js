import { body } from "express-validator";
class AuthValidation {
  static RegisterUser = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().notEmpty().withMessage("Email is required"),
    body("password")
      .notEmpty()
      .isString()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
  ];
  static LoginUser = [
    body("email").isEmail().notEmpty().withMessage("Email is required"),
    body("password")
      .notEmpty()
      .isString()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ];
}
export default AuthValidation;
