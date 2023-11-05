const User = require("../../models/user");

const { HttpError } = require("../../helpers/index");

const logout = async (req, res, next) => {
  const { _id } = req.user;
  if (!_id) {
    throw HttpError(404);
  }

  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(200).json({ message: "No Content" });
};
module.exports = logout;