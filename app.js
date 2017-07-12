const express = require('express');
const path = require('path');
const Session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const apiRouter = require('./router/apiRouter');
const authRouter = require('./router/authRouter');
const cookieParser = require('cookie-parser')();
const passport = require('passport');


app.use(express.static(path.join(__dirname, '/public')));


// MIDDLEWARE
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser);

// PASSPORT SETUP
require('./router/passport.js')(passport);

app.use(Session({ secret: 'hippos', resave: true, saveUninitialized: true }));

// ROUTING
app.use('/api', apiRouter);
app.use('/auth', authRouter);

// Automatically redirects to index.html for React-Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

// INIT
app.set('port', process.env.PORT || 2245);


app.listen(app.get('port'), (err) => {
  if (err) {
    return console.log('Error starting server', err);
  }
  return console.log('Applican-: Listening on port:', app.get('port'));
});

module.exports = app;
