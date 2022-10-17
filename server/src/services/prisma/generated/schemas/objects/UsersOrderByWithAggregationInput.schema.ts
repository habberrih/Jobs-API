// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UsersCountOrderByAggregateInputSchemaObject } from './UsersCountOrderByAggregateInput.schema';
import { UsersAvgOrderByAggregateInputSchemaObject } from './UsersAvgOrderByAggregateInput.schema';
import { UsersMaxOrderByAggregateInputSchemaObject } from './UsersMaxOrderByAggregateInput.schema';
import { UsersMinOrderByAggregateInputSchemaObject } from './UsersMinOrderByAggregateInput.schema';
import { UsersSumOrderByAggregateInputSchemaObject } from './UsersSumOrderByAggregateInput.schema'

export const UsersOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  email: SortOrderSchema,
  password: SortOrderSchema,
  _count: Joi.object().keys(UsersCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(UsersAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(UsersMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(UsersMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(UsersSumOrderByAggregateInputSchemaObject)
}