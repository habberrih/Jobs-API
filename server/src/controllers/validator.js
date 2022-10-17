const Joi = require('joi');

const ValidationOptions = {
  abortEarly: false,
};

const validator = (schema) => (payload) =>
  schema.validate(payload, ValidationOptions);

const CreateUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(6).required(),
});

exports.ValidateCreateUser = validator(CreateUserSchema);
