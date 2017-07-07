const axios = require("axios");
var apiRouter = require('express').Router();
//search from Dice's API. 
apiRouter.post('/search', function (req, res) {
  var text = 'Java'; 
  var city = "New+York,+NY"; //must be in this format; 
	axios.get('http://service.dice.com/api/rest/jobsearch/v1/simple.json?text='+text+'&city='+city
  )
  .then(function(response) {     
		res.send(response.data.resultItemList)
	})
	.catch(function(err) { 
		console.warn(err);
		res.send('NOPE')
	})
});

module.exports = apiRouter;