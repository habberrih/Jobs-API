const { StatusCodes } = require('http-status-codes');

// Joi Validation, Error Handling
const { ValidateCreateUser } = require('./validator');
const { BadRequestError } = require('../errors');
const { generateToken } = require('../utils/jwt');
const {
  registerUser,
  loginUsers,
  getUserById,
  getAllUsers,
  deleteAllUsers,
} = require('../models/auth-user');

async function httpRegisterUser(req, res) {
  const newUser = req.body;

  // Validate the request
  const { error, value } = ValidateCreateUser(newUser);
  if (error) throw new BadRequestError(error.details[0].message);

  // store user in db after validation the request, then generate token
  const createdUser = await registerUser(value);
  const token = await generateToken(createdUser);

  return res.status(StatusCodes.CREATED).json({
    user: { name: createdUser.name, email: createdUser.email },
    token,
  });
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

async function httpDeleteAllUsers(req, res) {
  try {
    await deleteAllUsers();
    return res.status(StatusCodes.OK).json('ok everything deleted');
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Something went wrong!!');
  }
}

module.exports = {
  httpRegisterUser,
  httpLoginUser,
  httpGetAllUsers,
  httpDeleteAllUsers,
};
