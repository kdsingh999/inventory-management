// routes/index.js
import express from "express";
import { authRouter } from "./Auth.route.js";

const router = express.Router();

const routes = [
  {
    path: "/auth",
    route: authRouter,
  },
];

routes.forEach((element) => {
  router.use(element.path, element.route);
});

export default router;
