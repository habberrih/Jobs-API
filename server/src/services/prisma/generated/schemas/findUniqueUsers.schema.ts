import Joi from 'joi';
import { UsersWhereUniqueInputSchemaObject } from './objects'

export const UsersFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(UsersWhereUniqueInputSchemaObject) }).required()