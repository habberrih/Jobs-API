const CustomAPIError = require('./custom-error');
const BadRequestError = require('./bad-request');
const UnauthenticatedError = require('./unauthentication');
const NotFoundError = require('./not-found');

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
};
