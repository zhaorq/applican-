// const User = require('../models/User.js');
const savedJobs = require('../models/savedJobs.js');

exports.deleteJob = (req, res) => {
  const jobId = req.params.id;
  savedJobs.findById(jobId)
    .then((job) => {
      if (job) {
        return job.destroy();
      }
      throw new Error('Job Not Found');
    })
    .then(() => res.status(200).send())
    .catch(err => res.status(400).send(err));
};

exports.updateJobStatus = (req, res) => {
  const jobId = req.params.id;
  const { status } = req.body;
  savedJobs.findById(jobId)
    .then((job) => {
      if (job) {
        return job.update({ status });
      }
      throw new Error('Job Not Found');
    })
    .then(() => res.status(200).send())
    .catch(err => res.status(400).send(err));
};
