import Joi from 'joi';
import { UsersWhereUniqueInputSchemaObject, UsersCreateInputSchemaObject, UsersUpdateInputSchemaObject } from './objects'

export const UsersUpsertSchema = Joi.object().keys({ where: Joi.object().keys(UsersWhereUniqueInputSchemaObject), data: Joi.object().keys(UsersCreateInputSchemaObject), update: Joi.object().keys(UsersUpdateInputSchemaObject)  }).required()