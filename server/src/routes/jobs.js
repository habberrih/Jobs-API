const express = require('express');
const router = express.Router();

const {
  httpGetAllJobs,
  httpGetJobById,
  httpCreateJob,
  httpUpdateJob,
  httpDeleteJob,
} = require('../controllers/jobs');

router.route('/').get(httpGetAllJobs).post(httpCreateJob);
router
  .route('/:id')
  .get(httpGetJobById)
  .patch(httpUpdateJob)
  .delete(httpDeleteJob);

module.exports = router;
