const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  phone: Joi.string().required(),
});

module.exports = contactSchema;
