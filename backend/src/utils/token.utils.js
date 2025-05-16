import jwt from "jsonwebtoken";
import PUBLIC_DATA from "../../contant.js";

const generateToken = (user, expire = "1d") => {
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    PUBLIC_DATA.JWT_SECRET,
    {
      expiresIn: expire,
    }
  );
  return token;
};

const verifyToken = (token) => {
  const user = jwt.verify(token, PUBLIC_DATA.JWT_SECRET);
  return user;
};

export { generateToken, verifyToken };
