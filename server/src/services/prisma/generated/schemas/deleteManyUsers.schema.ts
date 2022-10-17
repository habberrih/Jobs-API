import Joi from 'joi';
import { UsersWhereInputSchemaObject } from './objects'

export const UsersDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(UsersWhereInputSchemaObject)  }).required()