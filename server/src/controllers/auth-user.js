const { StatusCodes } = require('http-status-codes');
const {
  registerUser,
  loginUsers,
  getAllUsers,
} = require('../models/auth-user');

// Joi Validation
const { ValidateCreateUser } = require('./validator');

// errors Module
const { BadRequestError } = require('../errors');

async function httpRegisterUser(req, res) {
  const newUser = req.body;

  // Validation the request
  const { error, value } = ValidateCreateUser(newUser);

  if (error) {
    throw new BadRequestError(error.details[0].message);
  }

  const createdUser = await registerUser(value);
  return res.status(StatusCodes.CREATED).json(createdUser);
}

async function httpLoginUser(req, res) {
  return res.send('Login user');
}

async function httpGetAllUsers(req, res) {
  try {
    const users = await getAllUsers();
    return res.status(StatusCodes.OK).json(users);
  } catch (error) {
    throw new BadRequestError('Something went wrong!!');
  }
}

module.exports = {
  httpRegisterUser,
  httpLoginUser,
  httpGetAllUsers,
};
