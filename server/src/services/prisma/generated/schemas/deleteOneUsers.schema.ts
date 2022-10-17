import Joi from 'joi';
import { UsersWhereUniqueInputSchemaObject } from './objects'

export const UsersDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(UsersWhereUniqueInputSchemaObject)  }).required()