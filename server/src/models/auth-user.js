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

async function getAllUsers() {
  const usersWithPass = await prisma.users.findMany({});
  let usersWithoutPass = {};
  for (let index = 0; index < usersWithPass.length; index++) {
    delete usersWithPass[index].password;
    usersWithoutPass = { ...usersWithoutPass, usersWithPass };
  }
  return usersWithoutPass;
}

async function getUserById(userId) {
  return await prisma.users.findMany({
    where: {
      id: userId,
    },
  });
}

async function getUserByEmail(userEmail) {
  try {
    return await prisma.users.findUnique({
      where: {
        email: userEmail,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

async function registerUser(validatedUser) {
  try {
    return await prisma.users.create({
      data: validatedUser,
    });
  } catch (err) {
    console.log(err);
  }
}

async function loginUsers(user) {
  return 'user logined in';
}

async function deleteAllUsers() {
  const users = await prisma.users.findMany({});

  return prisma.users.deleteMany({
    where: {
      id: users.id,
    },
  });
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  registerUser,
  loginUsers,
  deleteAllUsers,
};
