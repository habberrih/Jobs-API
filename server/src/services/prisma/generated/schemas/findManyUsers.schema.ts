import Joi from 'joi';
import { UsersWhereInputSchemaObject, UsersOrderByWithRelationInputSchemaObject, UsersWhereUniqueInputSchemaObject } from './objects';
import { UsersScalarFieldEnumSchema } from './enums'

export const UsersFindManySchema = Joi.object().keys({ where: Joi.object().keys(UsersWhereInputSchemaObject), orderBy: Joi.object().keys(UsersOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(UsersWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(UsersScalarFieldEnumSchema)  }).required()