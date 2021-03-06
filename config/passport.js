/**
 * Created by atc on 12-Jul-15.
 */

var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function(){
    var User = mongoose.model('User');

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findOne({
            _id: id
        }, '-password -salt', function(err, user) {
            done(err, user);
        });
    });

    require('./strategies/local')();
    require('./strategies/facebook')();
    require('./strategies/twitter')();
    require('./strategies/google')();
};