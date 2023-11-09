const bcrypt = require("bcryptjs");

const User = require("../../models/user");
const { HttpError } = require("../../helpers/index");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
     throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL });

  res.status(201).json({
    code: 201,
    user: {
      email: newUser.email,
      name: newUser.name,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
