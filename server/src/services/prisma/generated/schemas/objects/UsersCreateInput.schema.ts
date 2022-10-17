// @ts-nocheck
import Joi from 'joi';


export const UsersCreateInputSchemaObject = {
    name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required()
}