/**
 * Created by Yogi on 7/15/2015.
 */

var passport = require('passport'),
    url = require('url'),
    TwitterStrategy = require('passport-twitter').Strategy,
    config = require('../config'),
    users = require('../../app/controllers/users.server.controller');

module.exports = function() {
    passport.use(new TwitterStrategy({
        consumerKey: config.twitter.clientID,
        consumerSecret: config.twitter.clientSecret,
        callbackURL: config.twitter.callbackURL,
        passReqToCallBack: true
    },
    function(req, token, tokenSecret, profile, done) {
        var providerData = profile._json;
        providerData.accessToken = token;
        providerData.refreshToken = tokenSecret;

        var providerUserProfile = {
            fullName: profile.displayName,
            username: profile.username,
            provider: 'twitter',
            providerId: profile.id,
            providerData: providerData
        };

        users.saveOAuthUserProfile(req, providerUserProfile, done);
    }));
};