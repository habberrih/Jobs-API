const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

// Prisma Middleware
prisma.$use(async (params, next) => {
  const validatedUserData = params.args.data;
  if (params.model == 'Users' && params.action == 'create') {
    // Generate a Hash Password and store it in the database
    const salt = await bcrypt.genSalt(10); // length of hash string
    const hashedPassword = await bcrypt.hash(validatedUserData.password, salt);

    validatedUserData.password = hashedPassword;
  }
  const result = await next(params);
  return result;
});

async function registerUser(validatedUser) {
  try {
    return await prisma.users.create({
      data: validatedUser,
    });
  } catch (err) {
    console.log(err);
  }
}

async function getAllUsers() {
  return await prisma.users.findMany({});
}

async function getUserById(userId) {
  return await prisma.users.findMany({
    where: {
      id: userId,
    },
  });
}

async function loginUsers(user) {
  return 'user logined in';
}

module.exports = {
  registerUser,
  loginUsers,
  getAllUsers,
  getUserById,
};
