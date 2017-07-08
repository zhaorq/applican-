const express = require('express');
const path = require('path');

const app = express();
const apiRouter = require('./router/apiRouter');
const authRouter = require('./router/authRouter');

// INIT
app.set('port', process.env.PORT || 2245);
app.use(express.static(path.join(__dirname, '/public')));

// Automatically redirects to index.html for React-Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.listen(app.get('port'), (err) => {
  if (err) {
    return console.log('Error starting server', err);
  }
  return console.log('Applican-: Listening on port:', app.get('port'));
});

// ROUTING
app.use('/api', apiRouter);
app.use('/auth', authRouter);

module.exports = app;
