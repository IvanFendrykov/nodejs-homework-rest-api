
const { ctrlWrapper } = require("../helpers/index");
const authenticate = require("./authenticate")
const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
module.exports = {
  validateBody,
  isValidId,
  authenticate: ctrlWrapper(authenticate),
  
};
