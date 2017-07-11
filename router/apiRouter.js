const axios = require('axios');
const router = require('express').Router();
const controllers = require('../db/controllers/controller');
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

router.put('/jobs/:id', controllers.updateJobStatus);
router.delete('/jobs/:id', controllers.deleteJob);

module.exports = router;
