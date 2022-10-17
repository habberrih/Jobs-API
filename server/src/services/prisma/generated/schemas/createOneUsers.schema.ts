import Joi from 'joi';
import { UsersCreateInputSchemaObject } from './objects'

export const UsersCreateSchema = Joi.object().keys({ data: Joi.object().keys(UsersCreateInputSchemaObject)  }).required()