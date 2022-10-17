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
  const result = await registerUser(value);
  return res.status(200).json(result);
}

async function httpLoginUser(req, res) {
  return res.send('Login user');
}

async function httpGetAllUsers(req, res) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ msg: 'You fucked up' });
  }
}

module.exports = {
  httpRegisterUser,
  httpLoginUser,
  httpGetAllUsers,
};
