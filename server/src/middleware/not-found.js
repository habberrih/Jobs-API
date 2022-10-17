const { StatusCodes } = require('http-status-codes');

async function notFoundMiddleware(req, res, next) {
  return res.status(StatusCodes.NOT_FOUND).send('Route does not exist');
}

module.exports = notFoundMiddleware;
