// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema'

export const UsersScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#UsersScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#UsersScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#UsersScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#UsersScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#UsersScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  name: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  email: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string())
}