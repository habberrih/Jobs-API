async function httpRegisterUser(req, res) {
  return res.send('Register user');
}

async function httpLoginUser(req, res) {
  return res.send('Login user');
}

module.exports = {
  httpRegisterUser,
  httpLoginUser,
};
