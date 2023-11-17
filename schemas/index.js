const userLoginSchema = require("./auth");
const userRegisterSchema = require("./auth");
const addSchema = require("./contacts");
const updateFavoriteSchema = require("./contacts");
const emailSchema = require("./auth");

module.exports = {
  addSchema,
  updateFavoriteSchema,
  userRegisterSchema,
  userLoginSchema,
  emailSchema,
};
