import Joi from 'joi';

export const UsersScalarFieldEnumSchema = Joi.string().valid(...["id","name","email","password"])