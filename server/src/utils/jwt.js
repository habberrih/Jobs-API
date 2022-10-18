require('dotenv').config();

const jwt = require('jsonwebtoken');

exports.generateToken = async (user) => {
  const TokenData = {
    infoUser: { id: user.id, username: user.name },
    JWTSecret: process.env.JWT_SECRET,
    JWT_expired: {
      expiresIn: process.env.JWT_LIFETIME,
    },
  };

  //Generate the token
  const token = jwt.sign(
    TokenData.infoUser,
    TokenData.JWTSecret,
    TokenData.JWT_expired
  );
  return token;
};
