const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function registerUser(validatedUser) {
  return await prisma.users.create({
    data: validatedUser,
  });
}

async function getAllUsers() {
  return await prisma.users.findMany({});
}

async function loginUsers(user) {
  return 'user logined in';
}

module.exports = {
  registerUser,
  loginUsers,
  getAllUsers,
};
