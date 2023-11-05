const express = require("express");
const { validateBody } = require("../../middlewares");
const {
  register,
  login,
  getCurrent,
  logout,
} = require("../../controllers/auth/index");
const { authenticate } = require("../../middlewares/index");
const userSchemas = require("../../schemas/index");

const authRouter = express.Router();

const userRegisterValidate = validateBody(userSchemas.userRegisterSchema);
const userLoginValidate = validateBody(userSchemas.userLoginSchema);

authRouter.post("/register", userRegisterValidate, register);

authRouter.post("/login", userLoginValidate, login);

authRouter.get("/current", authenticate, getCurrent);

authRouter.post("/logout", authenticate, logout);

module.exports = authRouter;
