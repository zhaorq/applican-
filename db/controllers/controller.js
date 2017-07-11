// const User = require('../models/User.js');
const savedJobs = require('../models/savedJobs.js');

exports.updateJobStatus = (req, res) => {
  const jobId = req.params.id;
  const { newStatus } = req.body;
  savedJobs.findById(jobId)
    .then((job) => {
      if (job) {
        return job.update({ status: newStatus });
      }
      throw new Error('Job Not Found');
    })
    .then(() => res.sendStatus(200))
    .catch(err => res.setStatus(400).send(err));
};
