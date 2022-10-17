import Joi from 'joi';
import { UsersUpdateManyMutationInputSchemaObject, UsersWhereInputSchemaObject } from './objects'

export const UsersUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(UsersUpdateManyMutationInputSchemaObject), where: Joi.object().keys(UsersWhereInputSchemaObject)  }).required()