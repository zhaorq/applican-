const authRouter = require('express').Router();
const passport = require('passport');

// function isLoggedIn(req, res, next) {
//   console.log('Session is: ', req.session.passport.user); // return 2, which is the user_id. 
//   if (req.isAuthenticated()) { return next(); }
//   res.redirect('/');
// }

// Google oauth route
authRouter.get('/google',
  passport.authenticate('google', { prompt: 'consent', scope: ['profile', 'email'] }));

// Google oauth callback
authRouter.get('/google/callback',
  passport.authenticate('google', {
    prompt: 'consent',
    failureRedirect: '/auth/google',
    successRedirect: '/',
  }) // eslint-disable-line
);

authRouter.get('/checkAuth', (req, res) => {
  res.status(200).json({
    status: req.isAuthenticated() });
});

// authRouter.get('/success', (req, res) => {
//  res.status(202).send('login success')
// }) // this runs super slow as a success redirect. 


module.exports = authRouter;
