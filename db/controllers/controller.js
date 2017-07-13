// const User = require('../models/User.js');
const savedJobs = require('../models/savedJobs.js');
const Contacts = require('../models/contacts.js');

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

exports.addContact = (req, res) => {
  const name = req.body.name || null;
  const position = req.body.position || null;
  const Email = req.body.Email || null;
  const FollowUp = req.body.FollowUp || null;
  Contacts.create({ name, position, Email, FollowUp })
    .then((contact) => {
      console.log('created contact:', contact);
    })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

exports.removeContact = (req, res) => {
  const contactId = req.params.id;
  Contacts.findById(contactId)
    .then((contact) => {
      if (contact) {
        return contact.destroy();
      }
      throw new Error('Contact Not Found');
    })
    .then(() => res.status(200).send())
    .catch(err => res.status(400).send(err));
};

exports.getContacts = (req, res) => {
  Contacts.findAll()
    .then((contacts) => {
      res.status(200).send(contacts);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
