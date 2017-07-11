const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const apiRouter = require('./router/apiRouter');
const authRouter = require('./router/authRouter');
const cookieParser = require('cookie-parser')();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./db/models/User');


app.use(express.static(path.join(__dirname, '/public')));

// Google oauth setup
passport.use(new GoogleStrategy({
  clientID: '748574587907-3stt2ub1q9tnaqh7rci4sort4bl5cqtb.apps.googleusercontent.com',
  clientSecret: 'c5t-iX_qW1DVbuyNMtXgGRCy',
  callbackURL: 'http://localhost:2245/auth/google/callback',
},
(accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
    .then((user) => {
      if (user) {
        done(null, user);
      } else {
        const newUser = new User();
        newUser.name = profile.displayName;
        newUser.googleId = profile.id;
        newUser.save((err) => {
          if (err) {
            throw err;
          }
          return done(null, newUser);
        });
      }
    });
}));


passport.serializeUser((user, done) => { // eslint-disable-line unexpected function express
  done(null, user);
});

passport.deserializeUser((id, done) => { // eslint-disable-line unexpected function express
  User.findById(id, (err, user) => { // eslint-disable-line unexpected function express
    done(err, user);
  });
});

// MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
// app.use((req, res, next) => {
//   if (req.session.passport) {
//     console.log(req.session.passport.user);
//     console.log('User is Logged In');
//   }
//   next();
// });

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
