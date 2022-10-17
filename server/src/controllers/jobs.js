async function httpGetAllJobs(req, res) {
  return res.send('get all jobs');
}

async function httpGetJobById(req, res) {
  return res.send('get one job');
}

async function httpCreateJob(req, res) {
  return res.send('create job');
}

async function httpUpdateJob(req, res) {
  return res.send('Update job');
}

async function httpDeleteJob(req, res) {
  return res.send('Delete job');
}

module.exports = {
  httpGetAllJobs,
  httpGetJobById,
  httpCreateJob,
  httpUpdateJob,
  httpDeleteJob,
};
