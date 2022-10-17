// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema'

export const UsersWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#UsersWhereInput'),
Joi.array().items(Joi.link('#UsersWhereInput'))),
  OR: Joi.array().items(Joi.link('#UsersWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#UsersWhereInput'),
Joi.array().items(Joi.link('#UsersWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  name: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  email: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string())
}