const User = require('../models/user');

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // see if a user if the given email exist
  User.findOne({ email: email }, function(err, existingUser) {

  })
  // if it does exist, return an error
  // if it does not exist, create user and save user record

  // respond to request indicationg the user was created
}
