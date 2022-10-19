const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getAllJobs(user) {
  return prisma.jobs.findMany({
    where: {
      createdBy: {
        id: user.id,
      },
    },
  });
}

async function getJobById(jobId) {
  return;
}

async function createJob(validatedJob) {
  return prisma.jobs.create({
    data: validatedJob,
  });
}

async function updateJob() {
  return;
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
