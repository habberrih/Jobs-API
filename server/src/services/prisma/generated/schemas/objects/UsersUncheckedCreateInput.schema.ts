// @ts-nocheck
import Joi from 'joi';


export const UsersUncheckedCreateInputSchemaObject = {
    id: Joi.number(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required()
}