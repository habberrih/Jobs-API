import Joi from 'joi';
import { UsersWhereInputSchemaObject, UsersOrderByWithAggregationInputSchemaObject, UsersScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { UsersScalarFieldEnumSchema } from './enums'

export const UsersGroupBySchema = Joi.object().keys({ where: Joi.object().keys(UsersWhereInputSchemaObject), orderBy: Joi.object().keys(UsersOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(UsersScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(UsersScalarFieldEnumSchema).required()  }).required()