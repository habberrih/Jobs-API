// @ts-nocheck
import Joi from 'joi';


export const NestedIntFilterSchemaObject = {
    equals: Joi.number(),
  in: Joi.array().items(Joi.number()),
  notIn: Joi.array().items(Joi.number()),
  lt: Joi.number(),
  lte: Joi.number(),
  gt: Joi.number(),
  gte: Joi.number(),
  not: Joi.alternatives().try(Joi.number(),
Joi.link('#NestedIntFilter'))
}