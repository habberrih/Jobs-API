const { StatusCodes } = require('http-status-codes');

// Joi Validation, Error Handling
const { ValidateCreateUser } = require('./validator');
const { BadRequestError, UnauthenticatedError } = require('../errors');
const { generateToken } = require('../utils/jwt');
const { comparePassword } = require('../utils/cmp-login-password');
const {
  registerUser,
  loginUsers,
  getUserById,
  getUserByEmail,
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
    user: { name: createdUser.name },
    token,
  });
}

async function httpLoginUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please enter an email and password');
  }

  // check if the user is in the database
  const user = await getUserByEmail(email);
  if (!user) throw new UnauthenticatedError('Invalid email or password');

  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) throw new UnauthenticatedError('Incorrect password');

  const token = await generateToken(user);
  return res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
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
