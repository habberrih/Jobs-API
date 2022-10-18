const bcrypt = require('bcryptjs');
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

  const { error, value } = ValidateCreateUser(newUser);

  if (error) {
    throw new BadRequestError(error.details[0].message);
  }

  // Generate a Hash Password and store it in the database
  const salt = await bcrypt.genSalt(10); // length of hash string
  const hashedPassword = await bcrypt.hash(value.password, salt);

  // create temp user for the hashed password
  const tempUser = {
    name: value.name,
    email: value.email,
    password: hashedPassword,
  };
  const createdUser = await registerUser(tempUser);
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
