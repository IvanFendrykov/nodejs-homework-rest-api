const userLoginSchema = require("./auth");
const userRegisterSchema = require("./auth");
const addSchema = require("./contacts");
const updateFavoriteSchema = require("./contacts");

module.exports = {
  addSchema,
  updateFavoriteSchema,
  userRegisterSchema,
  userLoginSchema,
};
