const Joi = require('joi');

const CreateUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(6).required(),
});

module.exports = {
  CreateUserSchema,
};
