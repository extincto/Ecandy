var passport = require('passport');
var User = require('./user.model');
var UserService = require('./user.service');
var LocalStrategy  = require('passport-local');

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, none){
    UserService.getUsersId(id, function(err, user){
        done(err, user);
    });

});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwordc',
    passReqToCallBack: true
}, function(req, email, passwordc, done){
    UserService.login()
}

))