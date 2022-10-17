import Joi from 'joi';
import { UsersUpdateInputSchemaObject, UsersWhereUniqueInputSchemaObject } from './objects'

export const UsersUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(UsersUpdateInputSchemaObject), where: Joi.object().keys(UsersWhereUniqueInputSchemaObject)  }).required()