const axios = require('axios');
const router = require('express').Router();
const controllers = require('../db/controllers/controller');

const Xray = require('x-ray');

const xR = Xray();
// search from Dice's API.
router.post('/search', (req, res) => {
  axios.get(`http://service.dice.com/api/rest/jobsearch/v1/simple.json?text={text}&city={city}`) // eslint-disable-line
    .then((response) => {
      res.send(response.data.resultItemList);
    })
    .catch((err) => {
      console.warn(err);
      res.send('NOPE');
    });
});

router.post('/dice', (req, res) => {
  console.log('this is req body', req.body.url);
  const stream = xR(req.body.url, '#jobdescSec').stream();
  stream.pipe(res);
  console.log('awefa', res);
});

router.put('/jobs/:id', controllers.updateJobStatus);
router.delete('/jobs/:id', controllers.deleteJob);
router.post('/contacts', controllers.addContact);
router.get('/contacts', controllers.getContacts);
router.delete('/contacts/:id', controllers.removeContact);

module.exports = router;
