const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares/index");
const schemaAuth = require("../../schemas");
const {
  register,
  login,
  getCurrent,
  logout,
  uppAvatar
} = require("../../controllers/auth/index");

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(schemaAuth.userRegisterSchema),
  register
);

authRouter.post("/login", validateBody(schemaAuth.userLoginSchema), login);

authRouter.get("/current", authenticate, getCurrent);

authRouter.post("/logout", authenticate, logout);

authRouter.patch("/avatars", authenticate, upload.single("avatar"), uppAvatar);

module.exports = authRouter;
