const { ctrlWrapper } = require("../../helpers/index");
const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const uppAvatar = require("./uppAvatar");
const verifyEmail = require("./verifyEmail");
const sendVerifyEmail = require("./sendVerifyEmail")

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  uppAvatar: ctrlWrapper(uppAvatar),
  verifyEmail: ctrlWrapper(verifyEmail),
  sendVerifyEmail: ctrlWrapper(sendVerifyEmail)
};
