/**
 * Created by atc on 06-Jul-15.
 */

module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
}