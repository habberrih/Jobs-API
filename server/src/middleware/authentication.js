require('dotenv').config();
const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

async function authenticationMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authontication Invalid');
  }
  const token = authHeader.split(' ')[1];

  try {
    const decodedTokenToPyload = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decodedTokenToPyload;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authontication Invalid');
  }
}

module.exports = authenticationMiddleware;
