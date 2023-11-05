const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const userRegisterSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required().messages({
      "string.empty": `email is a required`,
      "string.pattern.base": `email invalid`,
    }),
    password: Joi.string().min(6).required(),
    subscription: Joi.string(),
  });

const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = userRegisterSchema;
module.exports = userLoginSchema;