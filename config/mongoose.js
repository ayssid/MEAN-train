/**
 * Created by atc on 07-Jul-15.
 */

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);

    require('../app/models/user.server.model');

    return db;
};