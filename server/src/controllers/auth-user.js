const {
  registerUser,
  loginUsers,
  getAllUsers,
} = require('../models/auth-user');

// Joi Validation
const { CreateUserSchema } = require('./joi-schema/userSchema');

async function httpRegisterUser(req, res) {
  const newUser = req.body;
  const { error, value } = CreateUserSchema.validate(newUser);

  try {
    const result = await registerUser(value);
    return res.status(200).json(result);
  } catch (err) {
    console.log(error);
    return res.status(500).json(error.details[0].message);
  }
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
