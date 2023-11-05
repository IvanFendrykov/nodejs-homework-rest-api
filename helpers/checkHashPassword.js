const bcrypt = require("bcrypt");

const checkHashPassword = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};

module.exports = checkHashPassword;
