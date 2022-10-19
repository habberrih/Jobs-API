const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getAllJobs(user) {
  return prisma.jobs.findMany({
    where: {
      createdBy: {
        id: user.id,
      },
    },
    orderBy: [
      {
        createdAt: 'asc',
      },
    ],
  });
}

async function getJobById(jobId, userId) {
  try {
    return prisma.jobs.findMany({
      where: {
        id: jobId,
        createdBy: {
          // users table
          id: userId,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function createJob(validatedJob) {
  return prisma.jobs.create({
    data: validatedJob,
  });
}

async function updateJobThrowUser(userId, jobId, job) {
  // updated job from user table
  await prisma.users.update({
    where: {
      id: userId,
    },
    data: {
      //Jobs table
      job: {
        update: {
          where: {
            id: jobId,
          },
          data: job,
        },
      },
    },
  });
}

async function updateJob(jobId, job, userId) {
  await updateJobThrowUser(userId, jobId, job);
  // get the updated job
  return await prisma.jobs.findUnique({
    where: {
      id: jobId,
    },
  });
}

async function deleteJob(jobId) {
  return prisma.jobs.delete({
    where: {
      id: jobId,
    },
  });
}

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
