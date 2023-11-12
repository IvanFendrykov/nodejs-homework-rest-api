const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const { HttpError, checkHashPassword } = require("../../helpers/index");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid ");
  }
  if (!user.verify) {
    throw HttpError(401, "Email not verify");
  }

  const hashPassword = await checkHashPassword(password, user.password);
  if (!hashPassword) {
    throw HttpError(401, "Email or password invalid ");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    code: 200,
    token,
    user: { email, subscription: user.subscription },
  });
};

module.exports = login;
