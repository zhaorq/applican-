const express = require('express');
const path = require('path');
const app = express();

//INIT
app.set('port', process.env.PORT || 2245);
app.use(express.static(path.join(__dirname, '/public')));
app.listen(app.get('port'), (err) => {
  if(err){
    return console.log('Error starting server', err);
  }
  return console.log('Applican-: Listening on port:', app.get('port'));
})

module.exports = app;
