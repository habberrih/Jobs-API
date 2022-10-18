const express = require('express');
const router = express.Router();

const {
  httpRegisterUser,
  httpLoginUser,
  httpGetAllUsers,
  httpDeleteAllUsers,
} = require('../controllers/auth-user');

router.route('/register').post(httpRegisterUser);
router.route('/login').post(httpLoginUser);
router.route('/users').get(httpGetAllUsers).delete(httpDeleteAllUsers);

module.exports = router;
