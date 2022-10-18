const bcrypt = require('bcryptjs');

exports.comparePassword = async (candidatePassword, dbPassword) => {
  const isMatch = bcrypt.compare(candidatePassword, dbPassword);
  return isMatch;
};
