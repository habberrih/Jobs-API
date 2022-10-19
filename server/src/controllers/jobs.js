const { ValidateCreateJob, ValidateUpdateJob } = require('./validator');
const { StatusCodes } = require('http-status-codes');
const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  ForbiddenError,
} = require('../errors/');

const {
  getAllJobs,
  createJob,
  deleteJob,
  getJobById,
  updateJob,
} = require('../models/job');

async function httpGetAllJobs(req, res) {
  try {
    const user = req.user;
    const jobs = await getAllJobs(user);
    return res.status(StatusCodes.OK).json({ jobs });
  } catch (error) {
    throw new BadRequestError('Something went wrong!!');
  }
}

async function httpGetJobById(req, res) {
  const {
    user: { id: userId },
    params: { id: jobId },
  } = req;

  const singleJob = await getJobById(Number(jobId), userId);

  if (singleJob == []) throw new ForbiddenError('this is not your own job');

  return res.status(StatusCodes.OK).json(singleJob);
}

async function httpCreateJob(req, res) {
  req.body.user_id = req.user.id; // take the user_id from the req.user after decode the token and added to the req.body
  const newJob = req.body;

  const { error, value } = ValidateCreateJob(newJob);
  if (error) throw new BadRequestError('Something went wrong!!');

  const job = await createJob(value);
  return res.status(StatusCodes.CREATED).json({ job });
}

async function httpUpdateJob(req, res) {
  const {
    body: { company, positions },
    params: { id: jobId },
    user: { id },
  } = req;
  const { error, value } = ValidateUpdateJob(req.body);
  if (error) return res.status(StatusCodes.BAD_REQUEST).json(error.details);
  try {
    const updatedJob = await updateJob(Number(jobId), value, id);
    return res.status(StatusCodes.OK).json({ updatedJob });
  } catch (error) {
    console.log(error);
    throw new ForbiddenError('Can not update, this is not your own job');
  }
}

async function httpDeleteJob(req, res) {
  const jobId = Number(req.params.id);
  const deletedJob = await deleteJob(jobId);
  return res.send('Delete job');
}

module.exports = {
  httpGetAllJobs,
  httpGetJobById,
  httpCreateJob,
  httpUpdateJob,
  httpDeleteJob,
};
