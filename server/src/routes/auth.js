const express = require('express');
const router = express.Router();

const { httpRegisterUser, httpLoginUser } = require('../controllers/auth');

router.route('/register').post(httpRegisterUser);
router.route('/login').post(httpLoginUser);

module.exports = router;
