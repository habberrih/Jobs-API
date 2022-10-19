const Joi = require('joi');

const ValidationOptions = {
  abortEarly: false,
};

const validator = (schema) => (payload) =>
  schema.validate(payload, ValidationOptions);

const CreateUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

const CreateJobSchema = Joi.object({
  company: Joi.string().required(),
  positions: Joi.string().required(),
  stauts: Joi.optional(),
  user_id: Joi.number().required(),
});
const UpdateJobSchema = Joi.object({
  company: Joi.string().required(),
  positions: Joi.string().required(),
});

exports.ValidateCreateUser = validator(CreateUserSchema);
exports.ValidateCreateJob = validator(CreateJobSchema);
exports.ValidateUpdateJob = validator(UpdateJobSchema);
