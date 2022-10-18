require('dotenv').config();
//JWT module
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

// Models module
const {
  registerUser,
  loginUsers,
  getUserById,
  getAllUsers,
} = require('../models/auth-user');

// Joi Validation
const { ValidateCreateUser } = require('./validator');
// errors Module
const { BadRequestError } = require('../errors');

async function httpRegisterUser(req, res) {
  const newUser = req.body;

  // Validate the request
  const { error, value } = ValidateCreateUser(newUser);
  if (error) throw new BadRequestError(error.details[0].message);

  const createdUser = await registerUser(value); // store in db

  const TokenData = {
    infoUser: { id: createdUser.id, username: createdUser.name },
    JWTSecret: process.env.JWT_SECRET,
    JWT_expired: {
      expiresIn: '30d',
    },
  };

  //Generate the token
  const token = jwt.sign(
    TokenData.infoUser,
    TokenData.JWTSecret,
    TokenData.JWT_expired
  );

  return res.status(StatusCodes.CREATED).json({ createdUser, token });
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
