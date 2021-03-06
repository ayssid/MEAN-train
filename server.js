/**
 * Created by atc on 06-Jul-15.
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
    mongoose = require('./config/mongoose'),
    passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);

console.log('Server running at http://localhost:3000/');
module.exports = app;